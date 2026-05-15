import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { getPriceDetails } from '../data/pricing';
import { CONSULTATION_TYPES, HOSPITAL_DOCTORS, getConsultationReviews, HOSPITAL_INFO } from '../data/consultations';

const CENTER_FEEDBACK = {
  "Priya Diagnostic Centre": {
    rating: 4.8,
    totalReviews: 324,
    reviews: [
      { name: "Ritika S.", test: "Ultrasound", text: "The scan room was clean and the doctor explained each step calmly before the procedure." },
      { name: "Arun K.", test: "Blood Tests", text: "Staff coordination was smooth and the report arrived earlier than expected." },
      { name: "Meena P.", test: "Nuchal Translucency Scan", text: "The fetal medicine specialist was patient and gave clear guidance after the scan." }
    ]
  },
  "Aarthi Scans": {
    rating: 4.6,
    totalReviews: 512,
    reviews: [
      { name: "Karthik R.", test: "MRI Scan", text: "The appointment started on time and the front desk kept us updated about the report." },
      { name: "Divya M.", test: "Ultrasound", text: "Good imaging facility with clear instructions from the technician and radiologist." },
      { name: "Sanjay N.", test: "X-Ray", text: "Quick process, clean waiting area, and report collection was easy." }
    ]
  },
  "CareWell Labs": {
    rating: 4.5,
    totalReviews: 215,
    reviews: [
      { name: "Priyanka V.", test: "Blood Tests", text: "Sample collection was gentle and the report was uploaded the same evening." },
      { name: "Harish B.", test: "X-Ray", text: "Fast service and the staff helped my father through the process." },
      { name: "Nisha G.", test: "Health Checkup", text: "The package was well organized with no long waiting time." }
    ]
  },
  "City Health Diagnostics": {
    rating: 4.7,
    totalReviews: 418,
    reviews: [
      { name: "Vikram S.", test: "Ultrasound", text: "The radiologist reviewed the images carefully and answered our questions." },
      { name: "Janani R.", test: "CT Scan", text: "The centre was punctual and the report summary was easy to understand." },
      { name: "Mohan T.", test: "X-Ray", text: "Booking was simple and the result was ready within a short time." }
    ]
  },
  "Apollo Diagnostics": {
    rating: 4.9,
    totalReviews: 780,
    reviews: [
      { name: "Farah A.", test: "Nuchal Translucency Scan", text: "The doctor had strong fetal medicine experience and handled the scan professionally." },
      { name: "Ramesh P.", test: "Blood Tests", text: "Very organized centre with timely updates and polite staff." },
      { name: "Lakshmi D.", test: "Ultrasound", text: "The scan was comfortable, and the doctor explained the next steps clearly." }
    ]
  },
  "MedScan Imaging Centre": {
    rating: 4.4,
    totalReviews: 198,
    reviews: [
      { name: "Sowmya K.", test: "Ultrasound", text: "The equipment looked modern and the appointment moved without delay." },
      { name: "Joel M.", test: "MRI Scan", text: "Good communication from the staff about preparation and report timing." },
      { name: "Neha C.", test: "X-Ray", text: "Simple, quick visit with helpful technicians." }
    ]
  },
  "LifeCare Diagnostics": {
    rating: 4.3,
    totalReviews: 156,
    reviews: [
      { name: "Abinaya S.", test: "Blood Tests", text: "Affordable package and the digital report link worked well." },
      { name: "Gokul V.", test: "X-Ray", text: "The centre was easy to find and the report was ready quickly." },
      { name: "Maya R.", test: "Health Checkup", text: "Staff explained the steps clearly and managed the crowd well." }
    ]
  },
  "SRL Diagnostics": {
    rating: 4.6,
    totalReviews: 342,
    reviews: [
      { name: "Ishaan T.", test: "Ultrasound", text: "The scan was handled professionally and the report came on time." },
      { name: "Revathi N.", test: "Blood Tests", text: "Clean lab, smooth billing, and helpful sample collection staff." },
      { name: "Asha P.", test: "Nuchal Translucency Scan", text: "The doctor explained the screening purpose and report clearly." }
    ]
  }
};

const DEFAULT_FEEDBACK = {
  rating: 4.5,
  totalReviews: 120,
  reviews: [
    { name: "Verified User", test: "Diagnostic Test", text: "The centre was clean, staff were helpful, and the process was smooth." },
    { name: "CareQueue User", test: "Health Service", text: "Report timing was communicated clearly before booking." },
    { name: "Recent Visitor", test: "Appointment", text: "Good service experience with clear instructions from the team." }
  ]
};

const DOCTOR_PROFILES = {
  "Priya Diagnostic Centre": {
    ultrasound: {
      name: "Dr. Ananya Rao",
      role: "Consultant Radiologist",
      education: "MBBS, MD Radiodiagnosis",
      experience: "12 years",
      focus: "Abdominal, pelvic, thyroid, breast, and soft-tissue ultrasound scans"
    },
    nuchal: {
      name: "Dr. Meera Subramanian",
      role: "Fetal Medicine Specialist",
      education: "MBBS, DGO, Fellowship in Fetal Medicine",
      experience: "14 years",
      focus: "First-trimester screening and nuchal translucency assessment"
    },
    echocardiogram: {
      name: "Dr. Arvind Narayanan",
      role: "Consultant Cardiologist",
      education: "MBBS, MD General Medicine, DM Cardiology",
      experience: "13 years",
      focus: "2D echo, valve assessment, heart function evaluation, and cardiac risk review"
    }
  },
  "Aarthi Scans": {
    ultrasound: {
      name: "Dr. Naveen Prakash",
      role: "Senior Radiologist",
      education: "MBBS, DMRD, DNB Radiology",
      experience: "10 years",
      focus: "General ultrasound, Doppler studies, and image-guided reporting"
    },
    nuchal: {
      name: "Dr. Shalini Menon",
      role: "Fetal Imaging Consultant",
      education: "MBBS, MS Obstetrics, Fetal Medicine Training",
      experience: "11 years",
      focus: "Early pregnancy screening and fetal growth evaluation"
    },
    echocardiogram: {
      name: "Dr. Pradeep Kumar",
      role: "Senior Cardiologist",
      education: "MBBS, MD Internal Medicine, DM Cardiology",
      experience: "15 years",
      focus: "Adult echocardiography, chamber measurements, ejection fraction, and valve studies"
    }
  },
  "City Health Diagnostics": {
    ultrasound: {
      name: "Dr. K. Sriram",
      role: "Consultant Radiologist",
      education: "MBBS, MD Radiodiagnosis",
      experience: "9 years",
      focus: "Abdominal, pelvic, vascular, and musculoskeletal ultrasound"
    },
    nuchal: {
      name: "Dr. Pavithra Krishnan",
      role: "Fetal Medicine Consultant",
      education: "MBBS, DNB Obstetrics, Fellowship in Fetal Medicine",
      experience: "12 years",
      focus: "Nuchal translucency scans and first-trimester risk screening"
    },
    echocardiogram: {
      name: "Dr. Sahana Iyer",
      role: "Interventional Cardiologist",
      education: "MBBS, MD, DM Cardiology",
      experience: "11 years",
      focus: "2D echo reporting, structural heart screening, and hypertension-related heart evaluation"
    }
  },
  "Apollo Diagnostics": {
    ultrasound: {
      name: "Dr. Harini Balaji",
      role: "Lead Radiologist",
      education: "MBBS, MD Radiology",
      experience: "15 years",
      focus: "Advanced ultrasound imaging and diagnostic reporting"
    },
    nuchal: {
      name: "Dr. Aditi Narayanan",
      role: "Senior Fetal Medicine Specialist",
      education: "MBBS, MD Obstetrics, FMF Certified NT Scan Training",
      experience: "16 years",
      focus: "Nuchal translucency, nasal bone assessment, and early anomaly screening"
    },
    echocardiogram: {
      name: "Dr. R. Mahesh",
      role: "Lead Cardiologist",
      education: "MBBS, MD General Medicine, DM Cardiology, FACC",
      experience: "18 years",
      focus: "Comprehensive echocardiography, valve disease, cardiomyopathy, and heart failure assessment"
    }
  },
  "MedScan Imaging Centre": {
    ultrasound: {
      name: "Dr. Raghav Iyer",
      role: "Radiology Consultant",
      education: "MBBS, DMRD",
      experience: "8 years",
      focus: "General ultrasound, Doppler, and routine scan reporting"
    },
    nuchal: {
      name: "Dr. Nandhini Bose",
      role: "Prenatal Imaging Specialist",
      education: "MBBS, DGO, Fetal Imaging Certification",
      experience: "10 years",
      focus: "Prenatal screening and nuchal translucency measurements"
    }
  },
  "SRL Diagnostics": {
    ultrasound: {
      name: "Dr. Renu Mathew",
      role: "Consultant Radiologist",
      education: "MBBS, DNB Radiodiagnosis",
      experience: "11 years",
      focus: "Abdominal, pelvic, small-parts, and pregnancy ultrasound scans"
    },
    nuchal: {
      name: "Dr. Swetha Rajan",
      role: "Fetal Medicine Consultant",
      education: "MBBS, MS Obstetrics, Fellowship in Fetal Medicine",
      experience: "13 years",
      focus: "First-trimester NT scans and prenatal risk counselling"
    },
    echocardiogram: {
      name: "Dr. Nikhil Varma",
      role: "Consultant Cardiologist",
      education: "MBBS, MD Medicine, DM Cardiology",
      experience: "12 years",
      focus: "Resting echocardiogram, valve function, left ventricular function, and preventive cardiac review"
    }
  }
};

const DEFAULT_DOCTORS = {
  ultrasound: {
    name: "Dr. Kavya Raman",
    role: "Consultant Radiologist",
    education: "MBBS, MD Radiodiagnosis",
    experience: "10 years",
    focus: "General ultrasound imaging and diagnostic reporting"
  },
  nuchal: {
    name: "Dr. Leela Narayan",
    role: "Fetal Medicine Specialist",
    education: "MBBS, DGO, Fellowship in Fetal Medicine",
    experience: "12 years",
    focus: "Nuchal translucency scans and first-trimester screening"
  },
  echocardiogram: {
    name: "Dr. Rohit Menon",
    role: "Consultant Cardiologist",
    education: "MBBS, MD General Medicine, DM Cardiology",
    experience: "10 years",
    focus: "2D echocardiogram reporting, valve assessment, and cardiac function review"
  }
};

const getServiceType = (serviceName) => {
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

const getReportTiming = (serviceName) => {
  const type = getServiceType(serviceName);

  const timings = {
    ultrasound: "Same day report, usually within 2-4 hours after the scan.",
    nuchal: "Preliminary findings on the same visit; detailed report within 4-6 hours.",
    echocardiogram: "Cardiologist-reviewed echo report is expected within 4-6 hours.",
    ecg: "ECG tracing and summary are usually available within 30-60 minutes.",
    "x-ray": "Digital X-ray report expected within 1-2 hours.",
    blood: "Most blood test reports are expected the same evening or next morning.",
    "advanced-scan": "CT/MRI scan reports are expected within 12-24 hours depending on protocol.",
    general: "Expected report timing will be confirmed by the centre before the appointment."
  };

  return timings[type];
};

const getDoctorProfile = (centerName, serviceName) => {
  const type = getServiceType(serviceName);
  if (type !== "ultrasound" && type !== "nuchal" && type !== "echocardiogram") return null;

  return DOCTOR_PROFILES[centerName]?.[type] || DEFAULT_DOCTORS[type];
};

const getDoctorCardLabels = (type) => {
  if (type === "echocardiogram") {
    return {
      eyebrow: "Cardiologist reviewing the echocardiogram",
      expertise: "Cardiology focus"
    };
  }

  if (type === "nuchal") {
    return {
      eyebrow: "Specialist performing the scan",
      expertise: "Scan expertise"
    };
  }

  return {
    eyebrow: "Doctor performing the scan",
    expertise: "Scan expertise"
  };
};

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const centerName = searchParams.get('center') || 'Selected Center';
  const serviceName = searchParams.get('service') || 'General Checkup';
  const doctorName = searchParams.get('doctor') || null;

  // Check if this is a consultation booking
  const isConsultation = CONSULTATION_TYPES.includes(serviceName.toLowerCase());
  
  // Get doctor profile for consultations
  let doctorProfile = null;
  if (isConsultation && doctorName && HOSPITAL_DOCTORS[centerName]) {
    const doctors = HOSPITAL_DOCTORS[centerName][serviceName.toLowerCase()] || [];
    doctorProfile = doctors.find(doc => doc.name === doctorName);
  }

  // Get consultation fee if it's a consultation
  const priceDetails = isConsultation && doctorProfile ? doctorProfile.consultingFee : getPriceDetails(centerName, serviceName);
  
  // Get reviews - consultation reviews for consultations, diagnostic center reviews otherwise
  let centerFeedback;
  if (isConsultation) {
    const consultationReviews = getConsultationReviews(serviceName.toLowerCase(), centerName);
    centerFeedback = consultationReviews || DEFAULT_FEEDBACK;
  } else {
    centerFeedback = CENTER_FEEDBACK[centerName] || DEFAULT_FEEDBACK;
  }
  
  const serviceType = getServiceType(serviceName);
  const nonConsultationDoctorProfile = !isConsultation ? getDoctorProfile(centerName, serviceName) : null;
  const doctorCardLabels = getDoctorCardLabels(serviceType);
  const reportTiming = !isConsultation ? getReportTiming(serviceName) : "Consultation duration: 30-45 minutes. Prescription and advice will be provided immediately after consultation.";

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    testPrefer: serviceName,
    appointmentDate: '',
    timing: '',
    bookingFor: 'myself',
    patientName: '',
    patientContact: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build the booking record
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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

    // Persist to localStorage
    const existing = JSON.parse(localStorage.getItem("carequeue_bookings") || "[]");
    existing.push(booking);
    localStorage.setItem("carequeue_bookings", JSON.stringify(existing));

    console.log("Booking submitted:", booking);
    setSubmitted(true);
    
    setTimeout(() => {
      navigate('/appointments');
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Booking Confirmed!</h2>
            <p className="text-slate-600 mb-6">
              Your appointment for <span className="font-semibold text-slate-800 capitalize">
                {isConsultation ? serviceName.replace(' consultation', '') + ' consultation' : formData.testPrefer}
              </span> at <span className="font-semibold text-slate-800">{centerName}</span> 
              {isConsultation && doctorProfile ? ` with ${doctorProfile.name}` : ''} has been received. We will contact you shortly.
            </p>
            <div className="animate-pulse text-sm text-slate-400">Redirecting to home...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="flex-grow max-w-5xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <div className="mb-6">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
              {isConsultation ? 'Book a consultation' : 'Review before booking'}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 capitalize">
              {isConsultation 
                ? `${serviceName.replace(' consultation', '')} Consultation` 
                : `${serviceName} at ${centerName}`}
            </h1>
            <p className="text-slate-600 mt-3 max-w-3xl">
              {isConsultation 
                ? `Consult with a specialist at ${centerName}. Review doctor details and book your appointment.`
                : 'Please review the centre details, user feedback, and expected report timing before filling the appointment form.'}
            </p>
          </div>

          {/* Hospital/Center Image Section */}
          {isConsultation && HOSPITAL_INFO[centerName] && (
            <div className="mb-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="h-64 bg-slate-200 relative">
                <img src={HOSPITAL_INFO[centerName].image} alt={centerName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-end">
                  <div className="w-full p-6 bg-gradient-to-t from-black/40 to-transparent">
                    <h2 className="text-white text-2xl font-bold mb-1">{centerName}</h2>
                    <div className="flex gap-4 text-white text-sm">
                      <span className="flex items-center gap-1">★ {HOSPITAL_INFO[centerName].rating}</span>
                      <span className="flex items-center gap-1">({HOSPITAL_INFO[centerName].totalReviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-red-600 text-2xl">📍</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Location</p>
                    <p className="text-slate-800 font-semibold">{HOSPITAL_INFO[centerName].location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-red-600 text-2xl">📞</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Contact</p>
                    <p className="text-slate-800 font-semibold">{HOSPITAL_INFO[centerName].phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-red-600 text-2xl">⭐</div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Rating</p>
                    <p className="text-slate-800 font-semibold">{HOSPITAL_INFO[centerName].rating}/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {(doctorProfile || nonConsultationDoctorProfile) && (
              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-1">
                      {isConsultation ? 'Consulting Doctor' : doctorCardLabels.eyebrow}
                    </p>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {isConsultation ? doctorProfile?.name : nonConsultationDoctorProfile?.name}
                    </h2>
                    <p className="text-slate-500 font-medium">
                      {isConsultation ? doctorProfile?.specialty : nonConsultationDoctorProfile?.role}
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-700 border border-red-100 px-4 py-2 rounded-xl text-sm font-semibold">
                    {isConsultation ? doctorProfile?.experience : nonConsultationDoctorProfile?.experience} experience
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs font-semibold uppercase text-slate-500 mb-1">
                      {isConsultation ? 'Qualifications' : 'Education'}
                    </p>
                    <p className="text-slate-800 font-semibold">
                      {isConsultation ? doctorProfile?.qualifications : nonConsultationDoctorProfile?.education}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs font-semibold uppercase text-slate-500 mb-1">
                      {isConsultation ? 'Specialization' : doctorCardLabels.expertise}
                    </p>
                    <p className="text-slate-800 font-semibold">
                      {isConsultation ? doctorProfile?.specialty : nonConsultationDoctorProfile?.focus}
                    </p>
                  </div>
                </div>

                {isConsultation && doctorProfile && (
                  <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <p className="text-xs font-semibold uppercase text-amber-700 mb-1">Available Days</p>
                    <p className="text-slate-800 font-semibold text-sm">
                      {doctorProfile.availableDays.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 ${(doctorProfile || nonConsultationDoctorProfile) ? '' : 'lg:col-span-1'}`}>
              <p className="text-sm font-semibold text-red-600 mb-1">Centre rating</p>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-extrabold text-slate-900">{centerFeedback.rating}</span>
                <span className="text-slate-500 font-medium mb-1">/ 5</span>
              </div>
              <p className="text-slate-600">{centerFeedback.totalReviews} verified user reviews</p>
            </div>

            <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 ${(doctorProfile || nonConsultationDoctorProfile) ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              <p className="text-sm font-semibold text-red-600 mb-1">Expected report timing</p>
              <p className="text-xl font-bold text-slate-900">{reportTiming}</p>
              <p className="text-slate-500 mt-2 text-sm">
                Final timing may vary slightly based on sample quality, scan complexity, or centre workload.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:col-span-3">
              <p className="text-sm font-semibold text-red-600 mb-1">Price</p>
              <p className="text-2xl font-bold text-slate-900">{priceDetails}</p>
              <p className="text-slate-500 mt-2 text-sm">
                This amount will be shown with your booking details.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
              <div>
                <p className="text-sm font-semibold text-red-600 mb-1">User reviews</p>
                <h2 className="text-2xl font-bold text-slate-900">Recent patient feedback</h2>
              </div>
              <p className="text-sm text-slate-500">Showing verified CareQueue reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {centerFeedback.reviews.map((review, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <p className="font-bold text-slate-800">{review.name}</p>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">5.0</span>
                  </div>
                  <p className="text-xs font-semibold text-red-600 uppercase mb-2">{review.test}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-red-600 p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">
              {isConsultation ? 'Book Your Consultation' : 'Book Appointment'}
            </h1>
            <p className="text-red-100">
              You are booking a <span className="font-semibold capitalize">
                {isConsultation ? serviceName.replace(' consultation', '') + ' consultation' : serviceName}
              </span> at <span className="font-semibold">{centerName}</span>
              {isConsultation && doctorProfile ? ` with ${doctorProfile.name}` : ''}.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">Who is this test for?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`flex items-center gap-3 cursor-pointer rounded-xl border p-4 transition-all ${formData.bookingFor === 'myself' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'}`}>
                  <input
                    type="radio"
                    name="bookingFor"
                    value="myself"
                    checked={formData.bookingFor === 'myself'}
                    onChange={handleChange}
                    className="w-5 h-5 text-red-600 focus:ring-red-500"
                  />
                  <span className="font-semibold">Myself</span>
                </label>
                <label className={`flex items-center gap-3 cursor-pointer rounded-xl border p-4 transition-all ${formData.bookingFor === 'someone_else' ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'}`}>
                  <input
                    type="radio"
                    name="bookingFor"
                    value="someone_else"
                    checked={formData.bookingFor === 'someone_else'}
                    onChange={handleChange}
                    className="w-5 h-5 text-red-600 focus:ring-red-500"
                  />
                  <span className="font-semibold">Someone Else</span>
                </label>
              </div>
            </div>

            {formData.bookingFor === 'someone_else' && (
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-md font-semibold text-red-800 mb-4">Patient Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Patient's Name</label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-red-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                      placeholder="Enter patient's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Patient's Contact Number</label>
                    <input
                      type="tel"
                      name="patientContact"
                      value={formData.patientContact}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-red-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-white"
                      placeholder="Enter patient's mobile"
                    />
                  </div>
                </div>
              </div>
            )}

            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Your Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                <input 
                  type="number" 
                  name="age" 
                  value={formData.age} 
                  onChange={handleChange} 
                  required 
                  min="0"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-2">Appointment Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Test</label>
                <input 
                  type="text" 
                  name="testPrefer" 
                  value={formData.testPrefer} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white capitalize"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Appointment Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Timing</label>
                <select 
                  name="timing" 
                  value={formData.timing} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-slate-50 focus:bg-white"
                >
                  <option value="" disabled>Select a time</option>
                  <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                  <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                  <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md text-lg mt-4">
              Confirm Appointment Booking
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingForm;
