import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleBook = (service) => {
    navigate(`/search?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-16 md:py-28 text-center">
          <div className="inline-block px-3 py-1.5 rounded-full bg-red-500/20 text-red-300 font-semibold text-xs sm:text-sm mb-5 border border-red-500/30">
            Welcome to CareQueue
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
            Modern Healthcare <br />
            <span className="text-red-400">Simplified for You</span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-7">
            CareQueue connects you with trusted NABL-accredited labs and AERB-certified imaging centres across India. 
            Book blood tests, scans, and X-rays — all in a few clicks, with zero waiting time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/book-appointments")}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg shadow-red-900/30 hover:shadow-xl hover:shadow-red-900/40 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Browse All Services
            </button>
            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all border border-white/20 hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-10 md:py-16">

        {/* Quick Stats */}
        <section className="mb-12 md:mb-20">
          <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm p-5 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">50+</p>
                <p className="text-slate-500 font-medium text-sm md:text-base">Partner Centres</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">10K+</p>
                <p className="text-slate-500 font-medium text-sm md:text-base">Tests Booked</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">4.8★</p>
                <p className="text-slate-500 font-medium text-sm md:text-base">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">15+</p>
                <p className="text-slate-500 font-medium text-sm md:text-base">Cities Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Cards Section */}
        <section className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 text-center mb-4">
            Book <span className="text-red-600">Diagnostics</span> Near You
          </h2>
          <p className="text-slate-500 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg">
            Choose a service below and we'll find the best diagnostic centres near you with available slots.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

            {/* Blood Tests Card */}
            <div
              onClick={() => handleBook("blood tests")}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
                  alt="Blood Tests"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Popular</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book Blood Tests</h3>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Complete blood count, diabetes profiling, thyroid panels, lipid profiles, and full-body health checkup packages.
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Find Centres</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Scans Card */}
            <div
              onClick={() => handleBook("scans")}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                  alt="Scans"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Advanced</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book Any Scans</h3>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Ultrasound, CT scans, MRI imaging, nuchal translucency, and other advanced diagnostic scans at certified centres.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Find Centres</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ECG Card */}
            <div
              onClick={() => handleBook("ecg")}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
                  alt="ECG Test"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Heart Rhythm</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2-5 4 10 2-5h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book ECG Test</h3>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Fast electrocardiogram testing to check heart rhythm, rate, and electrical activity at nearby centres.
                </p>
                <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Find Centres</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Echocardiogram Card */}
            <div
              onClick={() => handleBook("echocardiogram")}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                  alt="Echocardiogram Test"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Cardiologist</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book Echocardiogram</h3>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Heart ultrasound testing with cardiologist profile details before you confirm the appointment.
                </p>
                <div className="flex items-center text-rose-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Find Centres</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* X-Rays Card */}
            <div
              onClick={() => handleBook("x-ray")}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop"
                  alt="X-Rays"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Quick Reports</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book X-Rays Near You</h3>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Digital X-ray services for bones, chest, and dental diagnostics with instant reporting at centres near you.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Find Centres</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-4">
            How It <span className="text-red-600">Works</span>
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto text-lg">
            Booking a diagnostic test is as easy as 1-2-3. No more phone calls or long queues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Choose a Service</h3>
              <p className="text-slate-500 leading-relaxed">
                Select from blood tests, scans, or X-rays based on your medical needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Pick a Centre</h3>
              <p className="text-slate-500 leading-relaxed">
                Browse accredited diagnostic centres near you with ratings, reviews, and availability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-5">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Confirm & Visit</h3>
              <p className="text-slate-500 leading-relaxed">
                Fill your details, pick a slot, and walk in — no waiting, no hassle.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">
              Why Choose <span className="text-red-600">CareQueue?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">NABL Accredited</h4>
                <p className="text-slate-500 text-sm leading-relaxed">All partner labs are certified and follow strict quality protocols.</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Zero Wait Time</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Pre-booked slots mean you walk in, get tested, and walk out.</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">24/7 Support</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Our team is always available to help you with queries.</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Best Prices</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Transparent pricing with no hidden charges across all centres.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl shadow-red-200/50">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Book Your Test?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Skip the queues. Browse our services and book an appointment at a diagnostic centre near you in just a few clicks.
            </p>
            <button
              onClick={() => navigate("/book-appointments")}
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors shadow-lg cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Explore All Services
            </button>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
