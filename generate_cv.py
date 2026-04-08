#!/usr/bin/env python3
"""Generate CV PDF matching the existing format."""

from fpdf import FPDF, XPos, YPos

FONT = "Arial"
FONT_DIR = "/System/Library/Fonts/Supplemental/"


class CV(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=20)
        self.add_font(FONT, "", FONT_DIR + "Arial.ttf", uni=True)
        self.add_font(FONT, "B", FONT_DIR + "Arial Bold.ttf", uni=True)
        self.add_font(FONT, "I", FONT_DIR + "Arial Italic.ttf", uni=True)
        self.add_font(FONT, "BI", FONT_DIR + "Arial Bold Italic.ttf", uni=True)

    def nl(self):
        """Move to next line at left margin."""
        self.set_x(self.l_margin)

    def section_title(self, title):
        self.set_font(FONT, "I", 13)
        self.set_text_color(218, 130, 50)
        self.cell(0, 10, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2)

    def company_header(self, company, location, period, link=None):
        self.set_font(FONT, "B", 12)
        self.set_text_color(30, 120, 180)
        self.cell(self.get_string_width(company), 7, company, link=link or "")
        self.set_text_color(50, 50, 50)
        self.set_font(FONT, "", 10)
        loc_text = f"  \u2013 {location}"
        self.cell(self.get_string_width(loc_text) + 2, 7, loc_text)
        self.set_font(FONT, "I", 10)
        self.set_text_color(80, 80, 80)
        self.cell(0, 7, period, align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_text_color(50, 50, 50)

    def role_text(self, role):
        self.set_font(FONT, "I", 10)
        self.set_text_color(50, 50, 50)
        self.cell(0, 6, role, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)

    def bullet(self, text, indent=10):
        self.set_font(FONT, "", 9.5)
        self.set_text_color(50, 50, 50)
        self.set_x(self.l_margin + indent)
        self.cell(5, 5, "\u2022")
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, text)

    def bold_bullet(self, label, text, indent=10):
        self.set_font(FONT, "", 9.5)
        self.set_text_color(50, 50, 50)
        self.set_x(self.l_margin + indent)
        self.cell(5, 5, "\u2022")
        self.set_font(FONT, "B", 9.5)
        self.cell(self.get_string_width(label), 5, label)
        self.set_font(FONT, "", 9.5)
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, text)

    def sub_bullet(self, text, indent=18):
        self.set_font(FONT, "", 9.5)
        self.set_text_color(50, 50, 50)
        self.set_x(self.l_margin + indent)
        self.cell(5, 5, "\u25CB")
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, text)

    def tech_line(self, techs, indent=10):
        self.set_x(self.l_margin + indent)
        self.set_font(FONT, "", 9.5)
        self.cell(5, 5, "\u2022")
        self.cell(self.get_string_width("Highlighted technologies used: "), 5, "Highlighted technologies used: ")
        self.set_font(FONT, "B", 9.5)
        remaining_w = self.w - self.get_x() - self.r_margin
        self.multi_cell(remaining_w, 5, techs)


def build_cv():
    pdf = CV()
    pdf.add_page()
    pdf.set_margins(18, 15, 18)
    pdf.set_x(18)

    # Header
    pdf.set_font(FONT, "B", 20)
    pdf.set_text_color(50, 50, 50)
    pdf.cell(0, 10, "Eslam A. Hugir", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(80, 80, 80)
    for line in ["Madinaty, Cairo, Egypt", "+201080443206", "e.eslam3bed@gmail.com"]:
        pdf.cell(0, 5, line, align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.set_font(FONT, "B", 10)
    pdf.set_text_color(30, 120, 180)
    pdf.cell(0, 5, "GitHub", align="C", new_x=XPos.LMARGIN, new_y=YPos.NEXT, link="https://github.com/eslam3bed")
    pdf.ln(4)

    # Bio
    pdf.section_title("Bio")
    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(50, 50, 50)
    bio = (
        "I am an experienced full-stack web developer with over 10 years of professional experience, "
        "specializing in creating and maintaining robust end-to-end applications and mobile-friendly websites. "
        "I am deeply dedicated and committed to seeing projects through from inception to completion, with a "
        "particular emphasis on utilizing front-end frameworks to create interactive web applications that deliver "
        "a rich user experience. I excel in collaborative team environments, where my ability to work closely with "
        "cross-functional teams ensures successful project delivery. My passion for continuous learning, innovation, "
        "and exploring new tech potentials drives me to push the boundaries of what's possible in web development, "
        "and what challenges we can tackle."
    )
    pdf.multi_cell(0, 5, bio)
    pdf.ln(6)

    # Work Experience
    pdf.section_title("Work Experience")

    # Mannar.sa
    pdf.company_header("Mannar.sa", "KSA", "09/2025 - Present", "https://mannar.sa/")
    pdf.role_text("Sr. Front end engineer & DevOps")
    pdf.bullet("About: Saudi Arabia's first online legal consultation platform, delivering digital access to legal services with a secure, scalable architecture.")
    pdf.bold_bullet("Achievements/responsibilities:", "")
    for item in [
        "Maintained UI/UX and built the frontend architecture.",
        "Ensured platform security, compliance, and performance.",
        "Managed infrastructure, monitoring, and DevOps operations.",
        "Built and optimized CI/CD pipelines to improve deployment speed.",
        "Scaled the platform from pilot to thousands of active users.",
        "Designed and developed the notification system for mannar.",
        "Implemented SEO scripts and post-build meta tag injection for better search visibility.",
    ]:
        pdf.sub_bullet(item)
    pdf.tech_line("Typescript, NodeJs, ReactJs, AWS services, Supabase, Firebase, MongoDB, CI/CD pipeline.")
    pdf.ln(4)

    # Revic.ai
    pdf.company_header("Revic.ai", "USA", "12/2022 - 9/2025", "https://revic.ai")
    pdf.role_text("Sr. Full Stack engineer/Team lead")
    pdf.bullet("About: Data-driven company, that uses AI and data analysis to provide key factor insights about company departments.")
    pdf.bold_bullet("Achievements/responsibilities:", "")
    for item in [
        "Building a Slack bot, to be the interface to assess our client's use cases.",
        "Worked with the ML team to provide high-integrity results.",
        "Helped build different functionalities using Azure functions.",
        "Delivering high-end front-end solutions.",
        "Building debugging tools that help identify issues with data integrity.",
        "Worked with Cognito search and Elasticsearch for big data solutions, building data ingestion services to stream data from various integration tools.",
        "Adaptable to the fast growth of the Salesdash team, and got promoted after 6 months joining the team to a team lead.",
    ]:
        pdf.sub_bullet(item)
    pdf.tech_line("Typescript, NodeJs, ReactJs, Azure cloud services, CosmosDB, MongoDB.")
    pdf.ln(4)

    # WeArt.io
    pdf.company_header("WeArt.io", "Berlin, Germany", "02/2022 - 12/2022", "https://weart.io/about.html")
    pdf.role_text("Sr. Front End developer")
    pdf.bullet("About: Development Agency, that focuses on making quality products.")
    pdf.bold_bullet("Achievements/responsibilities:", "")
    for item in [
        "Recovered a real estate project, I put a refactoring plan in place to reduce the project's technical debt to help maintain a consistent maintenance cost and reduce the time needed to introduce new functionalities.",
        "Built & developed different features & responsive UI components.",
        "Improve the product performance.",
    ]:
        pdf.sub_bullet(item)
    pdf.tech_line("Typescript, NodeJs, NextJs, AWS Fargate, Jenkins, Dockers, MySQL, GraphQL.")
    pdf.ln(4)

    # LeadCart.io
    pdf.company_header("LeadCart.io", "Delaware, USA", "08/2018 \u2013 01/2021", "https://web.archive.org/web/20211129084118/https://leadcart.io/")
    pdf.role_text("Full stack web developer/ Team lead")
    pdf.bullet("About: Cart Solution Startup focuses on boosting conversions for customer sales, using targeted funnels.")
    pdf.bold_bullet("Achievements/responsibilities:", "")
    for item in [
        "Built a custom components design system with ReactJs to fulfill the product design & functional requirements.",
        "Built utility packages for reusable functionalities across the product services.",
        "Handled DevOps for the company products using different automation tools like github actions, and archived 99.9% uptime for the product services across its life span.",
        "Promoted to Team Lead within a year, and CTO in the year after, driven by my commitment, technical expertise, and leadership skills.",
        "Helped with the technical support, and was the interface for the product community on Facebook & the leadcart knowledge base.",
        "Helped with hiring and growing the leadCart team to 5 more members, setting up assessments, and conducting interviews with them, also helped onboard them.",
        "Built an affiliate system stand-alone, to track our promoter's commissions, and it was created to be used for leadcart users, but we expanded its scope afterward, and in one month we made it true, from an idea to a production product.",
        "Building a service to track activities for our customers, their purchases, and cart events, in addition to lead capturing.",
        "Payment Integrations, Designed and developed a payment integration facade to handle the integration with different third-party payment gateways.",
    ]:
        pdf.sub_bullet(item)
    pdf.tech_line("NodeJs, ReactJs, AWS, Github actions, Netlify, NextJs, Typescript, MongoDB, PostgreSQL.")
    pdf.ln(4)

    # Zaino
    pdf.company_header("Zaino", "Nazareth, Palestine", "05/2016 - 09/2019", "https://zaino.app/")
    pdf.role_text("FullStack Engineer/ Team lead")
    pdf.bullet("About: A platform that intends to enhance the Adword customer user experience with the support of templates and other optimizations.")
    pdf.bold_bullet("Achievements/Tasks:", "")
    for item in [
        "Design & built a mobile-friendly web app for the Zaino clients where they can manage their campaigns, and design and launch banners.",
        "Design and built the API, and Google ads integration services that were required to create, update, and query campaign reports.",
        "Building a console for the admin to control the app preferences, change the fees of the ad, create audience segments, and manage notifications.",
        "Build a customer support dashboard with socket io, to help with better communication with customers.",
    ]:
        pdf.sub_bullet(item)
    pdf.tech_line("NodeJs, ReactJs, AWS, PostgreSQL, Google ads API, Socket.io.")
    pdf.ln(6)

    # Volunteer
    pdf.section_title("Volunteer experience")
    # Manual layout for volunteer header
    pdf.set_font(FONT, "", 9.5)
    pdf.set_text_color(50, 50, 50)
    pdf.set_x(pdf.l_margin + 10)
    pdf.cell(5, 5, "\u2022")
    pdf.cell(pdf.get_string_width("Gaza Sky Geeks/Mercy Corps \u2013 Palestine"), 5, "Gaza Sky Geeks/Mercy Corps \u2013 Palestine")
    pdf.cell(0, 5, "06/2018 - 10/2018", align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.sub_bullet("Mentoring new graduates for the GSG code academy.")
    pdf.sub_bullet("Volunteered to do quality Assurance and code reviews for newly trained developers.")
    pdf.ln(6)

    # Technical Skills - UPDATED with new Security section
    pdf.section_title("Technical skills")

    skills = [
        ("Languages & Frameworks: ", "JavaScript, TypeScript, HTML5, CSS3, NodeJs, React, Next.js, Redux, Remix.js, Express.js, SASS, Socket.io, JWT."),
        ("Tools & Platforms: ", "Visual Studio Code, CodePen, Repl.it, CodeSandbox, Figma, InVision, Adobe XD, AWS, Netlify, DigitalOcean, Firebase, Google Cloud, Vercel"),
        ("Databases & Servers: ", "MongoDB, MySQL, PostgreSQL, CosmosDb, Redis, Kafka; Expertise in scaling cloud-based servers and database management using caching & queue techniques."),
        ("Development & Collaboration: ", "Front-end and back-end development, API design, web optimization, integrating graphic designs, and working closely with cross-functional teams."),
        ("Security: ", "Secure API interactions, frontend security principles, authentication & authorization (JWT, OAuth), input validation & sanitization, CORS policies, Content Security Policy (CSP), and secure data handling."),
        ("Additional Expertise: ", "CI/CD processes, DevOps integration, startup experience, and familiarity with big data solutions like Elasticsearch and Kafka Apache."),
    ]

    for label, content in skills:
        pdf.bold_bullet(label, content)
        pdf.ln(2)

    pdf.ln(4)

    # Education
    pdf.section_title("Education")
    pdf.set_font(FONT, "", 10)
    pdf.set_text_color(50, 50, 50)
    # Education header with right-aligned date
    pdf.cell(pdf.get_string_width("University Of Palestine \u2013 Palestine"), 6, "University Of Palestine \u2013 Palestine")
    pdf.cell(0, 6, "02/2012 - 06/2017", align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.cell(0, 6, "A Bachelor's degree in Software Engineering, GPA (84)", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.ln(6)

    # Languages
    pdf.section_title("Languages")
    pdf.bullet("Arabic (native)")
    pdf.bullet("English (advanced)")

    output_path = "src/assets/files/eslam.dev.cv.pdf"
    pdf.output(output_path)
    print(f"CV generated: {output_path}")


if __name__ == "__main__":
    build_cv()
