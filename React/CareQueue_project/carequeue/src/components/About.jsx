import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 font-semibold text-sm mb-6 border border-red-500/30">
            About CareQueue
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Redefining How India <br />
            <span className="text-red-400">Accesses Healthcare</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We believe everyone deserves quick, affordable, and hassle-free access to quality diagnostics. CareQueue bridges the gap between patients and top diagnostic centres.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-16">

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                alt="Doctor consulting a patient"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Our <span className="text-red-600">Mission</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                CareQueue was founded with a simple yet powerful mission — to eliminate the long waiting times, confusing processes, and lack of transparency that patients face when booking diagnostic tests.
              </p>
              <p className="text-slate-500 leading-relaxed">
                We partner with NABL-accredited labs and AERB-certified imaging centres across India to bring you reliable, affordable, and convenient healthcare diagnostics at your fingertips.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10 md:p-14">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
              Trusted by <span className="text-red-600">Thousands</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">50+</p>
                <p className="text-slate-500 font-medium">Diagnostic Centres</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">10K+</p>
                <p className="text-slate-500 font-medium">Appointments Booked</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">4.8</p>
                <p className="text-slate-500 font-medium">Average Rating</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">15+</p>
                <p className="text-slate-500 font-medium">Cities Covered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-4">
            What We <span className="text-red-600">Offer</span>
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto text-lg">
            From routine blood work to advanced imaging — we cover the full spectrum of diagnostic services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
                  alt="Blood Tests"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Blood Tests</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Complete blood count, diabetes profiling, thyroid panels, lipid profiles and more.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
                  alt="ECG Test"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">ECG Test</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Electrocardiogram testing for heart rhythm, rate, and electrical activity checks.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                  alt="Echocardiogram"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Echocardiogram</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Cardiologist-reviewed heart ultrasound for chambers, valves, and pumping function.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559757175-92db0235ed06?q=80&w=2071&auto=format&fit=crop"
                  alt="Ultrasound"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Ultrasound</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Abdominal, pelvic, obstetric, and musculoskeletal ultrasound imaging services.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                  alt="CT & MRI Scans"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">CT & MRI Scans</h3>
                <p className="text-slate-500 text-sm leading-relaxed">High-resolution CT scans and MRI imaging for precise diagnosis of complex conditions.</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop"
                  alt="X-Rays"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">X-Rays</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Digital X-ray services for bone, chest, and dental diagnostics with instant reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Why Choose <span className="text-red-600">CareQueue?</span>
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">NABL Accredited Labs</h4>
                    <p className="text-slate-500 mt-1">All our partner centres are certified and follow strict quality protocols for accurate results.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Zero Waiting Time</h4>
                    <p className="text-slate-500 mt-1">Pre-booked slots mean you walk in, get tested, and walk out — no queues, no delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">24/7 Support</h4>
                    <p className="text-slate-500 mt-1">Our dedicated support team is available round the clock to assist you with any queries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Affordable Pricing</h4>
                    <p className="text-slate-500 mt-1">Transparent pricing with no hidden charges. Get the best rates across all partner centres.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9ce113ac100?q=80&w=2070&auto=format&fit=crop"
                alt="Modern diagnostic lab"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Team / Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-4">
            Our <span className="text-red-600">Facilities</span>
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto text-lg">
            State-of-the-art equipment and comfortable environments designed for your well-being.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Hospital reception"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop"
                alt="Lab technician working"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop"
                alt="Modern hospital building"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop"
                alt="Medical equipment"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                alt="Diagnostic centre interior"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop"
                alt="Healthcare professionals"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl shadow-red-200/50">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Browse our services and book an appointment at a centre near you in just a few clicks.
            </p>
            <a
              href="/book-appointments"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book Now
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default About;
