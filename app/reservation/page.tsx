// "use client";
// import { useState } from "react";


// export default function ReservationPage() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: 1 });
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const res = await fetch("/api/reservation", {
//       method: "POST",
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();
//     if (data.success) setSuccess("Reservation successful!");
//   };

//   return (
//     <>

//       <div className="p-8 max-w-md mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Book a Table</h1>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" required
//             className="border p-2 rounded" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/>
//           <input type="email" placeholder="Email" required
//             className="border p-2 rounded" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/>
//           <input type="tel" placeholder="Phone" className="border p-2 rounded"
//             value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}/>
//           <input type="date" required className="border p-2 rounded"
//             value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}/>
//           <input type="number" min={1} placeholder="Guests" required
//             className="border p-2 rounded" value={form.guests} onChange={e => setForm({ ...form, guests: Number(e.target.value) })}/>
//           <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Book Now</button>
//         </form>
//         {success && <p className="mt-4 text-green-600">{success}</p>}
//       </div>

//     </>
//   );
// }


// "use client";

// import { useState } from "react";

// export default function ReservationPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: 1,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/reservation", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("✅ Reservation confirmed!");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         date: "",
//         time: "",
//         guests: 1,
//       });
//     } else {
//       alert("❌ Something went wrong, please try again.");
//     }
//   };

//   return (
//     <section className="py-10">
//       <h1 className="text-3xl font-bold mb-6">Make a Reservation</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="grid gap-4 max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
//       >
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="number"
//           name="guests"
//           value={form.guests}
//           min="1"
//           onChange={handleChange}
//           placeholder="Guests"
//           required
//           className="p-2 rounded border"
//         />

//         <button
//           type="submit"
//           className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition"
//         >
//           Reserve
//         </button>
//       </form>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function ReservationPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: 1,
//   });

//   const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus(null);

//     try {
//       const res = await fetch("/api/reservation", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       let data;
//       try {
//         data = await res.json(); // attempt parsing
//       } catch {
//         throw new Error("Server did not return JSON");
//       }

//       if (res.ok && data.success) {
//         setStatus({ success: true, message: "✅ Reservation confirmed!" });
//         setForm({ name: "", email: "", phone: "", date: "", time: "", guests: 1 });
//       } else {
//         setStatus({ success: false, message: data?.error || "❌ Something went wrong, please try again." });
//       }
//     } catch (err: any) {
//       setStatus({ success: false, message: err.message || "❌ Request failed." });
//     }
//   };

//   return (
//     <section className="py-10">
//       <h1 className="text-3xl font-bold mb-6">Make a Reservation</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="grid gap-4 max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
//       >
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//           required
//           className="p-2 rounded border"
//         />
//         <input
//           type="number"
//           name="guests"
//           value={form.guests}
//           min="1"
//           onChange={handleChange}
//           placeholder="Guests"
//           required
//           className="p-2 rounded border"
//         />

//         <button
//           type="submit"
//           className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition"
//         >
//           Reserve
//         </button>
//       </form>

//       {status && (
//         <p
//           className={`mt-4 font-medium ${
//             status.success ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {status.message}
//         </p>
//       )}
//     </section>
//   );
// }


// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

// export default function ReservationPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: 1,
//   });
//     const [popup, setPopup] = useState<{ show: boolean; success: boolean; message: string }>({
//     show: false,
//     success: false,
//     message: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const res = await fetch("/api/reservation", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();
//     if (data.success) {
//       alert("✅ Reservation confirmed!");
//       setForm({ name: "", email: "", phone: "", date: "", time: "", guests: 1 });
//     } else {
//       alert("❌ " + data.error);
//     }
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 dark:from-gray-900 dark:via-black dark:to-gray-800 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
//       >
//         <h1 className="text-3xl font-extrabold text-center text-yellow-600 dark:text-yellow-400 mb-6">
//           🍽 Make a Reservation
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//             <FaUser className="text-yellow-600 dark:text-yellow-400 mr-2" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//             <FaEnvelope className="text-yellow-600 dark:text-yellow-400 mr-2" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//             />
//           </div>

//           {/* Phone */}
//           <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//             <FaPhone className="text-yellow-600 dark:text-yellow-400 mr-2" />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//             />
//           </div>

//           {/* Date */}
//           <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//             <FaCalendarAlt className="text-yellow-600 dark:text-yellow-400 mr-2" />
//             <input
//               type="date"
//               name="date"
//               value={form.date}
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//             />
//           </div>

//           {/* Time */}
//           <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//             <FaClock className="text-yellow-600 dark:text-yellow-400 mr-2" />
//             <input
//               type="time"
//               name="time"
//               value={form.time}
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//             />
//           </div>

//           {/* Guests */}
//           <div className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2">
//             <FaUsers className="text-yellow-600 dark:text-yellow-400 mr-2" />
//             <input
//               type="number"
//               name="guests"
//               value={form.guests}
//               min={1}
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
//             />
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition"
//           >
//             Reserve Now ✨
//           </motion.button>
//         </form>
//       </motion.div>
//     </section>
//   );
// }


/// yeh iski theme alg hai mujhe achi lag rhi thi lekin puri website ki them alg hogyi


// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

// export default function ReservationPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: 1,
//   });

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
//       const res = await fetch("/api/reservation", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setPopup({ show: true, success: true, message: "✅ Reservation Confirmed!" });
//         setForm({ name: "", email: "", phone: "", date: "", time: "", guests: 1 });
//       } else {
//         setPopup({ show: true, success: false, message: "❌ " + data.error });
//       }
//     } catch (err) {
//       setPopup({ show: true, success: false, message: "⚠️ Server Error. Try again." });
//     }

//     setTimeout(() => setPopup({ ...popup, show: false }), 3000);
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 dark:from-gray-900 dark:to-black px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-md p-10 rounded-2xl shadow-2xl bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
//       >
//         <h1 className="text-3xl font-extrabold text-center text-yellow-600 dark:text-yellow-400 mb-8">
//           🍽 Make a Reservation
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {[
//             { name: "name", type: "text", placeholder: "Full Name", icon: <FaUser /> },
//             { name: "email", type: "email", placeholder: "Email", icon: <FaEnvelope /> },
//             { name: "phone", type: "tel", placeholder: "Phone Number", icon: <FaPhone /> },
//             { name: "date", type: "date", placeholder: "Date", icon: <FaCalendarAlt /> },
//             { name: "time", type: "time", placeholder: "Time", icon: <FaClock /> },
//             { name: "guests", type: "number", placeholder: "Guests", icon: <FaUsers /> },
//           ].map((field, idx) => (
//             <motion.div
//               key={idx}
//               whileFocus={{ scale: 1.02 }}
//               className="flex items-center bg-white/40 dark:bg-gray-800/50 rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition"
//             >
//               <span className="text-yellow-600 dark:text-yellow-400 mr-3 text-lg">{field.icon}</span>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={(form as any)[field.name]}
//                 onChange={handleChange}
//                 placeholder={field.placeholder}
//                 min={field.type === "number" ? 1 : undefined}
//                 required
//                 className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
//               />
//             </motion.div>
//           ))}

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-xl transition"
//           >
//             Reserve Now ✨
//           </motion.button>
//         </form>
//       </motion.div>

//       {/* ✅ Popup Notification */}
//       <AnimatePresence>
//         {popup.show && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.5 }}
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


/// original theme is back
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaDigitalTachograph, FaUsers } from "react-icons/fa";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

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
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setPopup({ show: true, success: true, message: "✅ Reservation Confirmed!" });
        setForm({ name: "", email: "", phone: "", date: "", time: "", guests: 1 });
      } else {
        setPopup({ show: true, success: false, message: "❌ " + data.error });
      }
    } catch (err) {
      setPopup({ show: true, success: false, message: "⚠️ Server Error. Try again." });
    }

    setTimeout(() => setPopup({ ...popup, show: false }), 3000);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-black dark:to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
      >
        <h1 className="text-3xl font-extrabold text-center text-yellow-600 dark:text-yellow-400 mb-6">
          🍽 Make a Reservation
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          {[
            { name: "name", type: "text", placeholder: "Full Name", icon: <FaUser /> },
            { name: "email", type: "email", placeholder: "Email", icon: <FaEnvelope /> },
            { name: "phone", type: "tel", placeholder: "Phone Number", icon: <FaPhone /> },
            { name: "date", type: "date", placeholder: "Date", icon: <FaCalendarAlt /> },
            { name: "time", type: "time", placeholder: "Time", icon: <FaDigitalTachograph /> },
            { name: "guests", type: "number", placeholder: "Guests", icon: <FaUsers /> },
          ].map((field, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white/30 dark:bg-gray-800/40 rounded-lg px-3 py-2 shadow-md hover:shadow-lg transition"
            >
              <span className="text-yellow-600 dark:text-yellow-400 mr-2 text-lg">{field.icon}</span>
              <input
                type={field.type}
                name={field.name}
                value={(form as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                min={field.type === "number" ? 1 : undefined}
                required
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          ))}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition"
          >
            Reserve Now ✨
          </motion.button>
        </form>
      </motion.div>

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
