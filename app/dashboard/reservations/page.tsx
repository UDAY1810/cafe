// "use client";
// import { useEffect, useState } from "react";

// export default function ReservationsDashboard() {
//   const [reservations, setReservations] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("/api/reservation")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) setReservations(data.reservations);
//       });
//   }, []);

//   return (
//     <section className="p-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
//       <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-600 dark:text-yellow-400 drop-shadow-md">
//         📋 Reservation Dashboard
//       </h1>

//       {reservations.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
//           No reservations yet. Start by booking one!
//         </p>
//       ) : (
//         <div className="overflow-x-auto rounded-xl shadow-lg">
//           <table className="w-full border-collapse bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl overflow-hidden">
//             <thead className="bg-yellow-500 text-black dark:bg-yellow-600">
//               <tr>
//                 <th className="p-4 text-left">👤 Name</th>
//                 <th className="p-4 text-left">📧 Email</th>
//                 <th className="p-4 text-left">📞 Phone</th>
//                 <th className="p-4 text-left">📅 Date</th>
//                 <th className="p-4 text-left">⏰ Time</th>
//                 <th className="p-4 text-left">👥 Guests</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reservations.map((res, idx) => (
//                 <tr
//                   key={res._id || idx}
//                   className="hover:bg-yellow-100 dark:hover:bg-gray-800 transition-colors"
//                 >
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200">
//                     {res.name}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//                     {res.email}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//                     {res.phone}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//                     {new Date(res.date).toLocaleDateString()}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//                     {res.time}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold text-yellow-600 dark:text-yellow-400">
//                     {res.guests}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// }





// "use client";
// import { useEffect, useState } from "react";

// export default function ReservationsDashboard() {
//   const [reservations, setReservations] = useState<any[]>([]);

//   // Fetch reservations
//   const fetchReservations = async () => {
//     const res = await fetch("/api/reservation");
//     const data = await res.json();
//     if (data.success) setReservations(data.reservations);
//   };

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   // Handle delete
//   const handleDelete = async (id: string) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this reservation?");
//     if (!confirmDelete) return;

//     const res = await fetch("/api/reservation", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });

//     const data = await res.json();
//     if (data.success) {
//       alert("✅ Reservation deleted!");
//       fetchReservations();
//     } else {
//       alert("❌ Error: " + data.error);
//     }
//   };

//   // Handle edit (for now simple alert, later you can make modal form)
//   const handleEdit = (id: string) => {
//     alert(`✏️ Edit functionality for reservation ID: ${id} coming soon!`);
//   };

//   return (
//     <section className="p-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
//       <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-600 dark:text-yellow-400 drop-shadow-md">
//         📋 Reservation Dashboard
//       </h1>

//       {reservations.length === 0 ? (
//         <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
//           No reservations yet. Start by booking one!
//         </p>
//       ) : (
//         <div className="overflow-x-auto rounded-xl shadow-lg">
//           <table className="w-full border-collapse bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl overflow-hidden">
//             <thead className="bg-yellow-500 text-black dark:bg-yellow-600">
//               <tr>
//                 <th className="p-4 text-left">👤 Name</th>
//                 <th className="p-4 text-left">📧 Email</th>
//                 <th className="p-4 text-left">📞 Phone</th>
//                 <th className="p-4 text-left">📅 Date</th>
//                 <th className="p-4 text-left">⏰ Time</th>
//                 <th className="p-4 text-left">👥 Guests</th>
//                 <th className="p-4 text-center">⚙ Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reservations.map((res, idx) => (
//                 <tr
//                   key={res._id || idx}
//                   className="hover:bg-yellow-100 dark:hover:bg-gray-800 transition-colors"
//                 >
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200">
//                     {res.name}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">{res.email}</td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">{res.phone}</td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">
//                     {new Date(res.date).toLocaleDateString()}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700">{res.time}</td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold text-yellow-600 dark:text-yellow-400">
//                     {res.guests}
//                   </td>
//                   <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-center space-x-2">
//                     <button
//                       onClick={() => handleEdit(res._id)}
//                       className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
//                     >
//                       ✏️ Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(res._id)}
//                       className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
//                     >
//                       ❌ Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </section>
//   );
// }



/// iske baad ek charts aur ek pura full analytics dashoard bana na chata hu
// uske liye chart.js ya koi aur library use kar sakta hu


// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // 👇 Recharts components proper import
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
//   LineChart, Line,
//   PieChart, Pie, Cell, Legend
// } from "recharts";


// export default function DashboardPage() {
//   // Dummy data
//   const [stats, setStats] = useState({
//     totalReservations: 120,
//     totalCustomers: 95,
//     revenue: 15000,
//     topItem: "Cappuccino",
//   });

//   const reservationsTrend = [
//     { day: "Mon", reservations: 10 },
//     { day: "Tue", reservations: 15 },
//     { day: "Wed", reservations: 20 },
//     { day: "Thu", reservations: 25 },
//     { day: "Fri", reservations: 30 },
//     { day: "Sat", reservations: 40 },
//     { day: "Sun", reservations: 35 },
//   ];

//   const topItems = [
//     { name: "Cappuccino", orders: 45 },
//     { name: "Latte", orders: 30 },
//     { name: "Veg Burger", orders: 25 },
//     { name: "Cold Brew", orders: 20 },
//   ];

//   const categorySplit = [
//     { name: "Coffee", value: 70 },
//     { name: "Snacks", value: 20 },
//     { name: "Drinks", value: 10 },
//   ];

//   const COLORS = ["#facc15", "#34d399", "#60a5fa"];

//   return (
//     <section className="min-h-screen py-12 px-6 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:to-black">
//       <h1 className="text-4xl font-extrabold text-center text-yellow-600 dark:text-yellow-400 mb-12">
//         📊 Cafe Analytics Dashboard
//       </h1>

//       {/* Summary Cards */}
//       <div className="grid gap-6 md:grid-cols-4 max-w-7xl mx-auto mb-12">
//         {[
//           { title: "Reservations", value: stats.totalReservations },
//           { title: "Customers", value: stats.totalCustomers },
//           { title: "Revenue (₹)", value: stats.revenue },
//           { title: "Top Item", value: stats.topItem },
//         ].map((card, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 text-center"
//           >
//             <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//               {card.title}
//             </h3>
//             <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
//               {card.value}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto">
//         {/* Reservations Trend */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/30 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg"
//         >
//           <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
//             Weekly Reservations
//           </h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={reservationsTrend}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="reservations" stroke="#facc15" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Top Items */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/30 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg"
//         >
//           <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
//             Top Selling Items
//           </h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={topItems}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="orders" fill="#facc15" />
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Category Split */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/30 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg md:col-span-2"
//         >
//           <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
//             Orders by Category
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={categorySplit}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={120}
//                 dataKey="value"
//               >
//                 {categorySplit.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


/// real time original data se dashboard banane ke liye ye code use kar sakta hu
// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell, Legend, LineChart, Line, CartesianGrid
// } from "recharts";

// export default function DashboardPage() {
//   const [stats, setStats] = useState<any>(null);

//   useEffect(() => {
//     fetch("/api/reservation/summary")
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) setStats(data.stats);
//       });
//   }, []);

//   if (!stats) {
//     return <p className="text-center text-gray-400">Loading analytics...</p>;
//   }

//   const COLORS = ["#facc15", "#ef4444", "#3b82f6", "#22c55e"];

//   return (
//     <section className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400">
//         📊 Cafe Analytics Dashboard
//       </h1>

//       {/* Stats Cards */}
//       <div className="grid md:grid-cols-4 gap-6 mb-10">
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Total Reservations</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.totalReservations}</p>
//         </div>
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Unique Customers</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.totalCustomers}</p>
//         </div>
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Revenue</h2>
//           <p className="text-2xl font-bold text-yellow-400">₹{stats.revenue}</p>
//         </div>
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Top Item</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.topItem}</p>
//         </div>
//       </div>

//       {/* Weekly Reservations Trend */}
//       <motion.div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg">
//         <h2 className="mb-4 font-semibold text-yellow-400">📅 Weekly Reservations Trend</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={stats.trend}>
//             <XAxis dataKey="_id" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <Bar dataKey="reservations" fill="#facc15" radius={[6, 6, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </motion.div>
//     </section>
//   );
// }



// dummy data se dashboard banane ke liye ye code use kar sakta hu

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell, Legend, LineChart, Line, CartesianGrid
// } from "recharts";

// export default function DashboardPage() {
//   // Dummy data
//   const stats = {
//     totalReservations: 120,
//     totalCustomers: 95,
//     revenue: 15000, // ✅ Revenue added
//     topItem: "Cappuccino ☕",
//   };

//   const reservationsTrend = [
//     { day: "Mon", reservations: 5 },
//     { day: "Tue", reservations: 8 },
//     { day: "Wed", reservations: 12 },
//     { day: "Thu", reservations: 6 },
//     { day: "Fri", reservations: 10 },
//     { day: "Sat", reservations: 15 },
//     { day: "Sun", reservations: 7 },
//   ];

//   const revenueTrend = [
//     { day: "Mon", revenue: 2000 },
//     { day: "Tue", revenue: 2500 },
//     { day: "Wed", revenue: 3200 },
//     { day: "Thu", revenue: 1800 },
//     { day: "Fri", revenue: 2700 },
//     { day: "Sat", revenue: 4000 },
//     { day: "Sun", revenue: 2800 },
//   ];

//   const topItems = [
//     { name: "Cappuccino", value: 12 },
//     { name: "Cold Brew", value: 7 },
//     { name: "Latte", value: 9 },
//     { name: "Veg Burger", value: 5 },
//   ];

//   const COLORS = ["#facc15", "#ef4444", "#3b82f6", "#22c55e"];

//   // ✅ CSV Export Function
//   const exportCSV = () => {
//     const headers = ["Day,Reservations,Revenue"];
//     const rows = reservationsTrend.map(
//       (r, i) => `${r.day},${r.reservations},${revenueTrend[i].revenue}`
//     );
//     const csvContent = [headers, ...rows].join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.setAttribute("download", "analytics.csv");
//     a.click();
//   };

//   return (
//     <section className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400">
//         📊 Cafe Analytics Dashboard
//       </h1>

//       {/* Stats Cards */}
//       <div className="grid md:grid-cols-4 gap-6 mb-10">
//         {[
//           { label: "Total Reservations", value: stats.totalReservations },
//           { label: "Unique Customers", value: stats.totalCustomers },
//           { label: "Revenue", value: `₹${stats.revenue.toLocaleString()}` }, // ✅ Revenue card
//           { label: "Top Item", value: stats.topItem },
//         ].map((card, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.6 }}
//             className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center"
//           >
//             <h2 className="text-lg font-semibold">{card.label}</h2>
//             <p className="text-2xl font-bold text-yellow-400">{card.value}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Bar Chart - Reservations */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg"
//         >
//           <h2 className="mb-4 font-semibold text-yellow-400">📅 Weekly Reservations Trend</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={reservationsTrend}>
//               <XAxis dataKey="day" stroke="#fff" />
//               <YAxis stroke="#fff" />
//               <Tooltip />
//               <Bar dataKey="reservations" fill="#facc15" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Pie Chart - Top Items */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg"
//         >
//           <h2 className="mb-4 font-semibold text-yellow-400">🥘 Top Ordered Items</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={topItems}
//                 cx="50%" cy="50%"
//                 labelLine={false}
//                 outerRadius={120}
//                 dataKey="value"
//               >
//                 {topItems.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>

//       {/* Line Chart - Revenue */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg mt-10"
//       >
//         <h2 className="mb-4 font-semibold text-yellow-400">💰 Revenue Growth</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={revenueTrend}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#555" />
//             <XAxis dataKey="day" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <Line type="monotone" dataKey="revenue" stroke="#facc15" strokeWidth={3} />
//           </LineChart>
//         </ResponsiveContainer>
//       </motion.div>

//       {/* Export Button */}
//       <div className="text-center mt-8">
//         <button
//           onClick={exportCSV}
//           className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg"
//         >
//           📥 Export Analytics CSV
//         </button>
//       </div>
//     </section>
//   );
// }


//  ab isme data anyalctics aur live kisne table book kri hai wo bhi deikhega // aur yeh main hai mongodb k saath connect hoga livd
// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
//   LineChart, Line, CartesianGrid
// } from "recharts";

// export default function ReservationsDashboard() {
//   const [stats, setStats] = useState<any>(null);
//   const [reservations, setReservations] = useState<any[]>([]);

//   useEffect(() => {
//     // Fetch analytics
//     fetch("/api/reservation/summary")
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) setStats(data.stats);
//       });

//     // Fetch reservations list
//     fetch("/api/reservation")
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) setReservations(data.reservations);
//       });
//   }, []);

//   if (!stats) {
//     return <p className="text-center text-gray-400">Loading dashboard...</p>;
//   }

//   return (
//     <section className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
//       <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400">
//         📊 Cafe Analytics & Reservations
//       </h1>

//       {/* Stats Cards */}
//       <div className="grid md:grid-cols-4 gap-6 mb-10">
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Total Reservations</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.totalReservations}</p>
//         </div>
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Unique Customers</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.totalCustomers}</p>
//         </div>
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Revenue</h2>
//           <p className="text-2xl font-bold text-yellow-400">₹{stats.revenue}</p>
//         </div>
//         <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Top Item</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.topItem}</p>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-8 mb-12">
//         {/* Bar Chart */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg"
//         >
//           <h2 className="mb-4 font-semibold text-yellow-400">📅 Weekly Reservations Trend</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={stats.trend}>
//               <XAxis dataKey="_id" stroke="#fff" />
//               <YAxis stroke="#fff" />
//               <Tooltip />
//               <Bar dataKey="reservations" fill="#facc15" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Line Chart - Revenue */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg"
//         >
//           <h2 className="mb-4 font-semibold text-yellow-400">💰 Revenue Growth</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={reservations.map(r => ({
//               date: new Date(r.date).toLocaleDateString(),
//               revenue: r.revenue
//             }))}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#555" />
//               <XAxis dataKey="date" stroke="#fff" />
//               <YAxis stroke="#fff" />
//               <Tooltip />
//               <Line type="monotone" dataKey="revenue" stroke="#facc15" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>

//       {/* Reservations Table */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="overflow-x-auto rounded-xl shadow-lg bg-white/10 backdrop-blur-lg"
//       >
//         <table className="w-full text-left">
//           <thead className="bg-yellow-500 text-black">
//             <tr>
//               <th className="p-4">👤 Name</th>
//               <th className="p-4">📧 Email</th>
//               <th className="p-4">📞 Phone</th>
//               <th className="p-4">📅 Date</th>
//               <th className="p-4">⏰ Time</th>
//               <th className="p-4">👥 Guests</th>
//               <th className="p-4">💰 Revenue</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.map((res, idx) => (
//               <tr
//                 key={res._id || idx}
//                 className="border-b border-gray-700 hover:bg-gray-800 transition"
//               >
//                 <td className="p-4">{res.name}</td>
//                 <td className="p-4">{res.email}</td>
//                 <td className="p-4">{res.phone}</td>
//                 <td className="p-4">{new Date(res.date).toLocaleDateString()}</td>
//                 <td className="p-4">{res.time}</td>
//                 <td className="p-4">{res.guests}</td>
//                 <td className="p-4 text-yellow-400 font-semibold">₹{res.revenue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>
//     </section>
//   );
// }



/// ab yeh dummy wala hai liekin mongo db aur data analytics k saath
// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell, Legend
// } from "recharts";

// export default function DashboardPage() {
//   // ✅ Dummy Stats
//   const stats = {
//     totalReservations: 12,
//     totalCustomers: 8,
//     revenue: 5200,
//     topItem: "Cappuccino ☕",
//   };

//   // ✅ Dummy Reservations
//   const reservations = [
//     { id: 1, name: "Amit", email: "amit@example.com", phone: "9876543210", date: "2025-09-01", time: "7:00 PM", guests: 2 },
//     { id: 2, name: "Priya", email: "priya@example.com", phone: "9123456780", date: "2025-09-02", time: "8:00 PM", guests: 4 },
//     { id: 3, name: "Ravi", email: "ravi@example.com", phone: "9988776655", date: "2025-09-03", time: "6:30 PM", guests: 3 },
//   ];

//   // ✅ Dummy Weekly Trend
//   const reservationsTrend = [
//     { day: "Mon", reservations: 5 },
//     { day: "Tue", reservations: 8 },
//     { day: "Wed", reservations: 12 },
//     { day: "Thu", reservations: 6 },
//     { day: "Fri", reservations: 10 },
//     { day: "Sat", reservations: 15 },
//     { day: "Sun", reservations: 7 },
//   ];

//   // ✅ Dummy Top Items
//   const topItems = [
//     { name: "Cappuccino", value: 12 },
//     { name: "Cold Brew", value: 7 },
//     { name: "Latte", value: 9 },
//     { name: "Veg Burger", value: 5 },
//   ];

//   const COLORS = ["#facc15", "#ef4444", "#3b82f6", "#22c55e"];

//   return (
//     <section className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
//       <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-400 drop-shadow-md">
//         📊 Cafe Analytics Dashboard
//       </h1>

//       {/* Stats Cards */}
//       <div className="grid md:grid-cols-4 gap-6 mb-10">
//         <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Total Reservations</h2>
//           <p className="text-3xl font-bold text-yellow-400">{stats.totalReservations}</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Unique Customers</h2>
//           <p className="text-3xl font-bold text-yellow-400">{stats.totalCustomers}</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Revenue</h2>
//           <p className="text-3xl font-bold text-yellow-400">₹{stats.revenue}</p>
//         </motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
//           <h2 className="text-lg font-semibold">Top Item</h2>
//           <p className="text-2xl font-bold text-yellow-400">{stats.topItem}</p>
//         </motion.div>
//       </div>

//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-8 mb-12">
//         <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-800 rounded-xl shadow-lg">
//           <h3 className="text-lg font-semibold mb-4">📅 Weekly Reservations Trend</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={reservationsTrend}>
//               <XAxis dataKey="day" stroke="#ccc" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="reservations" fill="#facc15" />
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-800 rounded-xl shadow-lg">
//           <h3 className="text-lg font-semibold mb-4">🔥 Top Ordered Items</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={topItems} dataKey="value" nameKey="name" outerRadius={90} label>
//                 {topItems.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>

//       {/* Reservation Table */}
//       <motion.div whileHover={{ scale: 1.01 }} className="overflow-x-auto rounded-xl shadow-lg bg-gray-800">
//         <h3 className="text-lg font-semibold p-4">📋 Recent Reservations</h3>
//         <table className="w-full border-collapse text-left">
//           <thead className="bg-yellow-500 text-black">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Phone</th>
//               <th className="p-3">Date</th>
//               <th className="p-3">Time</th>
//               <th className="p-3">Guests</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.map((res) => (
//               <tr key={res.id} className="hover:bg-gray-700 transition">
//                 <td className="p-3">{res.name}</td>
//                 <td className="p-3">{res.email}</td>
//                 <td className="p-3">{res.phone}</td>
//                 <td className="p-3">{res.date}</td>
//                 <td className="p-3">{res.time}</td>
//                 <td className="p-3 font-bold text-yellow-400">{res.guests}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>
//     </section>
//   );
// }


"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

export default function DashboardPage() {
  // ✅ Dummy Stats
  const stats = {
    totalReservations: 12,
    totalCustomers: 8,
    revenue: 5200,
    topItem: "Cappuccino ☕",
  };

  // ✅ Dummy Reservations
  const [reservations, setReservations] = useState<any[]>([
    { id: 1, name: "Amit", email: "amit@example.com", phone: "9876543210", date: "2025-09-01", time: "7:00 PM", guests: 2 },
    { id: 2, name: "Priya", email: "priya@example.com", phone: "9123456780", date: "2025-09-02", time: "8:00 PM", guests: 4 },
    { id: 3, name: "Ravi", email: "ravi@example.com", phone: "9988776655", date: "2025-09-03", time: "6:30 PM", guests: 3 },
  ]);

  // ✅ Dummy Weekly Trend
  const reservationsTrend = [
    { day: "Mon", reservations: 5 },
    { day: "Tue", reservations: 8 },
    { day: "Wed", reservations: 12 },
    { day: "Thu", reservations: 6 },
    { day: "Fri", reservations: 10 },
    { day: "Sat", reservations: 15 },
    { day: "Sun", reservations: 7 },
  ];

  // ✅ Dummy Top Items
  const topItems = [
    { name: "Cappuccino", value: 12 },
    { name: "Cold Brew", value: 7 },
    { name: "Latte", value: 9 },
    { name: "Veg Burger", value: 5 },
  ];

  const COLORS = ["#facc15", "#ef4444", "#3b82f6", "#22c55e"];

  // ✅ CSV Export
  const exportCSV = () => {
    const headers = ["Name,Email,Phone,Date,Time,Guests"];
    const rows = reservations.map(
      (r) => `${r.name},${r.email},${r.phone},${r.date},${r.time},${r.guests}`
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "reservations.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Delete Reservation (dummy frontend delete)
  const deleteReservation = (id: number) => {
    setReservations(reservations.filter((r) => r.id !== id));
  };

  return (
    <section className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-400 drop-shadow-md">
        📊 Cafe Analytics Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold">Total Reservations</h2>
          <p className="text-3xl font-bold text-yellow-400">{stats.totalReservations}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold">Unique Customers</h2>
          <p className="text-3xl font-bold text-yellow-400">{stats.totalCustomers}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold text-yellow-400">₹{stats.revenue}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
          <h2 className="text-lg font-semibold">Top Item</h2>
          <p className="text-2xl font-bold text-yellow-400">{stats.topItem}</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">📅 Weekly Reservations Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={reservationsTrend}>
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reservations" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">🔥 Top Ordered Items</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={topItems} dataKey="value" nameKey="name" outerRadius={90} label>
                {topItems.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Reservation Table + Buttons */}
      <motion.div whileHover={{ scale: 1.01 }} className="overflow-x-auto rounded-xl shadow-lg bg-gray-800">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-lg font-semibold">📋 Recent Reservations</h3>
          <button
            onClick={exportCSV}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold shadow"
          >
            ⬇ Export CSV
          </button>
        </div>

        <table className="w-full border-collapse text-left">
          <thead className="bg-yellow-500 text-black">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Guests</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id} className="hover:bg-gray-700 transition">
                <td className="p-3">{res.name}</td>
                <td className="p-3">{res.email}</td>
                <td className="p-3">{res.phone}</td>
                <td className="p-3">{res.date}</td>
                <td className="p-3">{res.time}</td>
                <td className="p-3 font-bold text-yellow-400">{res.guests}</td>
                <td className="p-3">
                  <button
                    onClick={() => deleteReservation(res.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm shadow"
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
