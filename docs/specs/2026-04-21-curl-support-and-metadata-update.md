# curl eslam.dev — Design Spec

**Date:** 2026-04-21
**Status:** Draft — awaiting infrastructure decision

---

## 1. Problem Statement

When someone runs `curl eslam.dev`, they should get a beautifully formatted, ANSI-colored terminal profile card (like `curl ysap.sh`). Browser users see the normal React SPA unchanged.

---

## 2. Current Architecture

- **Framework:** Vite + React 19 SPA (fully static)
- **Hosting:** GitHub Pages
- **Domain:** eslam.dev
- **Routing:** React Router v7 (client-side only)
- **No server-side code** — no API routes, no middleware, no edge functions

---

## 3. Research: How curl-friendly Sites Work

### 3.1 Detection Mechanism

The server inspects the `User-Agent` header:
- `curl/8.x.x` → serve `text/plain` with ANSI escape codes
- `Mozilla/5.0...` → serve `text/html` (normal site)

Secondary signal: `Accept` header — curl sends `Accept: */*`, browsers send `Accept: text/html,...`

### 3.2 ANSI Escape Code Format

Terminal output uses SGR (Select Graphic Rendition) sequences:

```
\033[38;5;Nm    — Set foreground to 256-color palette color N
\033[48;5;Nm    — Set background to color N
\033[1m         — Bold
\033[3m         — Italic
\033[0m         — Reset all attributes
```

Combined with Unicode box-drawing characters (`┌ ┐ └ ┘ │ ─`) for borders.

### 3.3 Reference Implementations

| Site | Technique | Stack |
|------|-----------|-------|
| **ysap.sh** | Pre-generated static ANSI files, Cloudflare routing by UA | Shell scripts + Cloudflare |
| **wttr.in** | Server-side UA detection, dynamic ANSI generation | Python + nginx |
| **parrot.live** | Streaming ANSI frames via chunked response | Node.js |
| **cheat.sh** | UA detection + content negotiation | Python |

### 3.4 ysap.sh Specifics (from github.com/bahamas10/ysap)

- Shell scripts generate pre-rendered ANSI output at build time
- `colors` script defines palette
- `Makefile` orchestrates building HTML + terminal versions
- Static files served via Cloudflare Pages/CDN
- Cloudflare Worker routes requests based on User-Agent

---

## 4. The Infrastructure Problem

**GitHub Pages cannot do this.** It serves static files with no request inspection. We need a layer that can read headers before deciding what to serve.

---

## 5. Implementation Approaches

### Approach A: Cloudflare Worker (Recommended if already on Cloudflare DNS)

**How it works:**
- A Cloudflare Worker sits in front of the site
- Inspects `User-Agent` on every request
- curl/wget/httpie → serves pre-built ANSI text (stored as a static asset or inline in the worker)
- Browser → passes through to GitHub Pages origin

**Pros:** Zero hosting migration, free tier covers it, fast edge execution
**Cons:** Requires Cloudflare DNS (may already have it for eslam.dev)

```javascript
// Example Cloudflare Worker
export default {
  async fetch(request, env) {
    const ua = request.headers.get('User-Agent') || '';
    const isCurl = /curl|wget|httpie|fetch|libfetch/i.test(ua);

    if (isCurl) {
      return new Response(ANSI_CONTENT, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Pass through to GitHub Pages
    return fetch(request);
  }
};
```

### Approach B: Migrate to Vercel (Free Tier)

**How it works:**
- Move hosting from GitHub Pages to Vercel
- Use Next.js middleware or Vercel Edge Middleware to detect curl
- Serve ANSI content from an edge function

**Pros:** Modern platform, easy middleware, good DX
**Cons:** Requires migration from GitHub Pages, slightly more complex setup

```typescript
// vercel middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const TERMINAL_CLIENTS = /curl|wget|httpie|fetch|libfetch/i;

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  if (TERMINAL_CLIENTS.test(ua)) {
    return new NextResponse(ANSI_CONTENT, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
  return NextResponse.next();
}
```

### Approach C: Migrate to Cloudflare Pages + Functions

**How it works:**
- Move the static site to Cloudflare Pages (still just static files)
- Add a Cloudflare Pages Function (`functions/index.ts`) for UA detection

**Pros:** All-in-one Cloudflare, Pages Functions are simple, free tier
**Cons:** Requires migration from GitHub Pages

---

## 6. Recommended Approach

**If eslam.dev DNS is on Cloudflare:** Use **Approach A** (Worker in front of GitHub Pages). No migration needed.

**If not on Cloudflare:** Use **Approach C** (Cloudflare Pages) — simplest migration path and gives you Workers built in.

---

## 7. Terminal Card Design

The curl output should display a formatted profile card like:

```
┌─────────────────────────────────────────────────┐
│                                                   │
│   Eslam A. Hugair                                │
│   Sr. Full-Stack Engineer & DevOps               │
│                                                   │
│   Location:  Cairo, Egypt                        │
│   Website:   https://eslam.dev                   │
│   GitHub:    github.com/3bdoselam                │
│   Twitter:   @Eslam3bd                           │
│                                                   │
├─────────────────────────────────────────────────┤
│                                                   │
│   Experience: 10+ years                          │
│                                                   │
│   Stack:                                         │
│   • TypeScript / JavaScript                      │
│   • React, Node.js, Next.js                     │
│   • AWS, Docker, CI/CD                          │
│   • MongoDB, PostgreSQL, Supabase               │
│                                                   │
│   Currently:                                     │
│   Sr. Front End Engineer & DevOps @ Mannar.sa   │
│                                                   │
├─────────────────────────────────────────────────┤
│                                                   │
│   "Building scalable web experiences            │
│    from Cairo to the world"                      │
│                                                   │
└─────────────────────────────────────────────────┘
```

With ANSI colors:
- Name: bold + bright cyan (`\033[1;38;5;87m`)
- Role: light green (`\033[38;5;120m`)
- Section headers: orange/gold (`\033[38;5;214m`)
- Links: underlined blue (`\033[4;38;5;75m`)
- Box borders: gray (`\033[38;5;241m`)
- Skills bullets: white/default

### Implementation Notes

- Pre-generate the ANSI content as a static string (build-time, not runtime)
- Store in a file like `public/terminal-card.txt` or inline in the worker
- Always end with `\033[0m` (reset) to prevent terminal color bleed
- Use 256-color palette (`38;5;N`) for max terminal compatibility
- Keep width under 60 chars for narrow terminals
- Consider offering a plain-text fallback at `eslam.dev/plain`

---

## 8. Decision Needed Before Implementation

**Question:** How is eslam.dev's DNS managed?

- **A) Cloudflare** → Use Approach A (Worker), no hosting migration
- **B) Other provider** → Either add Cloudflare, or migrate hosting to Cloudflare Pages/Vercel

Once this is answered, implementation can proceed.

---

## 9. Implementation Order

1. **Design terminal card content** (ANSI art + colors)
2. **Set up infrastructure** (Worker/middleware based on DNS answer)
3. **Deploy and test** (`curl eslam.dev` vs browser)

---

## 10. Resources

- [ysap.sh source](https://github.com/bahamas10/ysap) — reference implementation
- [Cloudflare Workers conditional response](https://developers.cloudflare.com/workers/examples/conditional-response/)
- [ANSI escape codes reference](https://en.wikipedia.org/wiki/ANSI_escape_code)
- [wttr.in source](https://github.com/chubin/wttr.in) — another reference
- [How I Make my Website You Can `curl`](https://www.youtube.com/watch?v=ddG_thnxt9A) — Dave Eddy's video walkthrough
