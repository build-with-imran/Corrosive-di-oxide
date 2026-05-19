import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CONSULTATION_TYPES, CONSULTATION_ICONS } from '../data/consultations';

const BookAppointments = () => {
  const navigate = useNavigate();

  const handleBook = (service) => {
    navigate(`/search?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 text-center">
          Book <span className="text-red-600">Appointments</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          Select from our wide range of diagnostic services. We partner with the best centers to ensure you get accurate and timely results.
        </p>

        {/* Blood Tests Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 border-b-2 border-red-100 pb-2 inline-block">Blood Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-48 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" alt="HbA1c Blood Test" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">HbA1c & Diabetes Profile</h3>
                  <p className="text-slate-500 mb-6">Comprehensive blood sugar analysis to help monitor and manage diabetes effectively.</p>
                </div>
                <button onClick={() => handleBook('blood tests')} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium transition-colors shadow-sm">
                  Book Blood Tests
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-48 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop" alt="Health Checkup Package" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Master Health Checkup Packages</h3>
                  <p className="text-slate-500 mb-6">Complete body screening covering vital organs and essential health parameters.</p>
                </div>
                <button onClick={() => handleBook('blood tests')} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium transition-colors shadow-sm">
                  Book Blood Tests
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scans Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 border-b-2 border-red-100 pb-2 inline-block">Scans & Imaging</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-40 bg-slate-200">
                <img src="https://images.pexels.com/photos/7089304/pexels-photo-7089304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ultrasound Scans" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Ultrasound Scans</h3>
                  <p className="text-slate-500 text-sm mb-6">Safe and painless imaging for organs, pregnancies, and tissues.</p>
                </div>
                <button onClick={() => handleBook('ultrasound')} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors text-sm shadow-sm">
                  Book Scans
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-40 bg-slate-200">
                <img src="https://images.pexels.com/photos/7089047/pexels-photo-7089047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Nuchal Translucency Scan" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Nuchal Translucency Scans</h3>
                  <p className="text-slate-500 text-sm mb-6">Specialized prenatal screening during the first trimester.</p>
                </div>
                <button onClick={() => handleBook('nuchal translucency scan')} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors text-sm shadow-sm">
                  Book Scans
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-40 bg-slate-200">
                <img src="https://ebv2e3r5onu.exactdn.com/wp-content/uploads/2022/04/SCANS-1024x576.png?strip=all" alt="Other Scans" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">CT & MRI Scans</h3>
                  <p className="text-slate-500 text-sm mb-6">Advanced imaging technologies for precise diagnostics.</p>
                </div>
                <button onClick={() => handleBook('scans')} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors text-sm shadow-sm">
                  Book Scans
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cardiology Investigations Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 border-b-2 border-red-100 pb-2 inline-block">Cardiology Investigations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-48 bg-slate-200">
                <img src="https://images.stockcake.com/public/8/f/d/8fd02691-12dd-4211-b6a1-49f333d12265_large/digital-heart-concept-stockcake.jpg" alt="ECG Test" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">ECG Test</h3>
                  <p className="text-slate-500 mb-6">Quick electrocardiogram testing to record heart rhythm, rate, and electrical activity.</p>
                </div>
                <button onClick={() => handleBook('ecg')} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium transition-colors shadow-sm">
                  Book ECG
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
              <div className="h-48 bg-slate-200">
                <img src="https://www.ganeshdiagnostic.com/admin/public/assets/images/product/1663589361-Echocardiogram.webp" alt="Echocardiogram Test" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Echocardiogram Test</h3>
                  <p className="text-slate-500 mb-6">Heart ultrasound evaluation reviewed by cardiologists for valves, chambers, and pumping function.</p>
                </div>
                <button onClick={() => handleBook('echocardiogram')} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium transition-colors shadow-sm">
                  Book Echocardiogram
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* X-Rays Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 border-b-2 border-red-100 pb-2 inline-block">X-Rays</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/3 h-64 md:h-auto bg-slate-200">
              <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop" alt="X-Rays" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-8 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">All X-Ray Services</h3>
              <p className="text-slate-500 mb-6 text-base md:text-lg">
                Fast and accurate X-ray imaging for bones, chest, and dental diagnostics. We provide quick reporting and comfortable facilities.
              </p>
              <div className="mt-auto md:mt-4">
                <button onClick={() => handleBook('x-ray')} className="w-full justify-center sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-sm inline-flex items-center gap-2">
                  <span>Book X-Rays</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Consultations Section */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 border-b-2 border-red-100 pb-2 inline-block">Doctor Consultations</h2>
          <p className="text-slate-600 mb-8 text-base md:text-lg">Connect with experienced specialists across various medical disciplines. Book consultations with hospitals near you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {CONSULTATION_TYPES.map((consultation, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col hover:scale-105 duration-300">
                <div className="h-32 bg-gradient-to-r from-red-50 to-red-100 flex items-center justify-center">
                  <span className="text-6xl">{CONSULTATION_ICONS[consultation] || '👨‍⚕️'}</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 capitalize">{consultation.replace(' consultation', '')}</h3>
                    <p className="text-slate-500 text-sm">
                      {consultation.includes('general') && 'Comprehensive health consultations for general wellness'}
                      {consultation.includes('ortho') && 'Expert orthopedic care for bone and joint issues'}
                      {consultation.includes('cardio') && 'Specialized cardiac care and heart health management'}
                      {consultation.includes('urology') && 'Professional urological services and treatment'}
                      {consultation.includes('nephro') && 'Kidney health and nephrology expertise'}
                      {consultation.includes('neuro') && 'Neurological diagnosis and brain health'}
                      {consultation.includes('derma') && 'Skin care and dermatological treatments'}
                      {consultation.includes('gyneco') && 'Women\'s health and reproductive care'}
                      {consultation.includes('pedia') && 'Specialized care for children and pediatric health'}
                      {consultation.includes('psycho') && 'Mental health and psychiatric support'}
                      {consultation.includes('ent') && 'Ear, nose, and throat specialist services'}
                      {consultation.includes('ophtha') && 'Eye care and vision correction services'}
                    </p>
                  </div>
                  <button onClick={() => handleBook(consultation)} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors text-sm shadow-sm mt-4">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
};

export default BookAppointments;
