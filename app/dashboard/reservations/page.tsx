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
"use client";
import { useEffect, useState } from "react";

export default function ReservationsDashboard() {
  const [reservations, setReservations] = useState<any[]>([]);

  // Fetch reservations
  const fetchReservations = async () => {
    const res = await fetch("/api/reservation");
    const data = await res.json();
    if (data.success) setReservations(data.reservations);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Handle delete
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this reservation?");
    if (!confirmDelete) return;

    const res = await fetch("/api/reservation", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    if (data.success) {
      alert("✅ Reservation deleted!");
      fetchReservations();
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  // Handle edit (for now simple alert, later you can make modal form)
  const handleEdit = (id: string) => {
    alert(`✏️ Edit functionality for reservation ID: ${id} coming soon!`);
  };

  return (
    <section className="p-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-600 dark:text-yellow-400 drop-shadow-md">
        📋 Reservation Dashboard
      </h1>

      {reservations.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          No reservations yet. Start by booking one!
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full border-collapse bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl overflow-hidden">
            <thead className="bg-yellow-500 text-black dark:bg-yellow-600">
              <tr>
                <th className="p-4 text-left">👤 Name</th>
                <th className="p-4 text-left">📧 Email</th>
                <th className="p-4 text-left">📞 Phone</th>
                <th className="p-4 text-left">📅 Date</th>
                <th className="p-4 text-left">⏰ Time</th>
                <th className="p-4 text-left">👥 Guests</th>
                <th className="p-4 text-center">⚙ Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res, idx) => (
                <tr
                  key={res._id || idx}
                  className="hover:bg-yellow-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200">
                    {res.name}
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">{res.email}</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">{res.phone}</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">
                    {new Date(res.date).toLocaleDateString()}
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700">{res.time}</td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold text-yellow-600 dark:text-yellow-400">
                    {res.guests}
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(res._id)}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(res._id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                    >
                      ❌ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

