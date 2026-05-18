from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Flowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUT = Path(__file__).with_name("imran-p-resume.pdf")


class Rule(Flowable):
    def __init__(self, color, thickness=0.7, space=2):
        super().__init__()
        self.color = color
        self.thickness = thickness
        self.space = space

    def wrap(self, available_width, available_height):
        self.width = available_width
        return available_width, self.space

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, self.space / 2, self.width, self.space / 2)


blue = colors.HexColor("#0B4F81")
link_blue = colors.HexColor("#0B5F9D")
text = colors.HexColor("#102033")
muted = colors.HexColor("#31506A")
light_rule = colors.HexColor("#B8D8EE")

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        fontName="Helvetica-Bold",
        fontSize=28,
        leading=29,
        textColor=blue,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica-Bold",
        fontSize=12.4,
        leading=14.2,
        textColor=link_blue,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        fontName="Helvetica",
        fontSize=9.1,
        leading=11,
        textColor=colors.HexColor("#26364A"),
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        fontName="Helvetica-Bold",
        fontSize=11.5,
        leading=13,
        textColor=blue,
        spaceBefore=8,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=9.7,
        leading=12.1,
        textColor=text,
        alignment=TA_LEFT,
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        parent=styles["Body"],
        fontSize=9.3,
        leading=11.5,
    )
)
styles.add(
    ParagraphStyle(
        name="ItemTitle",
        parent=styles["Body"],
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=12,
        spaceBefore=4,
    )
)
styles.add(
    ParagraphStyle(
        name="LinkLine",
        parent=styles["Small"],
        textColor=muted,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBullet",
        parent=styles["Body"],
        leftIndent=0,
        firstLineIndent=0,
        fontSize=9.3,
        leading=11.6,
    )
)


def p(text_value, style="Body"):
    return Paragraph(text_value, styles[style])


def section(title):
    return [p(title.upper(), "Section"), Rule(light_rule, thickness=0.45, space=2)]


def bullets(items):
    return ListFlowable(
        [
            ListItem(p(item, "ResumeBullet"), leftIndent=8, bulletColor=blue)
            for item in items
        ],
        bulletType="bullet",
        leftIndent=10,
        bulletFontSize=5,
        bulletOffsetY=1,
        spaceBefore=2,
        spaceAfter=2,
    )


def main():
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        rightMargin=10 * mm,
        leftMargin=10 * mm,
        topMargin=10 * mm,
        bottomMargin=10 * mm,
        title="Imran P - Resume",
        author="Imran P",
    )

    story = [
        p("IMRAN P", "Name"),
        p("Aspiring Full Stack Developer | Frontend Development | Career Transition from Radiography", "Role"),
        p(
            'Chennai, India | 8667025827 | '
            '<link href="https://github.com/build-with-imran" color="#0B5F9D">github.com/build-with-imran</link> | '
            '<link href="https://www.linkedin.com/in/imran-immu-19722b40b" color="#0B5F9D">linkedin.com/in/imran-immu-19722b40b</link>',
            "Contact",
        ),
        Rule(blue, thickness=1.5, space=5),
    ]

    story += section("Professional Summary")
    story.append(
        p(
            "Motivated aspiring Full Stack Developer with 4 years of professional experience as a Radiographer, now transitioning into software development. Skilled in building responsive front-end projects using HTML5, CSS3, JavaScript ES6+, React, Vite, Bootstrap, and Tailwind CSS. Completed two front-end projects, including RoadBuddy, a static website, and CareQueue, a React-based healthcare project. Brings strong attention to detail, patient-focused communication, workflow discipline, and problem-solving ability developed through hands-on healthcare experience.",
            "Body",
        )
    )

    story += section("Technical Skills")
    skill_lines = [
        "<b>Frontend:</b> HTML5, CSS3, JavaScript ES6+, React",
        "<b>Frameworks:</b> Bootstrap, Tailwind CSS",
        "<b>Build Tools:</b> Vite",
        "<b>Version Control:</b> Git, GitHub",
        "<b>Productivity:</b> MS Office",
        "<b>Core Skills:</b> Responsive Web Design, UI Development, Component-Based Development",
    ]
    story.append(p(" &nbsp; | &nbsp; ".join(skill_lines), "Small"))

    story += section("Projects")
    story.append(
        KeepTogether(
            [
                p("CareQueue <font color='#31506A'>| React Frontend Project</font>", "ItemTitle"),
                p(
                    'Live Demo: <link href="https://careque-app.vercel.app/" color="#0B5F9D">careque-app.vercel.app</link> | GitHub: <link href="https://github.com/build-with-imran/Corrosive-di-oxide" color="#0B5F9D">github.com/build-with-imran/Corrosive-di-oxide</link>',
                    "LinkLine",
                ),
                bullets(
                    [
                        "Built a React-based healthcare queue management project focused on improving patient flow, queue visibility, and appointment handling.",
                        "Developed reusable React components for a structured, maintainable, and scalable frontend interface.",
                        "Used Vite for faster development, optimized project setup, and smooth local build workflow.",
                        "Created responsive layouts to support desktop and mobile users with clear navigation and readable interface sections.",
                        "Applied healthcare domain understanding to shape practical screens for patient and staff workflow needs.",
                    ]
                ),
            ]
        )
    )
    story.append(
        KeepTogether(
            [
                p("RoadBuddy <font color='#31506A'>| Static Frontend Project</font>", "ItemTitle"),
                p(
                    'GitHub: <link href="https://github.com/build-with-imran" color="#0B5F9D">github.com/build-with-imran</link>',
                    "LinkLine",
                ),
                bullets(
                    [
                        "Developed a static front-end website using HTML5, CSS3, and JavaScript for a road assistance and travel support concept.",
                        "Created a responsive and user-friendly interface with clean page sections, readable content, and practical navigation.",
                        "Implemented mobile-friendly layouts to improve usability across common screen sizes.",
                        "Applied modern CSS styling practices for an organized visual experience and consistent spacing.",
                        "Practiced semantic HTML structure and frontend presentation skills through a complete static project.",
                    ]
                ),
            ]
        )
    )

    story += section("Professional Experience")
    story.append(
        KeepTogether(
            [
                p("Radiographer <font color='#31506A'>| Healthcare Sector | 4 Years</font>", "ItemTitle"),
                bullets(
                    [
                        "Performed radiography duties with accuracy, responsibility, and patient-focused care in clinical environments.",
                        "Worked with diagnostic imaging workflows requiring attention to detail, safety awareness, and time-sensitive decision-making.",
                        "Coordinated with doctors, healthcare staff, and patients to support smooth diagnostic and patient-care processes.",
                        "Maintained professionalism while handling high-pressure situations, patient communication, and daily operational responsibilities.",
                        "Built strong communication, problem-solving, discipline, teamwork, and documentation skills.",
                    ]
                ),
            ]
        )
    )

    story += section("Education")
    story.append(
        p(
            "<b>Full Stack Development</b> | SoftLogic Academy, K.K. Nagar, Chennai | <font color='#31506A'><b>Pursuing | 2026</b></font>",
            "Body",
        )
    )
    story.append(Spacer(1, 2))
    story.append(
        p(
            "<b>Bachelor of Vocational Studies in Radiology</b> | Indira Gandhi Technological University | <font color='#31506A'><b>2021 - 2024</b></font>",
            "Body",
        )
    )

    doc.build(story)


if __name__ == "__main__":
    main()
