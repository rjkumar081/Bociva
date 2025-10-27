import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const whatsapp = "https://wa.me/919464642218";
  const phoneDisplay = "+91 94646 42218";

  const services = [
    {
      id: 1,
      title: "PF Withdrawal & Correction",
      short: "Easy EPF claim, transfer or name correction services.",
      bullets: [
        "Online PF withdrawal",
        "KYC & Aadhaar linking",
        "PF name/date correction"
      ],
    },
    {
      id: 2,
      title: "IT & GST Services",
      short: "Simplify your tax filings with expert support.",
      bullets: [
        "ITR filing",
        "GST registration",
        "GST return filing"
      ],
    },
    {
      id: 3,
      title: "PAN Card Services",
      short: "Apply, update or reprint PAN Card fast and safely.",
      bullets: [
        "New PAN registration",
        "PAN correction",
        "Lost PAN reprint"
      ],
    },
    {
      id: 4,
      title: "Aadhaar Update",
      short: "Assistance with online Aadhaar correction or reprint.",
      bullets: [
        "Name & address update",
        "Mobile linking",
        "Aadhaar reprint help"
      ],
    },
    {
      id: 5,
      title: "Business & MSME Registration",
      short: "Start your business legally with Udyam/MSME support.",
      bullets: [
        "Udyam registration",
        "Shop & establishment license",
        "GST + PAN + MSME combo"
      ],
    },
    {
      id: 6,
      title: "Bank Account Opening",
      short: "Open zero-balance or current account easily.",
      bullets: [
        "Private & government banks",
        "Account KYC help",
        "Passbook & ATM delivery tracking"
      ],
    },
    {
      id: 7,
      title: "Travel & Ticket Booking",
      short: "Book confirmed train, flight & hotel tickets instantly.",
      bullets: [
        "IRCTC authorized booking",
        "Flight & visa assistance",
        "Hotel deals & packages"
      ],
    },
    {
      id: 8,
      title: "Passport Services",
      short: "Get new or renewed passport without hassle.",
      bullets: [
        "Online form filling",
        "Document verification",
        "Appointment booking"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-xl font-extrabold text-indigo-700">
            MeraPopi <span className="text-gray-800">Digital Seva</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="text-white bg-indigo-600 px-3 py-2 rounded-md">Contact</a>
            <a href={whatsapp} target="_blank" rel="noreferrer"
               className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-md hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.52 3.48A11.88 11.88 0 0012 .04 11.88 11.88 0 003.48 3.48 11.88 11.88 0 00.04 12c0 2.06.53 4 1.53 5.72L0 24l6.42-1.68A11.88 11.88 0 0012 23.96c2.06 0 4-0.53 5.72-1.53A11.88 11.88 0 0023.96 12 11.88 11.88 0 0020.52 3.48zM12 21.5c-1.86 0-3.62-.48-5.18-1.36l-.37-.22-3.8.99.99-3.8-.22-.37A9.5 9.5 0 1112 21.5z"/>
              </svg>
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Fast, Trusted & Local — <span className="text-indigo-600">MeraPopi</span>
          </h1>
          <p className="mt-4 text-gray-600">
            We make government and digital services simple: Aadhaar, PAN, GST, PF claims, passports, bookings, and CSC schemes — guided help at your neighbourhood center.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-md shadow hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.52 3.48A11.88 11.88 0 0012 .04 11.88 11.88 0 003.48 3.48A11.88 11.88 0 00.04 12c0 2.06.53 4 1.53 5.72L0 24l6.42-1.68A11.88 11.88 0 0012 23.96c2.06 0 4-0.53 5.72-1.53A11.88 11.88 0 0023.96 12A11.88 11.88 0 0020.52 3.48z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a href="#contact" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md">
              Book a Slot
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="font-semibold">Open Hours</div>
              <div className="text-xs">Mon–Sat: 9:30 AM — 6:30 PM</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="font-semibold">Contact</div>
              <div className="text-xs">{phoneDisplay} (WhatsApp)</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200"
                 alt="digital service" className="w-full h-64 object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                 alt="customer help" className="rounded-lg h-28 w-full object-cover shadow-sm" />
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                 alt="forms" className="rounded-lg h-28 w-full object-cover shadow-sm" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.id} className="bg-white border rounded-2xl p-6 hover:shadow-xl transition">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{s.short}</p>
                <ul className="mt-3 text-sm text-gray-700 space-y-1">
                  {s.bullets.map((b, idx) => <li key={idx}>• {b}</li>)}
                </ul>
                <div className="mt-4 flex gap-3">
                  <a href="#contact" className="text-sm inline-block bg-indigo-600 text-white px-3 py-2 rounded-md">Book Now</a>
                  <a href={whatsapp} target="_blank" rel="noreferrer"
                     className="text-sm inline-flex items-center gap-2 border border-green-600 text-green-600 px-3 py-2 rounded-md">
                    WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose MeraPopi?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Trusted local center providing secure, transparent, and friendly digital services.
          We help citizens and small businesses complete online tasks quickly and correctly.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">✅ Data Privacy & Encryption</div>
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">✅ Transparent Pricing</div>
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">✅ Trained Staff & Fast Service</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-indigo-600 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl p-6 shadow-lg -mt-12">
          <h2 className="text-2xl font-bold text-center">Contact & Bookings</h2>
          <p className="text-center text-gray-600 mt-2">
            Fill the form and we will call/WhatsApp you within one business day.
          </p>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full Name" className="border p-3 rounded-md w-full" />
              <input name="phone" required placeholder="Phone / WhatsApp" className="border p-3 rounded-md w-full" />
            </div>
            <div className="mt-4">
              <select name="service" required className="border p-3 rounded-md w-full">
                <option value="">Choose a service</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <textarea name="message" rows={4} placeholder="Additional details (optional)" className="border p-3 rounded-md w-full"></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-5 py-3 rounded-md w-full mt-4">
              Request Callback
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            Or call/WhatsApp: <strong>{phoneDisplay}</strong>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold text-white text-lg">MeraPopi</div>
            <p className="text-sm mt-2">Digital Seva Center — Government & IT services made simple.</p>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="text-sm mt-2 space-y-1">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy & Data Security</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <p className="text-sm mt-2">Phone: {phoneDisplay}</p>
            <p className="text-sm">Email: support@merapopi.in</p>
          </div>
        </div>
        <p className="text-xs text-center text-gray-500 mt-6">
          © {new Date().getFullYear()} MeraPopi Digital Seva Center. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
