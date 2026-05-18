from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Flowable,
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "CareQueue_Technical_Coding_Study_Guide.pdf"
LOGO = ROOT / "src" / "assets" / "logo.png"


class Rule(Flowable):
    def __init__(self, width=6.55 * inch):
        super().__init__()
        self.width = width
        self.height = 1

    def draw(self):
        self.canv.setStrokeColor(colors.HexColor("#dc2626"))
        self.canv.setLineWidth(1)
        self.canv.line(0, 0, self.width, 0)


def styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "title",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=30,
            leading=36,
            textColor=colors.HexColor("#991b1b"),
            alignment=TA_CENTER,
            spaceAfter=12,
        ),
        "subtitle": ParagraphStyle(
            "subtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=12,
            leading=17,
            textColor=colors.HexColor("#334155"),
            alignment=TA_CENTER,
            spaceAfter=10,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=colors.HexColor("#991b1b"),
            spaceBefore=8,
            spaceAfter=6,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12.5,
            leading=16,
            textColor=colors.HexColor("#111827"),
            spaceBefore=8,
            spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.4,
            leading=13,
            textColor=colors.HexColor("#1f2937"),
            spaceAfter=5,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=11,
            textColor=colors.HexColor("#475569"),
            spaceAfter=4,
        ),
        "code": ParagraphStyle(
            "code",
            parent=base["Code"],
            fontName="Courier",
            fontSize=7.4,
            leading=9.4,
            textColor=colors.HexColor("#0f172a"),
            backColor=colors.HexColor("#f8fafc"),
            borderColor=colors.HexColor("#cbd5e1"),
            borderWidth=0.4,
            borderPadding=6,
            spaceBefore=4,
            spaceAfter=7,
        ),
        "label": ParagraphStyle(
            "label",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#991b1b"),
        ),
        "table_head": ParagraphStyle(
            "table_head",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=10,
            textColor=colors.white,
        ),
        "table_cell": ParagraphStyle(
            "table_cell",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=7.7,
            leading=10,
            textColor=colors.HexColor("#1f2937"),
        ),
    }


S = styles()


def p(text, style="body"):
    return Paragraph(text, S[style])


def code(text):
    return Paragraph(escape(text).replace("\n", "<br/>"), S["code"])


def bullets(items):
    return ListFlowable(
        [ListItem(p(item), leftIndent=11) for item in items],
        bulletType="bullet",
        leftIndent=18,
    )


def numbered(items):
    return ListFlowable(
        [ListItem(p(item), leftIndent=14) for item in items],
        bulletType="1",
        leftIndent=20,
    )


def table(rows, widths=None):
    if widths is None:
        widths = [1.65 * inch, 4.9 * inch]
    data = []
    for r, row in enumerate(rows):
        data.append([p(str(cell), "table_head" if r == 0 else "table_cell") for cell in row])
    t = Table(data, colWidths=widths, hAlign="LEFT")
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#991b1b")),
                ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#cbd5e1")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return t


def callout(title, text):
    t = Table([[p(title, "label")], [p(text, "small")]], colWidths=[6.55 * inch])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fff7ed")),
                ("BOX", (0, 0), (-1, -1), 0.65, colors.HexColor("#fdba74")),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return KeepTogether([t, Spacer(1, 7)])


def section(title):
    return [p(title, "h1"), Rule(), Spacer(1, 7)]


def page_no(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.drawString(doc.leftMargin, 0.38 * inch, "CareQueue Technical Coding Study Guide")
    canvas.drawRightString(A4[0] - doc.rightMargin, 0.38 * inch, f"Page {doc.page}")
    canvas.restoreState()


def story():
    out = []
    out.append(Spacer(1, 0.35 * inch))
    if LOGO.exists():
        out.append(Image(str(LOGO), width=1.05 * inch, height=1.05 * inch, hAlign="CENTER"))
        out.append(Spacer(1, 0.15 * inch))
    out.append(p("CareQueue Technical Coding Study Guide", "title"))
    out.append(p("Deep technical notes for frontend developer fresher interviews", "subtitle"))
    out.append(
        callout(
            "Purpose",
            "This PDF explains the coding side of CareQueue: React root setup, routing, protected routes, Context API, localStorage, forms, filtering logic, booking data structure, deployment root directory, and technical interview answers.",
        )
    )
    out.append(
        table(
            [
                ["Topic", "What you should study"],
                ["React root", "How index.html, main.jsx, and createRoot connect the React app to the browser."],
                ["Routes", "How BrowserRouter, Routes, Route, useNavigate, and useSearchParams are used."],
                ["Auth", "How AuthContext, AuthProvider, useAuth, login, logout, and protected rendering work."],
                ["localStorage", "How users, currentUser, and carequeue_bookings are stored and read."],
                ["Forms", "How controlled inputs collect appointment data."],
                ["Data logic", "How arrays, objects, filter, find, map, optional chaining, and helper functions are used."],
                ["Deployment", "How Vite build, dist output, Vercel root directory, and vercel.json rewrites work."],
            ]
        )
    )
    out.append(PageBreak())

    out += section("1. Project File Structure")
    out.append(p("CareQueue is organized as a Vite React project. The main code lives inside src, reusable UI screens are inside components, and mock business data lives inside data.", "body"))
    out.append(
        code(
            """carequeue/
  index.html
  package.json
  vite.config.js
  vercel.json
  src/
    main.jsx
    App.jsx
    index.css
    components/
      AuthPage.jsx
      AuthContext.jsx
      AuthContextValue.js
      useAuth.js
      LandingPage.jsx
      BookAppointments.jsx
      SearchResults.jsx
      BookingForm.jsx
      MyAppointments.jsx
      Navbar.jsx
      Footer.jsx
    data/
      pricing.js
      consultations.js"""
        )
    )
    out.append(
        table(
            [
                ["File", "Technical role"],
                ["index.html", "Contains the div with id root. React injects the app into this element."],
                ["src/main.jsx", "Creates the React root and renders App."],
                ["src/App.jsx", "Defines routes and protected page rendering."],
                ["AuthContext.jsx", "Stores login state and login/logout functions."],
                ["AuthPage.jsx", "Handles signup and login form logic."],
                ["SearchResults.jsx", "Reads query params and filters data."],
                ["BookingForm.jsx", "Handles controlled form state and stores booking records."],
                ["MyAppointments.jsx", "Reads bookings and updates cancelled status."],
                ["pricing.js", "Maps services and centres to prices."],
                ["consultations.js", "Stores consultation, hospital, doctor, and review mock data."],
            ]
        )
    )

    out += section("2. React Root Setup")
    out.append(p("There are three root concepts you should explain clearly: HTML root, React root, and route root.", "body"))
    out.append(p("HTML root in index.html", "h2"))
    out.append(code('<div id="root"></div>'))
    out.append(p("React searches for this element and renders the complete app inside it.", "body"))
    out.append(p("React root in main.jsx", "h2"))
    out.append(
        code(
            """import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)"""
        )
    )
    out.append(
        bullets(
            [
                "createRoot is the React 18+ API for creating a root rendering container.",
                "document.getElementById('root') selects the div from index.html.",
                "StrictMode helps detect possible React issues during development.",
                "App is the top-level component where routing and providers are added.",
            ]
        )
    )
    out.append(p("Route root in App.jsx", "h2"))
    out.append(code('<Route path="/" element={isLoggedIn ? <LandingPage /> : <AuthPage />} />'))
    out.append(p("The / route is the home route of the SPA. In this project it shows LandingPage only after login.", "body"))

    out += section("3. Routing and Protected Routes")
    out.append(p("CareQueue uses BrowserRouter from react-router-dom. BrowserRouter enables clean URLs like /search and /appointments.", "body"))
    out.append(
        code(
            """import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <LandingPage /> : <AuthPage />} />
      <Route path="/search" element={isLoggedIn ? <SearchResults /> : <AuthPage />} />
      <Route path="/booking-form" element={isLoggedIn ? <BookingForm /> : <AuthPage />} />
      <Route path="/appointments" element={isLoggedIn ? <MyAppointments /> : <AuthPage />} />
    </Routes>
  );
};"""
        )
    )
    out.append(p("Technique used: protected rendering", "h2"))
    out.append(
        bullets(
            [
                "The app checks isLoggedIn before rendering each page.",
                "If true, the requested page is shown.",
                "If false, AuthPage is shown instead.",
                "This is a simple frontend route protection pattern.",
                "For production, backend/session validation is needed because frontend-only protection can be bypassed.",
            ]
        )
    )
    out.append(p("Navigation using useNavigate", "h2"))
    out.append(
        code(
            """const navigate = useNavigate();

const handleBook = (service) => {
  navigate(`/search?service=${encodeURIComponent(service)}`);
};"""
        )
    )
    out.append(p("useNavigate is used to move users programmatically after button clicks, login, booking, or service selection.", "body"))

    out += section("4. URL Query Params")
    out.append(p("CareQueue passes selected service, centre, and doctor through URL query parameters. This keeps the page shareable and avoids global state for selected service details.", "body"))
    out.append(p("Creating query params", "h2"))
    out.append(
        code(
            """navigate(
  `/booking-form?center=${encodeURIComponent(center.name)}&service=${encodeURIComponent(service)}`
);"""
        )
    )
    out.append(p("Reading query params", "h2"))
    out.append(
        code(
            """const [searchParams] = useSearchParams();

const centerName = searchParams.get('center') || 'Selected Center';
const serviceName = searchParams.get('service') || 'General Checkup';
const doctorName = searchParams.get('doctor') || null;"""
        )
    )
    out.append(
        callout(
            "Technical point",
            "encodeURIComponent is used because service names can contain spaces, such as blood tests or cardiologist consultation. It safely converts text into a URL-friendly format.",
        )
    )

    out += section("5. Context API and Custom Hook")
    out.append(p("The app uses Context API to avoid passing login state manually through many components.", "body"))
    out.append(p("Creating context", "h2"))
    out.append(
        code(
            """import { createContext } from "react";

export const AuthContext = createContext();"""
        )
    )
    out.append(p("Providing context values", "h2"))
    out.append(
        code(
            """export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};"""
        )
    )
    out.append(p("Custom hook", "h2"))
    out.append(
        code(
            """import { useContext } from "react";
import { AuthContext } from "./AuthContextValue";

export const useAuth = () => useContext(AuthContext);"""
        )
    )
    out.append(
        bullets(
            [
                "AuthContext stores shared authentication data.",
                "AuthProvider wraps the whole app in App.jsx.",
                "useAuth is a custom hook that makes context access cleaner.",
                "Components can call const { isLoggedIn, login, logout } = useAuth().",
            ]
        )
    )

    out += section("6. localStorage Deep Dive")
    out.append(p("localStorage is browser storage. It stores string key-value pairs and persists even after page refresh. CareQueue uses it to simulate backend persistence.", "body"))
    out.append(
        table(
            [
                ["Key", "Value stored"],
                ["users", "Array of signup users, saved as JSON string."],
                ["currentUser", "Logged-in user object, saved as JSON string."],
                ["carequeue_bookings", "Array of appointment objects."],
            ]
        )
    )
    out.append(p("Important localStorage methods", "h2"))
    out.append(
        code(
            """localStorage.setItem("key", "value");     // save
localStorage.getItem("key");              // read
localStorage.removeItem("key");           // delete

JSON.stringify(objectOrArray);            // convert JS data to string
JSON.parse(stringValue);                  // convert string back to JS data"""
        )
    )
    out.append(p("Signup storage pattern", "h2"))
    out.append(
        code(
            """let users = JSON.parse(localStorage.getItem("users")) || [];

const exists = users.find((u) => u.email === user.email);
if (exists) {
  alert("User already exists!");
  return;
}

users.push(user);
localStorage.setItem("users", JSON.stringify(users));"""
        )
    )
    out.append(p("Login pattern", "h2"))
    out.append(
        code(
            """let users = JSON.parse(localStorage.getItem("users")) || [];

const validUser = users.find(
  (u) => u.email === user.email && u.password === user.password
);

if (validUser) {
  login(validUser);
  navigate("/");
}"""
        )
    )
    out.append(p("Booking storage pattern", "h2"))
    out.append(
        code(
            """const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const bookedAt = new Date().toISOString();

const booking = {
  ...formData,
  id: crypto.randomUUID?.() || bookedAt,
  centerName,
  price: priceDetails,
  userEmail: currentUser?.email || "unknown",
  status: "Confirmed",
  bookedAt,
};

const existing = JSON.parse(localStorage.getItem("carequeue_bookings") || "[]");
existing.push(booking);
localStorage.setItem("carequeue_bookings", JSON.stringify(existing));"""
        )
    )
    out.append(
        callout(
            "Interview caution",
            "localStorage is not secure for passwords or medical data. In interviews, say you used it only to simulate persistence for a frontend prototype.",
        )
    )

    out += section("7. React State and Controlled Forms")
    out.append(p("CareQueue forms are controlled forms. The input values are stored in React state and updated through onChange.", "body"))
    out.append(
        code(
            """const [formData, setFormData] = useState({
  name: '',
  age: '',
  mobile: '',
  testPrefer: serviceName,
  appointmentDate: '',
  timing: '',
  bookingFor: 'myself',
  patientName: '',
  patientContact: ''
});"""
        )
    )
    out.append(p("Generic handleChange", "h2"))
    out.append(
        code(
            """const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};"""
        )
    )
    out.append(
        bullets(
            [
                "name comes from the input name attribute.",
                "value comes from the user's typed/selected value.",
                "...prev keeps all existing form fields unchanged.",
                "[name]: value updates only the changed field dynamically.",
                "This avoids writing separate state functions for every input.",
            ]
        )
    )
    out.append(p("Input connected to state", "h2"))
    out.append(
        code(
            """<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
/>"""
        )
    )

    out += section("8. Array and Object Techniques")
    out.append(p("The project uses common JavaScript data techniques that are important for frontend interviews.", "body"))
    out.append(
        table(
            [
                ["Technique", "Where used"],
                ["find", "Find matching user during login and duplicate email during signup."],
                ["filter", "Filter diagnostic centres by selected service and filter bookings by current user email."],
                ["map", "Render cards for centres, doctors, reviews, services, and appointments."],
                ["some", "Check whether a centre provides the selected service."],
                ["optional chaining", "Safely access currentUser?.email or HOSPITAL_INFO[centerName]?.rating."],
                ["spread operator", "Copy formData into booking object and copy previous state during form updates."],
                ["computed property", "[name]: value updates the correct form field dynamically."],
            ]
        )
    )
    out.append(p("Filtering centres", "h2"))
    out.append(
        code(
            """filteredCenters = MOCK_CENTERS.filter(center =>
  center.services.some(
    s => s.toLowerCase() === service.toLowerCase()
  )
);"""
        )
    )
    out.append(p("Rendering list with map", "h2"))
    out.append(
        code(
            """{filteredCenters.map(center => (
  <div key={center.id}>
    <h2>{center.name}</h2>
    <p>{center.location}</p>
  </div>
))}"""
        )
    )
    out.append(p("Filtering user bookings", "h2"))
    out.append(
        code(
            """const getUserBookings = (email) => {
  const allBookings = JSON.parse(
    localStorage.getItem("carequeue_bookings") || "[]"
  );
  return allBookings.filter((booking) => booking.userEmail === email);
};"""
        )
    )

    out += section("9. Conditional Rendering")
    out.append(p("Conditional rendering means showing different UI based on state or data.", "body"))
    out.append(p("Login protection", "h2"))
    out.append(code('element={isLoggedIn ? <LandingPage /> : <AuthPage />}'))
    out.append(p("Consultation vs diagnostic results", "h2"))
    out.append(
        code(
            """const isConsultation =
  CONSULTATION_TYPES.includes(service.toLowerCase());

return (
  <>
    {isConsultation ? (
      <ConsultationResults />
    ) : (
      <DiagnosticCenterResults />
    )}
  </>
);"""
        )
    )
    out.append(p("Booking for myself vs someone else", "h2"))
    out.append(
        code(
            """{formData.bookingFor === 'someone_else' && (
  <div>
    <input name="patientName" />
    <input name="patientContact" />
  </div>
)}"""
        )
    )
    out.append(p("Submitted confirmation", "h2"))
    out.append(
        code(
            """if (submitted) {
  return <BookingConfirmation />;
}"""
        )
    )

    out += section("10. Pricing Helper Logic")
    out.append(p("The pricing file separates business rules from UI components. This makes the code easier to maintain.", "body"))
    out.append(
        code(
            """const getPriceServiceType = (serviceName) => {
  const normalized = serviceName.toLowerCase();
  if (normalized.includes("nuchal")) return "nuchal";
  if (normalized.includes("echo")) return "echocardiogram";
  if (normalized.includes("ecg")) return "ecg";
  if (normalized.includes("ultrasound")) return "ultrasound";
  if (normalized.includes("x-ray")) return "x-ray";
  if (normalized.includes("blood")) return "blood";
  if (normalized.includes("scan")) return "advanced-scan";
  return "general";
};

export const getPriceDetails = (centerName, serviceName) => {
  const type = getPriceServiceType(serviceName);
  return CENTER_PRICES[centerName]?.[type] || DEFAULT_PRICES[type];
};"""
        )
    )
    out.append(
        bullets(
            [
                "The service name is normalized to lowercase.",
                "includes checks whether the service belongs to a known category.",
                "The centre-specific price is checked first.",
                "If centre-specific price is missing, DEFAULT_PRICES is used.",
                "Optional chaining prevents errors when a centre does not exist in CENTER_PRICES.",
            ]
        )
    )

    out += section("11. Appointment Cancellation Logic")
    out.append(p("Cancelling does not delete the booking. It updates status from Confirmed to Cancelled. This is better for history tracking.", "body"))
    out.append(
        code(
            """const handleCancel = (bookingId) => {
  const allBookings = JSON.parse(
    localStorage.getItem("carequeue_bookings") || "[]"
  );

  const updated = allBookings.map((b) =>
    b.id === bookingId ? { ...b, status: "Cancelled" } : b
  );

  localStorage.setItem("carequeue_bookings", JSON.stringify(updated));
  setAppointments(getUserBookings(currentUser?.email));
};"""
        )
    )
    out.append(
        bullets(
            [
                "map creates a new updated bookings array.",
                "The matching booking is copied with spread operator and status changed.",
                "Other bookings are returned unchanged.",
                "The updated array is saved back into localStorage.",
                "React state is updated so the UI refreshes immediately.",
            ]
        )
    )

    out += section("12. Vite, Build, and Deployment")
    out.append(p("The app is built using Vite. Vite converts React source files into optimized static files inside dist.", "body"))
    out.append(p("package.json scripts", "h2"))
    out.append(
        code(
            """"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}"""
        )
    )
    out.append(
        table(
            [
                ["Command", "Meaning"],
                ["npm run dev", "Starts local development server."],
                ["npm run build", "Creates production build in dist."],
                ["npm run lint", "Checks code quality using ESLint."],
                ["npm run preview", "Runs a local preview of the production build."],
            ]
        )
    )
    out.append(p("Vercel root directory", "h2"))
    out.append(
        p(
            "Your GitHub repository contains the app inside a nested folder. That is why the Vercel Root Directory must point to the folder containing package.json.",
            "body",
        )
    )
    out.append(code("React/CareQueue_project/carequeue"))
    out.append(
        callout(
            "How to explain root directory",
            "Vercel runs npm install and npm run build from the selected root directory. If the root directory is wrong, Vercel cannot find package.json and deployment fails.",
        )
    )
    out.append(p("vercel.json SPA rewrite", "h2"))
    out.append(
        code(
            """{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}"""
        )
    )
    out.append(p("This makes direct refreshes on /search, /appointments, and /about work with BrowserRouter.", "body"))

    out += section("13. Technical Interview Answers")
    out.append(
        table(
            [
                ["Question", "Answer"],
                ["What is the root of your React app?", "index.html has a div with id root. main.jsx uses createRoot(document.getElementById('root')) to render App inside it."],
                ["How did you protect routes?", "I used isLoggedIn from AuthContext and conditionally rendered either the actual page or AuthPage for each route."],
                ["How does localStorage work?", "localStorage stores string values in the browser. I use JSON.stringify to save arrays/objects and JSON.parse to read them back."],
                ["Why did you use Context API?", "To share authentication state and login/logout functions globally without prop drilling."],
                ["What is a controlled component?", "A form input whose value is controlled by React state and updated with onChange."],
                ["How do you pass selected service?", "I pass it through URL query params using useNavigate and read it using useSearchParams."],
                ["How does filtering work?", "I use filter and some to match selected services with centre service arrays."],
                ["How are appointments displayed?", "I read all bookings from localStorage and filter by currentUser email."],
                ["Why use Vercel rewrite?", "React Router routes are client-side routes, so Vercel must serve index.html for all paths."],
                ["What is the biggest limitation?", "No backend or database. localStorage is only for demo persistence and is not secure for production."],
            ],
            widths=[2.0 * inch, 4.55 * inch],
        )
    )

    out += section("14. Code Concepts Checklist")
    out.append(
        bullets(
            [
                "React components and JSX",
                "Vite project setup and build pipeline",
                "ReactDOM createRoot rendering",
                "BrowserRouter, Routes, Route",
                "useNavigate for programmatic navigation",
                "useSearchParams for URL query params",
                "useState for form and UI state",
                "useEffect for checking saved login state",
                "Context API for global auth state",
                "Custom hook useAuth",
                "localStorage setItem, getItem, removeItem",
                "JSON.stringify and JSON.parse",
                "Array methods: find, filter, map, some",
                "Object spread and computed property names",
                "Conditional rendering with ternary and &&",
                "Controlled forms with value and onChange",
                "Vercel root directory and SPA rewrite config",
            ]
        )
    )
    out.append(
        callout(
            "Final technical summary",
            "CareQueue is a Vite React SPA. The app root is mounted through main.jsx, pages are handled by React Router, login state is shared through Context API, form data is managed with useState, mock persistence is handled through localStorage, service results are generated using array filtering, and deployment is handled through Vercel using the correct root directory and SPA rewrite.",
        )
    )
    return out


def main():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.7 * inch,
        bottomMargin=0.65 * inch,
        title="CareQueue Technical Coding Study Guide",
        author="CareQueue",
    )
    doc.build(story(), onFirstPage=page_no, onLaterPages=page_no)
    print(OUTPUT)


if __name__ == "__main__":
    main()
