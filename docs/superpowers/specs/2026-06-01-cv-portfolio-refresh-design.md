# 2026-06-01 — CV + Portfolio Refresh (autonomous execution)

## Goal

Update CV and portfolio to reflect recent project work and pivot positioning from
"frontend craftsman" toward "engineer who builds and owns AI/LLM-orchestrated
platforms end-to-end (with DevOps)." Produce a second, MLOps-leaning CV variant
without overclaiming.

User requested autonomous execution after gathering context — no clarifying-question
loop. This doc records the decisions taken so they can be audited later.

## Inputs

- Pasted external CV review (Python missing, Revic data bullets buried, GoValidate
  absent, name typo `Hugir` vs `Hugair`).
- Local project paths the user pointed to:
  - `/Users/eslam/workspace/govalidate`
  - `/Users/eslam/workspace/oxseer` (QuiQ, Puef, migrations)
  - `/Users/eslam/workspace/tascode` (denture, shorts-gen, story-teller)
  - `/Users/eslam/workspace/video_processing_engin/video_graph`
- URLs the user listed:
  - quiq.netlify.app, quiq-staging.netlify.app, puef.ai,
    yt-pipeline-wgbace7irq-uc.a.run.app, govalidate.dev

## Project sourcing (calibrated against git history)

| Project | Path | Authorship signal | CV / Portfolio framing |
| --- | --- | --- | --- |
| GoValidate | `workspace/govalidate` | Solo (single-author across backend / platform / landing) | Solo full-stack + LLM orchestration product |
| Video Knowledge Engine | `video_graph` | 115/115 commits user (100%) | Solo data-pipeline engine |
| Shorts-Gen | `tascode/shorts-gen` | 4/4 commits user (100%) | Solo prototype |
| Story-Teller | `tascode/story-teller` | 40/40 commits user (100%) | Solo prototype |
| QuiQ (web + api) | `oxseer/quiq/*` | ~78–89% user across both repos | Lead engineer |
| Puef | `oxseer/puef*` | API 8%, web 34%, recent LLM-endpoint work | Contributor on LLM endpoints (fixers, generation) |
| Denture | `tascode/denture` | ~47% user, collab with Samet | Contributor on AI content generation |
| Oxseer migrations | `oxseer/migration` | DB-migration tooling | Mention as supporting work under QuiQ |

## CV variants

Two PDFs out of one generator (`generate_cv.py --variant=primary|mlops`):

- `eslam.dev.cv.pdf` — fullstack + AI / LLM orchestration (primary, replaces current)
- `eslam.dev.cv.mlops.pdf` — MLOps-leaning (Python + data-pipelines lead, AI-native
  framing without overstating Airflow/Kubeflow experience)

## Edits applied

1. Name normalized to **Eslam A. Hugair** everywhere (PDF + About page download
   filename + ProjectReadme references).
2. Mannar.sa role period → "Sep 2025 – Present · Part-Time".
3. Volunteer / Gaza Sky Geeks section removed from both portfolio data and CV.
4. Education on CV: Bachelor's in Software Engineering + "Code Academy graduate —
   Mercy Corps program" (no Gaza Sky Geeks mention).
5. Bio rewritten (two variants — see CV generator).
6. New Projects section on CV (below experience).
7. Skills section gains Python + data tooling + LLM orchestration vocabulary on the
   primary variant; MLOps variant front-loads these.
8. Selected Projects in portfolio expanded with the project lineup above. Type
   gains an optional `screenshot` field. Cards render a static thumbnail when
   present.

## Screenshot capture

One-time static capture via `scripts/capture-screenshots.py` (Playwright
chromium-headless-shell). Targets that returned `200` and will be captured:

- quiq.netlify.app
- puef.ai
- yt-pipeline Cloud Run (note: API endpoint — may render as JSON or minimal UI;
  capture and decide)
- govalidate.dev (landing)
- mannar.sa
- antiqlens.netlify.app

Skipped:

- zaki.net (DNS / network failure)
- app.govalidate.dev (429, auth-gated)

Outputs land in `src/assets/screenshots/<slug>.webp` (re-encoded for size). Script
is one-off — not wired into the build.

## Out of scope (deliberately)

- LinkedIn / GitHub bio sync — different surface.
- Multi-page portfolio redesign — only the projects section + about bio + name.
- Dynamic screenshot refresh — files committed as static assets.
