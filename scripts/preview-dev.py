#!/usr/bin/env python3
"""One-off: screenshot the running dev server for a sanity check."""

from pathlib import Path

from playwright.sync_api import sync_playwright

OUT = Path("/tmp/portfolio-preview")
OUT.mkdir(parents=True, exist_ok=True)

PAGES = [
    ("about", "http://localhost:5181/"),
    ("featured", "http://localhost:5181/featured-work"),
    ("journey", "http://localhost:5181/journey"),
]


def main() -> int:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1440, "height": 1800}, device_scale_factor=1)
        for slug, url in PAGES:
            page = context.new_page()
            page.goto(url, wait_until="networkidle", timeout=15_000)
            page.wait_for_timeout(1500)
            out = OUT / f"{slug}.png"
            page.screenshot(path=str(out), full_page=True, type="png")
            print(f"{slug} -> {out}")
            page.close()
        browser.close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
