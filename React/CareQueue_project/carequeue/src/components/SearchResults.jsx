// components/SearchResults.jsx
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { getPriceDetails } from '../data/pricing';
import { CONSULTATION_TYPES, HOSPITAL_DOCTORS, HOSPITAL_INFO } from '../data/consultations';

const MOCK_CENTERS = [
  {
    id: 1,
    name: "Priya Diagnostic Centre",
    location: "Adyar",
    phone: "+91-9876543211",
    rating: 4.8,
    reviews: 324,
    services: ["blood tests", "ultrasound", "nuchal translucency scan", "scans", "x-ray", "ecg", "echocardiogram"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Aarthi Scans",
    location: "Royapettah",
    phone: "+91-9876543212",
    rating: 4.6,
    reviews: 512,
    services: ["ultrasound", "nuchal translucency scan", "scans", "x-ray", "ecg", "echocardiogram"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "CareWell Labs",
    location: "T Nagar",
    phone: "+91-9876543213",
    rating: 4.5,
    reviews: 215,
    services: ["blood tests", "x-ray", "ecg"],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "City Health Diagnostics",
    location: "Velachery",
    phone: "+91-9876543214",
    rating: 4.7,
    reviews: 418,
    services: ["blood tests", "x-ray", "scans", "ultrasound", "nuchal translucency scan", "ecg", "echocardiogram"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Apollo Diagnostics",
    location: "Anna Nagar",
    phone: "+91-9876543215",
    rating: 4.9,
    reviews: 780,
    services: ["blood tests", "ultrasound", "nuchal translucency scan", "scans", "x-ray", "ecg", "echocardiogram"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "MedScan Imaging Centre",
    location: "Tambaram",
    phone: "+91-9876543216",
    rating: 4.4,
    reviews: 198,
    services: ["scans", "x-ray", "ultrasound", "nuchal translucency scan", "ecg"],
    image: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "LifeCare Diagnostics",
    location: "Porur",
    phone: "+91-9876543217",
    rating: 4.3,
    reviews: 156,
    services: ["blood tests", "x-ray", "ecg"],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "SRL Diagnostics",
    location: "Mylapore",
    phone: "+91-9876543218",
    rating: 4.6,
    reviews: 342,
    services: ["blood tests", "ultrasound", "nuchal translucency scan", "scans", "x-ray", "ecg", "echocardiogram"],
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop"
  }
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const service = searchParams.get('service') || '';

  // Check if the search is for a consultation
  const isConsultation = CONSULTATION_TYPES.includes(service.toLowerCase());

  let filteredCenters = [];
  let hospitalsWithDoctors = [];

  if (isConsultation) {
    // For consultations, get all hospitals that offer this consultation
    Object.keys(HOSPITAL_DOCTORS).forEach(hospital => {
      if (HOSPITAL_DOCTORS[hospital][service.toLowerCase()]) {
        hospitalsWithDoctors.push({
          name: hospital,
          doctors: HOSPITAL_DOCTORS[hospital][service.toLowerCase()]
        });
      }
    });
  } else {
    // For services, filter diagnostic centers
    filteredCenters = MOCK_CENTERS.filter(center => 
      center.services.some(s => s.toLowerCase() === service.toLowerCase())
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="flex-grow max-w-5xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 capitalize">
            {service ? `${service}` : 'All Services'} in your area
          </h1>
          <p className="text-slate-600 text-lg">
            {isConsultation 
              ? `Found ${hospitalsWithDoctors.length} hospitals with available ${service}` 
              : `Found ${filteredCenters.length} centres matching your requirements.`}
          </p>
        </div>

        {isConsultation ? (
          // Consultations View
          hospitalsWithDoctors.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {hospitalsWithDoctors.map((hospital, idx) => {
                const hospitalInfo = HOSPITAL_INFO[hospital.name];
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                    {/* Hospital Image */}
                    <div className="md:w-1/3 h-48 md:h-auto bg-slate-200 flex-shrink-0">
                      {hospitalInfo && (
                        <img src={hospitalInfo.image} alt={hospital.name} className="w-full h-full object-cover" />
                      )}
                    </div>

                    <div className="flex-1 flex flex-col">
                      {/* Hospital Header */}
                      <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 border-b border-slate-200">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-1">{hospital.name}</h2>
                            <p className="text-slate-600 text-sm">
                              {hospitalInfo?.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-amber-600">★ {hospitalInfo?.rating || 4.5}</p>
                            <p className="text-xs text-slate-500">({hospitalInfo?.totalReviews || 0} reviews)</p>
                          </div>
                        </div>
                        <p className="text-slate-600 flex items-center gap-2 text-sm">
                          <span>🏥</span> {hospital.doctors.length} specialist(s) available
                        </p>
                      </div>

                      {/* Doctors Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        {hospital.doctors.map((doctor, dIdx) => (
                          <div key={dIdx} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                                <p className="text-sm text-red-600 font-semibold">{doctor.specialty}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs font-semibold text-amber-600 flex items-center gap-1 justify-end">
                                  ★ {doctor.rating}
                                </p>
                                <p className="text-xs text-slate-500">({doctor.reviews} reviews)</p>
                              </div>
                            </div>
                            
                            <div className="space-y-2 mb-4 text-sm">
                              <p className="text-slate-600">
                                <span className="font-semibold text-slate-900">Experience:</span> {doctor.experience}
                              </p>
                              <p className="text-slate-600">
                                <span className="font-semibold text-slate-900">Qualifications:</span> {doctor.qualifications}
                              </p>
                              <p className="text-slate-600">
                                <span className="font-semibold text-slate-900">Fee:</span> <span className="text-red-600 font-bold">{doctor.consultingFee}</span>
                              </p>
                              <p className="text-slate-500 text-xs">
                                Available: {doctor.availableDays.join(', ')}
                              </p>
                            </div>
                            
                            <button 
                              onClick={() => navigate(`/booking-form?center=${encodeURIComponent(hospital.name)}&service=${encodeURIComponent(service)}&doctor=${doctor.name}`)}
                              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors text-sm shadow-sm"
                            >
                              Book Consultation
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
              <div className="text-slate-400 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No doctors found</h3>
              <p className="text-slate-500">We couldn't find any doctors offering "{service}" in your area right now.</p>
            </div>
          )
        ) : (
          // Diagnostic Services View
          filteredCenters.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredCenters.map(center => (
                <div key={center.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center text-amber-600 shadow-sm">
                      ★ {center.rating} ({center.reviews})
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-2">{center.name}</h2>
                      <p className="text-slate-500 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {center.location}
                      </p>
                      <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                        <p className="text-xs font-semibold uppercase text-red-600 mb-1">Price</p>
                        <p className="text-lg font-bold text-slate-900">{getPriceDetails(center.name, service)}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {center.services.map((s, i) => (
                          <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${s.toLowerCase() === service.toLowerCase() ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-slate-100 text-slate-600'}`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto border-t border-slate-100 pt-4">
                      <p className="font-semibold text-slate-700 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {center.phone}
                      </p>
                      <button onClick={() => navigate(`/booking-form?center=${encodeURIComponent(center.name)}&service=${encodeURIComponent(service)}`)} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm shadow-red-200">
                        View Details & Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
              <div className="text-slate-400 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No centres found</h3>
              <p className="text-slate-500">We couldn't find any centres providing "{service}" in your area right now.</p>
            </div>
          )
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
