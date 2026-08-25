#!/usr/bin/env python3
"""Generate Eslam A. Hugair's CV — primary (fullstack + AI/LLM) and MLOps variants.

Usage:
    python3 generate_cv.py                # builds both
    python3 generate_cv.py --variant=primary
    python3 generate_cv.py --variant=mlops
"""

from __future__ import annotations

import argparse
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Tuple

from fpdf import FPDF, XPos, YPos

FULL_NAME = "Eslam A. Hugair"
GITHUB_URL = "github.com/eslam3bed"
# TODO: replace with your real LinkedIn handle before merging.
LINKEDIN_URL = "linkedin.com/in/REPLACE-ME"
# TODO: replace with the awarding institution before merging.
UNIVERSITY = "REPLACE-ME University"

FONT = "Arial"
FONT_DIR = "/System/Library/Fonts/Supplemental/"
ASSETS_DIR = Path(__file__).resolve().parent / "src" / "assets" / "files"


@dataclass(frozen=True)
class ProjectEntry:
    name: str
    role: str
    period: str
    one_liner: str
    bullets: List[str]
    tech: str
    link: Optional[str] = None


@dataclass(frozen=True)
class Variant:
    slug: str
    headline: str
    keywords: str
    bio: str
    skills: List[Tuple[str, str]]
    mannar_role: str
    mannar_bullets: List[str]
    revic_bullets: List[str]
    weart_role: str
    weart_bullets: List[str]
    projects: List[ProjectEntry]


class CV(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=12)
        self.add_font(FONT, "", FONT_DIR + "Arial.ttf", uni=True)
        self.add_font(FONT, "B", FONT_DIR + "Arial Bold.ttf", uni=True)
        self.add_font(FONT, "I", FONT_DIR + "Arial Italic.ttf", uni=True)
        self.add_font(FONT, "BI", FONT_DIR + "Arial Bold Italic.ttf", uni=True)

    def section_title(self, title: str) -> None:
        self.set_font(FONT, "I", 13)
        self.set_text_color(218, 130, 50)
        self.cell(0, 7, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(0.5)

    def company_header(self, company: str, location: str, period: str, link: Optional[str] = None) -> None:
        self.set_font(FONT, "B", 12)
        self.set_text_color(30, 120, 180)
        self.cell(self.get_string_width(company), 7, company, link=link or "")
        self.set_text_color(50, 50, 50)
        self.set_font(FONT, "", 10)
        if location:
            loc_text = f"  – {location}"
            self.cell(self.get_string_width(loc_text) + 2, 7, loc_text)
        self.set_font(FONT, "I", 10)
        self.set_text_color(80, 80, 80)
        self.cell(0, 7, period, align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(50, 50, 50)

    def company_blurb(self, text: str, indent: int = 10) -> None:
        """One italic line describing the employer — replaces the old 'About:' bullet."""
        self.set_font(FONT, "I", 9)
        self.set_text_color(95, 95, 95)
        self.set_x(self.l_margin + indent)
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 4.5, text)
        self.set_text_color(50, 50, 50)

    def role_text(self, role: str) -> None:
        self.set_font(FONT, "I", 10)
        self.set_text_color(50, 50, 50)
        self.cell(0, 6, role, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)

    def bullet(self, text: str, indent: int = 10) -> None:
        self.set_font(FONT, "", 9.5)
        self.set_text_color(50, 50, 50)
        self.set_x(self.l_margin + indent)
        self.cell(5, 5, "•")
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, text)

    def bold_bullet(self, label: str, text: str, indent: int = 10) -> None:
        self.set_font(FONT, "", 9.5)
        self.set_text_color(50, 50, 50)
        self.set_x(self.l_margin + indent)
        self.cell(5, 5, "•")
        self.set_font(FONT, "B", 9.5)
        self.cell(self.get_string_width(label), 5, label)
        self.set_font(FONT, "", 9.5)
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, text)

    def sub_bullet(self, text: str, indent: int = 18) -> None:
        self.set_font(FONT, "", 9.5)
        self.set_text_color(50, 50, 50)
        self.set_x(self.l_margin + indent)
        self.cell(5, 5, "○")
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, text)

    def tech_line(self, techs: str, indent: int = 10) -> None:
        self.set_x(self.l_margin + indent)
        self.set_font(FONT, "", 9.5)
        self.cell(5, 5, "•")
        prefix = "Highlighted technologies used: "
        self.cell(self.get_string_width(prefix), 5, prefix)
        self.set_font(FONT, "B", 9.5)
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, techs)

    def project_header(self, name: str, role_period: str, link: Optional[str] = None) -> None:
        self.set_font(FONT, "B", 11)
        self.set_text_color(30, 120, 180)
        self.cell(self.get_string_width(name), 6, name, link=link or "")
        self.set_text_color(80, 80, 80)
        self.set_font(FONT, "I", 9.5)
        self.cell(0, 6, "  " + role_period, align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(50, 50, 50)


# -----------------------------------------------------------------------------
# Shared content
# -----------------------------------------------------------------------------

MANNAR_BULLETS = [
    "Maintained UI/UX and the frontend architecture for a high-trust legal platform.",
    "Owned platform security, compliance and performance work.",
    "Managed infrastructure, monitoring and DevOps operations.",
    "Built and tuned CI/CD pipelines to shorten the deploy cycle.",
    "Scaled the platform from pilot to thousands of active users.",
    "Designed and shipped the notification system.",
    "Implemented SEO scripts and post-build meta-tag injection.",
]

MANNAR_BULLETS_MLOPS = [
    "Owned end-to-end SWE: services, frontend architecture and the deployment pipeline for a high-trust legal platform.",
    "Owned platform security, compliance and performance work.",
    "Managed infrastructure, monitoring and observability for production traffic.",
    "Built and tuned CI/CD pipelines with regression-test gates and rollback paths to shorten the deploy cycle safely.",
    "Scaled the platform from pilot to thousands of active users.",
    "Designed and shipped the notification system with retry, dead-lettering and audit logging.",
    "Implemented SEO scripts and post-build meta-tag injection.",
]

REVIC_BULLETS_PRIMARY = [
    "Built the data-ingestion services that stream from various integration tools into the analytics platform.",
    "Built debugging tools that surface and resolve data-integrity issues across the pipeline.",
    "Worked alongside the ML team to ship high-integrity model outputs into the product.",
    "Authored Azure Functions services for ingestion, enrichment and downstream notifications.",
    "Worked with Cognito Search and Elasticsearch for big-data retrieval workloads.",
    "Built the Slack bot interface that lets clients explore use cases and act on insights.",
    "Promoted to team lead within 6 months of joining; led a fast-growing sub-team.",
]

REVIC_BULLETS_MLOPS = [
    "Built the data-ingestion services that stream from a variety of integration tools into the analytics platform — the team's auditable intake layer.",
    "Designed and shipped debugging tools that helped the ML and data teams identify and resolve data-integrity issues.",
    "Partnered with the ML team to surface high-integrity model outputs and feedback loops into the product.",
    "Authored Azure Functions services for ingestion, enrichment and downstream notifications at scale.",
    "Worked with Cognito Search and Elasticsearch for big-data retrieval workloads.",
    "Built the Slack bot interface that lets clients explore use cases and act on insights.",
    "Promoted to team lead within 6 months for adaptability and ownership in a fast-growing team.",
]

WEART_BULLETS = [
    "Recovered a real-estate project with a refactoring plan that reduced technical debt and shortened time-to-feature.",
    "Built features and responsive UI components alongside the platform refactor.",
    "Improved product performance and developer-experience around the codebase.",
]

WEART_BULLETS_MLOPS = [
    "Recovered a real-estate project with a refactoring plan that reduced technical debt and shortened time-to-feature.",
    "Built features end-to-end alongside the platform refactor; expanded unit, integration and regression test coverage.",
    "Improved product performance, build pipelines and developer-experience around the codebase.",
]

LEADCART_BULLETS = [
    "Built a custom design-system in React to back the product's design and functional requirements.",
    "Built utility packages of reusable functionality shared across product services.",
    "Owned DevOps for product services (GitHub Actions, AWS) — held 99.9% uptime across the product lifespan.",
    "Promoted to Team Lead within a year and CTO the year after.",
    "Built a standalone affiliate system to track promoter commissions — idea to production in one month.",
    "Built an activity-tracking service for customer events, purchases and lead capture.",
    "Designed a payment-integration facade fronting multiple third-party gateways.",
    "Helped hire and onboard the team to 5+ members; ran assessments and interviews.",
]

# Covers the Feb 2021 - Jan 2022 window between LeadCart and WeArt. An unexplained
# year reads as a layoff you chose not to mention; one line closes it.
GAP_ORG = "REPLACE-ME"
GAP_LOCATION = ""
GAP_ROLE = "REPLACE-ME (freelance / contract / sabbatical / study)"
GAP_BLURB = "REPLACE-ME: one line on what this year was."

ZAINO_BULLETS = [
    "Designed and built the mobile-friendly web app for Zaino clients to manage campaigns and ship banners.",
    "Designed and built the API plus the Google Ads integration services that power campaign report queries.",
    "Built the admin console for ad-fee control, audience segments and notification management.",
    "Built a Socket.io customer-support dashboard for live communication with customers.",
]


# -----------------------------------------------------------------------------
# Project sourcing (calibrated against git authorship)
# -----------------------------------------------------------------------------

GOVALIDATE = ProjectEntry(
    name="GoValidate",
    role="Co-founder · Full-stack + LLM orchestration",
    period="01/2025 - Present",
    one_liner="Co-founded AI-native validation platform — rough startup idea to evidence-backed verdict.",
    bullets=[
        "Shipped end-to-end: NestJS API, Next.js 15 console, Docker Compose + Caddy infra.",
        "BullMQ multi-agent pipeline mining Reddit signals through multi-provider LLMs (OpenAI + Anthropic via LangChain).",
        "Hybrid vector + keyword search on Qdrant; 0–3 source-credibility scoring across academic, government and press.",
    ],
    tech="Next.js 15, NestJS, TypeScript, BullMQ, MongoDB, Qdrant, OpenAI, Anthropic, LangChain, Docker, Caddy.",
    link="https://govalidate.dev",
)

VIDEO_KE = ProjectEntry(
    name="VEngine",
    role="Engineer (team of 3) · Data pipelines + AI",
    period="01/2026",
    one_liner="Video knowledge engine, built with a small team of three — turns video into a searchable, clip-level knowledge graph.",
    bullets=[
        "9-stage BullMQ pipeline: FFmpeg → chunking → parallel Deepgram / Google STT → Gemini / GPT-4o summarization → embeddings → knowledge-graph + dendrogram.",
        "Swappable providers across STT, LLM and embeddings; A/B comparison built in.",
        "Per-video and per-user graphs with cross-video deduplication and SSE progress streaming.",
        "Deployed to Google Cloud Run; storage on local disk or GCS.",
    ],
    tech="NestJS, BullMQ, MongoDB, Redis, Deepgram, Google STT, Gemini, OpenAI, UMAP, GCS, Cloud Run, Turborepo.",
)

QUIQ = ProjectEntry(
    name="QuiQ",
    role="Lead engineer · DevOps",
    period="01/2025 - Present",
    one_liner="Lead engineer on an internal SAT-content review platform — feedback, activity tracking, RBAC, migration tooling.",
    bullets=[
        "Migrated backend from Netlify Functions to a long-lived Express API for predictable load and lower latency.",
        "Built feedback collection, activity / request tracking, RBAC (super-admin / admin / user) and the invitation flow.",
        "Owned the migration tooling piping curated QuiQ content into Puef.",
        "Owned DevOps end-to-end: environments, CI, monitoring, staging / production split.",
    ],
    tech="React, TypeScript, Node.js, Express, MongoDB, Auth0, Zod, Netlify.",
    link="https://quiq.netlify.app/",
)

PUEF = ProjectEntry(
    name="Puef.ai",
    role="Contributor · LLM endpoints + frontend",
    period="01/2025 - Present",
    one_liner="AI SAT-learning platform — adaptive planning, review scheduling and content per learner.",
    bullets=[
        "Hardened the LLM generation endpoints and built the 'fixer' flows that repair invalid or unclear outputs.",
        "Worked across the multi-provider LangChain layer (OpenAI / Anthropic / Gemini / Deepseek).",
        "Frontend work and the integration glue with the QuiQ review pipeline.",
    ],
    tech="Python, Flask, LangChain, OpenAI, Anthropic, Gemini, Deepseek, MongoDB, React, TypeScript, Railway.",
    link="https://puef.ai",
)

STORY_TELLER = ProjectEntry(
    name="Story-Teller",
    role="Solo · LLM orchestration",
    period="01/2025",
    one_liner="Solo-built multi-agent flow that turns a written story into a narrated, illustrated video.",
    bullets=[
        "Orchestrates GPT-4o (scenes), DALL-E 3 (imagery) and ElevenLabs (narration); composes the final video.",
        "Containerized end-to-end — TypeScript frontend, Express + MongoDB backend.",
    ],
    tech="Node.js, Express, React, Vite, TypeScript, OpenAI, DALL-E 3, ElevenLabs, MongoDB, Docker.",
)

SHORTS_GEN = ProjectEntry(
    name="Shorts-Gen",
    role="Solo · Video AI",
    period="01/2025",
    one_liner="Solo-built pipeline that turns long-form video into stylized 30-second shorts.",
    bullets=[
        "ChatGPT picks the best segments; FFmpeg clips and re-encodes; style-transfer pass applies the chosen cartoon look.",
        "CLI-first, GPU-aware, optimized for vertical formats.",
    ],
    tech="Python, FFmpeg, OpenAI, Style transfer, CLI.",
)

DENTURE = ProjectEntry(
    name="Denture Mesh + Content Engine",
    role="Contributor · Mesh processing + LLM",
    period="01/2025",
    one_liner="Dental-mesh capture and annotation toolkit with an AI-generated educational-content layer.",
    bullets=[
        "Mesh annotation pipeline over depth-camera captures (Open3D, NumPy).",
        "Owned the LLM-backed content-generation layer for practitioner-facing material.",
    ],
    tech="Python, Open3D, NumPy, OpenAI, LangChain.",
)


# Four projects carried at full depth; the smaller solo builds fold into one line so
# they still register as keywords without diluting the substantial work.
PROJECTS_PRIMARY = [GOVALIDATE, VIDEO_KE, QUIQ, PUEF]
PROJECTS_MLOPS = [VIDEO_KE, GOVALIDATE, QUIQ, PUEF]

ALSO_BUILT = (
    "Also built: Story-Teller (multi-agent story-to-video: GPT-4o, DALL-E 3, ElevenLabs) - "
    "Shorts-Gen (long-form video to stylized shorts: Python, FFmpeg, style transfer) - "
    "Denture Mesh + Content Engine (Open3D / NumPy mesh annotation with an LLM content layer)."
)


# -----------------------------------------------------------------------------
# Variants
# -----------------------------------------------------------------------------

PRIMARY = Variant(
    slug="primary",
    headline="Full-Stack & AI Engineer · LLM Orchestration · DevOps",
    keywords=(
        "Full-Stack Engineer, AI Engineer, LLM Orchestration, React, Next.js, TypeScript, "
        "Node.js, Python, NestJS, AWS, Google Cloud, Docker, CI/CD, LangChain, RAG, "
        "vector search, Qdrant, MongoDB, PostgreSQL, DevOps, Team Lead, CTO"
    ),
    bio=(
        "Full-stack engineer with 10+ years across startups and product teams. Builds "
        "AI-native platforms end-to-end: multi-provider LLM gateways (OpenAI, Anthropic, "
        "Gemini), queue-driven orchestration (BullMQ), retrieval + vector search (Qdrant, "
        "Pinecone), and the ingestion / evaluation pipelines that feed them. Owns the "
        "work from the data layer through to the React / Next interfaces and the DevOps "
        "to run it on AWS, GCP and Cloud Run. Ships in Python and TypeScript, leads "
        "teams, and operates production systems."
    ),
    skills=[
        ("Frontend: ", "React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, shadcn/ui, Redux, Remix, Vite, SASS, responsive design, SEO optimization."),
        ("Backend & APIs: ", "Node.js, Python, TypeScript, NestJS, Express, Flask, REST + GraphQL, microservices, Socket.io, JWT / OAuth, notification systems."),
        ("Cloud, DevOps & Infra: ", "AWS, Azure, Google Cloud (Cloud Run, GCS), Docker, Docker Compose, CI/CD, GitHub Actions, Jenkins, Railway, Netlify, Vercel, Caddy, monitoring & logging."),
        ("AI / LLM Orchestration: ", "Multi-provider LLM (OpenAI, Anthropic, Gemini, Deepseek) via LangChain; agentic / multi-step pipelines; BullMQ orchestration; RAG; vector search (Qdrant, Pinecone); embeddings; Deepgram / Google STT; DALL-E, ElevenLabs."),
        ("Data Engineering: ", "Python (pandas, NumPy), data-ingestion pipelines, queue-based orchestration, Elasticsearch, Kafka, MongoDB, PostgreSQL, MySQL, CosmosDB, Redis, Qdrant, Cognito Search."),
        ("Security: ", "Auth0 / Clerk integrations, JWT / OAuth, RBAC, input validation & sanitization, CORS / CSP, secure data handling."),
        ("Practices: ", "End-to-end ownership, internal tooling and dashboards, technical mentoring, code reviews, unit + integration testing."),
    ],
    mannar_role="Sr. Front-end Engineer & DevOps",
    mannar_bullets=MANNAR_BULLETS,
    revic_bullets=REVIC_BULLETS_PRIMARY,
    weart_role="Sr. Front-End Developer",
    weart_bullets=WEART_BULLETS,
    projects=PROJECTS_PRIMARY,
)

MLOPS = Variant(
    slug="mlops",
    headline="MLOps & Software Engineer · Data Pipelines · Production ML Infrastructure",
    keywords=(
        "MLOps Engineer, Software Engineer, Data Engineer, data pipelines, Python, "
        "TypeScript, BullMQ, Kafka, Airflow, Docker, CI/CD, Kubernetes-adjacent, AWS, "
        "Google Cloud Run, Azure Functions, Elasticsearch, Qdrant, embeddings, "
        "observability, MongoDB, PostgreSQL"
    ),
    bio=(
        "Software engineer with 10+ years building data-ingestion pipelines, internal "
        "tooling and the infrastructure around ML systems. Writes production Python "
        "and TypeScript services that move data through queues (BullMQ, Kafka), persist "
        "it across MongoDB / Elasticsearch / vector stores, and surface it to ML and "
        "research teams through dashboards, debugging and integrity tooling. Owns the "
        "deployment side end-to-end — Docker, CI/CD with regression-test gates, "
        "monitoring, AWS / GCP, Cloud Run — so the pipelines ship, version cleanly and "
        "roll back safely in production."
    ),
    skills=[
        ("Data & MLOps: ", "Production Python (pandas, NumPy, Open3D, pytest); data-ingestion pipelines; data quality, schema validation and integrity checks; queue-based orchestration (BullMQ; concepts transfer to Airflow / Prefect); vector stores (Qdrant, Pinecone); embeddings; Deepgram / Google STT; debugging + integrity tooling for ML teams."),
        ("Deployment & Reliability: ", "CI/CD with regression-test gates, containerized services (Docker, Docker Compose), blue/green and rollback-friendly releases, monitoring & logging, observability for data pipelines, on-call experience."),
        ("Cloud & Infra: ", "AWS (S3, IAM, Fargate), Google Cloud (Cloud Run, GCS), Azure Functions, GitHub Actions, Jenkins, Railway."),
        ("Languages & Frameworks: ", "Python, TypeScript, Node.js, NestJS, Flask, FastAPI-style services, React, Next.js."),
        ("Storage & Search: ", "MongoDB, PostgreSQL, MySQL, CosmosDB, Redis, Elasticsearch, Kafka, Qdrant."),
        ("Testing & Quality: ", "Unit + integration testing, regression suites, contract tests for ingestion pipelines, data-validation harnesses, code reviews."),
        ("LLM tooling (working knowledge): ", "Multi-provider LLM gateways (OpenAI, Anthropic, Gemini) via LangChain; RAG; prompt fixers / evaluation loops; agentic pipelines."),
        ("Practices: ", "Internal tooling and dashboards for research teams, custom annotation platforms, end-to-end ownership, mentoring."),
    ],
    mannar_role="Sr. Software Engineer & DevOps",
    mannar_bullets=MANNAR_BULLETS_MLOPS,
    revic_bullets=REVIC_BULLETS_MLOPS,
    weart_role="Sr. Software Engineer",
    weart_bullets=WEART_BULLETS_MLOPS,
    projects=PROJECTS_MLOPS,
)


# -----------------------------------------------------------------------------
# Renderer
# -----------------------------------------------------------------------------

def build_cv(variant: Variant) -> Path:
    pdf = CV()
    pdf.set_title(f"{FULL_NAME} - {variant.headline}")
    pdf.set_author(FULL_NAME)
    pdf.set_subject("Curriculum Vitae")
    pdf.set_keywords(variant.keywords)
    pdf.add_page()
    pdf.set_margins(18, 15, 18)
    pdf.set_x(18)

    # Header
    pdf.set_font(FONT, "B", 20)
    pdf.set_text_color(50, 50, 50)
    pdf.cell(0, 10, FULL_NAME, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.set_font(FONT, "I", 10.5)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(0, 5, variant.headline, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1)

    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(80, 80, 80)
    for line in ["Madinaty, Cairo, Egypt", "+201080443206", "e.eslam3bed@gmail.com"]:
        pdf.cell(0, 5, line, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    # ATS parsers read the text layer, not link annotations — URLs must be literal text.
    pdf.set_font(FONT, "B", 10)
    pdf.set_text_color(30, 120, 180)
    pdf.cell(0, 5, GITHUB_URL, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT, link="https://" + GITHUB_URL)
    pdf.cell(0, 5, LINKEDIN_URL, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT, link="https://" + LINKEDIN_URL)
    pdf.ln(4)

    # Bio
    pdf.section_title("Summary")
    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(50, 50, 50)
    pdf.multi_cell(0, 5, variant.bio)
    pdf.ln(4)

    # Work Experience
    pdf.section_title("Work Experience")

    pdf.company_header("Mannar.sa", "KSA (Remote)", "09/2025 - Present  ·  Part-Time", "https://mannar.sa/")
    pdf.role_text(variant.mannar_role)
    pdf.company_blurb("Saudi Arabia's first online legal-consultation platform; secure, scalable architecture for digital legal services.")
    for item in variant.mannar_bullets:
        pdf.sub_bullet(item)
    pdf.tech_line("TypeScript, Node.js, React, AWS, Supabase, Firebase, MongoDB, CI/CD.")
    pdf.ln(1.5)

    pdf.company_header("Revic.ai", "USA (Remote)", "12/2022 - 09/2025", "https://revic.ai")
    pdf.role_text("Sr. Full-Stack Engineer / Team Lead")
    pdf.company_blurb("Data-driven AI analytics platform surfacing department-level insights from heterogeneous integrations.")
    for item in variant.revic_bullets:
        pdf.sub_bullet(item)
    pdf.tech_line("TypeScript, Python, Node.js, React, Azure Functions, CosmosDB, MongoDB, Elasticsearch, Cognito Search, Slack APIs.")
    pdf.ln(1.5)

    # TODO: fill the GAP_* constants above, then delete this note.
    pdf.company_header(GAP_ORG, GAP_LOCATION, "02/2021 - 01/2022", None)
    pdf.role_text(GAP_ROLE)
    pdf.company_blurb(GAP_BLURB)
    pdf.ln(1.5)

    pdf.company_header("WeArt.io", "Berlin, Germany (Remote)", "02/2022 - 12/2022", "https://weart.io/about.html")
    pdf.role_text(variant.weart_role)
    pdf.company_blurb("Development agency focused on shipping quality products.")
    for item in variant.weart_bullets:
        pdf.sub_bullet(item)
    pdf.tech_line("TypeScript, Node.js, Next.js, AWS Fargate, Jenkins, Docker, MySQL, GraphQL.")
    pdf.ln(1.5)

    pdf.company_header("LeadCart.io", "Delaware, USA (Remote)", "08/2018 - 01/2021", "https://web.archive.org/web/20211129084118/https://leadcart.io/")
    pdf.role_text("Chief Technology Officer (CTO)")
    pdf.company_blurb("Cart-solution startup focused on boosting conversions with targeted funnels.")
    for item in LEADCART_BULLETS:
        pdf.sub_bullet(item)
    pdf.tech_line("Node.js, React, AWS, GitHub Actions, Netlify, Next.js, TypeScript, MongoDB, PostgreSQL.")
    pdf.ln(1.5)

    pdf.company_header("Zaino", "", "05/2016 - 09/2019  ·  Concurrent", "https://zaino.app/")
    pdf.role_text("Team Lead, Full-Stack Engineering")
    pdf.company_blurb("Platform that augments the Google Ads customer experience with templates and campaign tooling.")
    for item in ZAINO_BULLETS:
        pdf.sub_bullet(item)
    pdf.tech_line("Node.js, React, AWS, PostgreSQL, Google Ads API, Socket.io.")
    pdf.ln(3)

    # Projects
    pdf.section_title("Selected Projects")
    pdf.ln(1)
    for project in variant.projects:
        pdf.project_header(project.name, f"{project.role}  ·  {project.period}", project.link)
        pdf.set_font(FONT, "", 9.5)
        pdf.set_text_color(50, 50, 50)
        pdf.set_x(pdf.l_margin + 6)
        remaining_w = pdf.w - pdf.get_x() - pdf.r_margin
        pdf.multi_cell(remaining_w, 5, project.one_liner)
        for item in project.bullets:
            pdf.sub_bullet(item, indent=10)
        pdf.set_x(pdf.l_margin + 6)
        pdf.set_font(FONT, "", 9.5)
        prefix = "Stack: "
        pdf.set_text_color(50, 50, 50)
        pdf.cell(pdf.get_string_width(prefix), 5, prefix)
        pdf.set_font(FONT, "B", 9.5)
        pdf.set_text_color(50, 50, 50)
        remaining_w = pdf.w - pdf.get_x() - pdf.r_margin
        pdf.multi_cell(remaining_w, 5, project.tech)
        if project.link:
            pdf.set_x(pdf.l_margin + 6)
            pdf.set_font(FONT, "I", 9)
            pdf.set_text_color(30, 120, 180)
            pdf.cell(0, 5, project.link, link=project.link, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
            pdf.set_text_color(50, 50, 50)
        pdf.ln(1)

    pdf.set_font(FONT, "", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.set_x(pdf.l_margin + 6)
    pdf.multi_cell(pdf.w - pdf.get_x() - pdf.r_margin, 5, ALSO_BUILT)
    pdf.set_text_color(50, 50, 50)

    pdf.ln(1)

    # Skills
    pdf.section_title("Technical Skills")
    for label, content in variant.skills:
        pdf.bold_bullet(label, content)
        pdf.ln(0.5)
    pdf.ln(1)

    # Education
    pdf.section_title("Education")
    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(50, 50, 50)
    degree = f"B.Sc. Software Engineering — {UNIVERSITY}"
    pdf.cell(pdf.get_string_width(degree), 6, degree)
    pdf.cell(0, 6, "02/2012 - 06/2017", align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(1)
    bootcamp = "Code Academy — Mercy Corps program"
    pdf.cell(pdf.get_string_width(bootcamp), 6, bootcamp)
    pdf.cell(0, 6, "01/2017 - 12/2017", align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(2)

    # Languages — one line; still parses as a Languages section, costs two fewer lines.
    pdf.section_title("Languages")
    pdf.bullet("Arabic (native)  ·  English (advanced)")

    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    out_name = "eslam.dev.cv.pdf" if variant.slug == "primary" else f"eslam.dev.cv.{variant.slug}.pdf"
    out_path = ASSETS_DIR / out_name
    pdf.output(str(out_path))
    return out_path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--variant",
        choices=["primary", "mlops", "all"],
        default="all",
    )
    args = parser.parse_args()

    targets: List[Variant] = []
    if args.variant in ("primary", "all"):
        targets.append(PRIMARY)
    if args.variant in ("mlops", "all"):
        targets.append(MLOPS)

    for variant in targets:
        out_path = build_cv(variant)
        print(f"CV generated: {out_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
