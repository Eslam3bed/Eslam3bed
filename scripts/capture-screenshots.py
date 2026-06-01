#!/usr/bin/env python3
"""One-shot screenshot capture for portfolio project cards.

Run once, commit the output. Not wired into the build.

    python3 scripts/capture-screenshots.py
"""

from __future__ import annotations

import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

OUT_DIR = Path(__file__).resolve().parent.parent / "src" / "assets" / "screenshots"
OUT_DIR.mkdir(parents=True, exist_ok=True)

TARGETS: list[tuple[str, str]] = [
    ("quiq", "https://quiq.netlify.app/"),
    ("puef", "https://puef.ai/"),
    ("yt-pipeline", "https://yt-pipeline-wgbace7irq-uc.a.run.app/"),
    ("govalidate", "https://govalidate.dev/"),
    ("mannar", "https://mannar.sa/"),
    ("antiqlens", "https://antiqlens.netlify.app/"),
]

VIEWPORT = {"width": 1440, "height": 900}


def main() -> int:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport=VIEWPORT,
            device_scale_factor=2,
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
        )
        for slug, url in TARGETS:
            out = OUT_DIR / f"{slug}.png"
            print(f"capturing {url} -> {out}")
            page = context.new_page()
            try:
                page.goto(url, wait_until="networkidle", timeout=30_000)
            except Exception as exc:
                print(f"  ! networkidle timeout, falling back to load: {exc}")
                try:
                    page.goto(url, wait_until="load", timeout=15_000)
                except Exception as exc2:
                    print(f"  !! failed: {exc2}")
                    page.close()
                    continue
            page.wait_for_timeout(2500)
            page.screenshot(path=str(out), full_page=False, type="png")
            page.close()
        browser.close()
    print(f"done -> {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
