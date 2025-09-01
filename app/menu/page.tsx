// app/menu/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function MenuPage() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/menu")
      .then(async (res) => {
        try {
          const data = await res.json();
          if (res.ok && data.success) {
            setItems(data.items);
          } else {
            setError(data.error || "Failed to load menu");
          }
        } catch {
          setError("Server did not return valid JSON");
        }
      })
      .catch(() => setError("Network error"));
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow">
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

