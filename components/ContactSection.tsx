"use client";

import { useState } from "react";

export default function ContactSection() {
  const phone1 = "0707471576";
  const phone2 = "0705854576";
  const whatsappNumber = "254743594486";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
🙏 Prayer Request - The Mountain of Breakthrough Church

👤 Name: ${name}
📞 Phone: ${phone || "Not provided"}

📝 Message:
${message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    // ✅ FIX: better mobile support than window.open
    window.location.href = url;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-3">
          Reach out to us for prayer, support, or inquiries
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        {/* CALL CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-blue-800">
            Call Church
          </h3>

          <p className="mt-4 text-gray-800 font-medium">{phone1}</p>
          <p className="text-gray-800 font-medium">{phone2}</p>

          <div className="mt-5 space-y-3">
            <a
              href={`tel:${phone1}`}
              className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Call Primary Number
            </a>

            <a
              href={`tel:${phone2}`}
              className="block border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Call Secondary Number
            </a>
          </div>
        </div>

        {/* WHATSAPP CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-green-600">
            WhatsApp Church
          </h3>

          <p className="mt-4 text-gray-700">
            Message us anytime for prayer or guidance
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Open WhatsApp Chat
          </a>
        </div>
      </div>

      {/* PRAYER FORM */}
      <div className="max-w-3xl mx-auto mt-14 bg-white p-8 rounded-xl shadow-md">

        <h3 className="text-2xl font-bold text-center mb-8">
          Send a Prayer Request
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number (optional)
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Prayer Request
            </label>
            <textarea
              placeholder="Write your prayer request here..."
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Prayer Request
          </button>

        </form>
      </div>

    </section>
  );
}