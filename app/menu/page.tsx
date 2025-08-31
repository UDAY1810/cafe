// app/menu/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="font-semibold mt-2">₹{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
