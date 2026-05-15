import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const getUserBookings = (email) => {
  const allBookings = JSON.parse(localStorage.getItem("carequeue_bookings") || "[]");
  return allBookings.filter((booking) => booking.userEmail === email);
};

const MyAppointments = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [appointments, setAppointments] = useState(() => getUserBookings(currentUser?.email));

  const handleCancel = (bookingId) => {
    const allBookings = JSON.parse(localStorage.getItem("carequeue_bookings") || "[]");
    const updated = allBookings.map((b) =>
      b.id === bookingId ? { ...b, status: "Cancelled" } : b
    );
    localStorage.setItem("carequeue_bookings", JSON.stringify(updated));
    setAppointments(getUserBookings(currentUser?.email));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          border: "border-emerald-200",
          dot: "bg-emerald-500",
        };
      case "Cancelled":
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          border: "border-red-200",
          dot: "bg-red-500",
        };
      default:
        return {
          bg: "bg-amber-50",
          text: "text-amber-700",
          border: "border-amber-200",
          dot: "bg-amber-500",
        };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <div className="flex-grow max-w-5xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
            My <span className="text-red-600">Appointments</span>
          </h1>
          <p className="text-lg text-slate-500">
            Track and manage all your upcoming and past bookings.
          </p>
        </div>

        {appointments.length > 0 ? (
          <>
            {/* Summary badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm">
                <span className="text-sm text-slate-500">Total</span>
                <p className="text-2xl font-bold text-slate-800">{appointments.length}</p>
              </div>
              <div className="bg-white border border-emerald-200 rounded-xl px-5 py-3 shadow-sm">
                <span className="text-sm text-emerald-600">Confirmed</span>
                <p className="text-2xl font-bold text-emerald-700">
                  {appointments.filter((a) => a.status === "Confirmed").length}
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded-xl px-5 py-3 shadow-sm">
                <span className="text-sm text-red-600">Cancelled</span>
                <p className="text-2xl font-bold text-red-700">
                  {appointments.filter((a) => a.status === "Cancelled").length}
                </p>
              </div>
            </div>

            {/* Appointment Cards */}
            <div className="grid grid-cols-1 gap-6">
              {appointments.map((appt) => {
                const statusStyle = getStatusStyle(appt.status);
                return (
                  <div
                    key={appt.id}
                    className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md ${
                      appt.status === "Cancelled" ? "opacity-60" : ""
                    }`}
                  >
                    {/* Card header with status */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">
                          {appt.testPrefer?.charAt(0).toUpperCase() || "T"}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 capitalize text-lg">
                            {appt.testPrefer}
                          </h3>
                          <p className="text-sm text-slate-500">
                            Booking ID: #{appt.id?.slice(-8).toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                      >
                        <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                        {appt.status}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="px-6 py-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                        {/* Center */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Centre</p>
                            <p className="text-sm font-semibold text-slate-800">{appt.centerName}</p>
                          </div>
                        </div>

                        {/* Patient */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Patient</p>
                            <p className="text-sm font-semibold text-slate-800">
                              {appt.bookingFor === "someone_else" ? appt.patientName : appt.name}
                            </p>
                          </div>
                        </div>

                        {/* Timing */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Timing</p>
                            <p className="text-sm font-semibold text-slate-800">{appt.timing}</p>
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Mobile</p>
                            <p className="text-sm font-semibold text-slate-800">{appt.mobile}</p>
                          </div>
                        </div>

                        {/* Booked On */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Booked On</p>
                            <p className="text-sm font-semibold text-slate-800">
                              {new Date(appt.bookedAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        {/* Age */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Age</p>
                            <p className="text-sm font-semibold text-slate-800">{appt.age} years</p>
                          </div>
                        </div>

                        {(appt.price || appt.estimatedPrice) && (
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a1 1 0 012 0v.092a4.535 4.535 0 011.676.662 1 1 0 11-1.141 1.644A2.395 2.395 0 0011 7.151v2.136c1.234.357 2.5 1.068 2.5 2.713 0 1.567-1.225 2.379-2.5 2.694V15a1 1 0 11-2 0v-.284a4.72 4.72 0 01-2.195-.962 1 1 0 111.39-1.438c.194.188.472.36.805.487v-2.42C7.766 10.026 6.5 9.315 6.5 7.999 6.5 6.645 7.695 5.85 9 5.57V5z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Price</p>
                              <p className="text-sm font-semibold text-slate-800">{appt.price || appt.estimatedPrice}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card footer with actions */}
                    {appt.status === "Confirmed" && (
                      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex justify-end">
                        <button
                          onClick={() => handleCancel(appt.id)}
                          className="px-5 py-2 rounded-lg border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 transition-colors"
                        >
                          Cancel Appointment
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-slate-200">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">No Appointments Yet</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              You haven't booked any appointments yet. Browse our services and book your first appointment!
            </p>
            <Link
              to="/book-appointments"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-md shadow-red-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Book an Appointment
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyAppointments;
