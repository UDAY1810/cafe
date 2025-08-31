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


"use client";

import { useState } from "react";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Reservation confirmed!");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
      });
    } else {
      alert("❌ Something went wrong, please try again.");
    }
  };

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-6">Make a Reservation</h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="p-2 rounded border"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-2 rounded border"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="p-2 rounded border"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
        <input
          type="number"
          name="guests"
          value={form.guests}
          min="1"
          onChange={handleChange}
          placeholder="Guests"
          required
          className="p-2 rounded border"
        />

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition"
        >
          Reserve
        </button>
      </form>
    </section>
  );
}
