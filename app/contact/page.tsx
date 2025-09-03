// "use client";
// import { useState } from "react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     if (data.success) {
//       alert("✅ Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } else {
//       alert("❌ Failed to send message. Try again.");
//     }
//   };

//   return (
//     <section className="py-10 px-4 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">📩 Contact Us</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
//       >
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           required
//           className="p-2 rounded border"
//         />
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           required
//           rows={5}
//           className="p-2 rounded border"
//         />
//         <button
//           type="submit"
//           className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }


// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [popup, setPopup] = useState<{ show: boolean; success: boolean; message: string }>({
//     show: false,
//     success: false,
//     message: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       // For now, simulate success (you can connect to API later)
//       setPopup({ show: true, success: true, message: "✅ Message Sent Successfully!" });
//       setForm({ name: "", email: "", phone: "", message: "" });
//     } catch (err) {
//       setPopup({ show: true, success: false, message: "❌ Failed to send. Try again." });
//     }

//     setTimeout(() => setPopup({ ...popup, show: false }), 3000);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-black dark:to-gray-800 p-8">
//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
//         {/* Left: Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-6">📍 Visit Us</h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
//             <FaMapMarkerAlt className="text-yellow-500" /> Hunger Lane Cafe, Panki, Kanpur
//           </p>
//           <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
//             <FaPhone className="text-yellow-500" /> +91 7652099706
//           </p>
//           <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
//             <FaEnvelope className="text-yellow-500" /> contact@hungerlane.com
//           </p>
//           <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
//             <FaClock className="text-yellow-500" /> Mon-Sun: 3:00 PM - 11:00 PM
//           </p>
//         </motion.div>

//         {/* Right: Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
//         >
//           <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-6">📩 Get in Touch</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//               <FaUser className="text-yellow-600 dark:text-yellow-400 mr-2" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//               />
//             </div>
//             <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//               <FaEnvelope className="text-yellow-600 dark:text-yellow-400 mr-2" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//               />
//             </div>
//             <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//               <FaPhone className="text-yellow-600 dark:text-yellow-400 mr-2" />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={form.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//               />
//             </div>
//             <textarea
//               name="message"
//               rows={4}
//               placeholder="Your Message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="w-full bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2 focus:outline-none text-gray-800 dark:text-gray-200"
//             ></textarea>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition"
//             >
//               Send Message ✨
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>

//       {/* ✅ Popup Notification */}
//       <AnimatePresence>
//         {popup.show && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.4 }}
//             className={`fixed top-6 right-6 px-6 py-3 rounded-xl shadow-lg font-semibold text-white ${
//               popup.success ? "bg-green-500" : "bg-red-500"
//             }`}
//           >
//             {popup.message}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [popup, setPopup] = useState<{ show: boolean; success: boolean; message: string }>({
    show: false,
    success: false,
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setPopup({ show: true, success: true, message: "✅ Message Sent Successfully!" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setPopup({ show: true, success: false, message: "❌ Failed to send. Try again." });
    }

    setTimeout(() => setPopup({ ...popup, show: false }), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-black dark:to-gray-800 p-8">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left: Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-6">📍 Visit Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" /> Hunger Lane Cafe, Panki, Kanpur
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
            <FaPhone className="text-yellow-500" /> +91 7652099706
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" /> contact@hungerlane.com
          </p>
          <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-6">
            <FaClock className="text-yellow-500" /> Mon-Sun: 4:00 PM - 11:00 PM
          </p>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.364263917379!2d77.2295091150837!3d28.613939982423185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2f3d5b7f37%3A0x1234567890abcdef!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-6">📩 Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
              <FaUser className="text-yellow-600 dark:text-yellow-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
              <FaEnvelope className="text-yellow-600 dark:text-yellow-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
              />
            </div>
            <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
              <FaPhone className="text-yellow-600 dark:text-yellow-400 mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2 focus:outline-none text-gray-800 dark:text-gray-200"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition"
            >
              Send Message ✨
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* ✅ Popup Notification */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-6 right-6 px-6 py-3 rounded-xl shadow-lg font-semibold text-white ${
              popup.success ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {popup.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
