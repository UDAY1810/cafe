"use client";

import { useEffect, useState } from "react";

export default function ReservationsDashboard() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/reservation")
      .then(async (res) => {
        try {
          const data = await res.json();
          if (res.ok && data.success) {
            setReservations(data.reservations);
          } else {
            setError(data.error || "Failed to load reservations");
          }
        } catch {
          setError("Server did not return valid JSON");
        }
      })
      .catch(() => setError("Network error"));
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Reservation Dashboard</h1>
      {error && <p className="text-red-600">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Guests</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{res.name}</td>
                <td className="border border-gray-300 p-2">{res.email}</td>
                <td className="border border-gray-300 p-2">{res.phone}</td>
                <td className="border border-gray-300 p-2">{res.date}</td>
                <td className="border border-gray-300 p-2">{res.time}</td>
                <td className="border border-gray-300 p-2">{res.guests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
