// "use client";

// import { useEffect, useState } from "react";

// export default function MenuPage() {
//   const [items, setItems] = useState<any[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("/api/menu")
//       .then(async (res) => {
//         try {
//           const data = await res.json();
//           if (res.ok && data.success) {
//             setItems(data.items);
//           } else {
//             setError(data.error || "Failed to load menu");
//           }
//         } catch {
//           setError("Server did not return valid JSON");
//         }
//       })
//       .catch(() => setError("Network error"));
//   }, []);

//   return (
//     <section className="p-8">
//       <h1 className="text-3xl font-bold mb-6">🍴 Our Menu</h1>

//       {error && <p className="text-red-600">{error}</p>}

//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {items.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold">{item.name}</h2>
//             <p className="text-gray-600 dark:text-gray-400">{item.category}</p>
//             <p className="text-lg font-bold mt-2">₹{item.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";

export default function MenuPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }, []);

  // group by category
  const grouped = items.reduce((acc: any, item: any) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">🍴 Our Menu</h1>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {grouped[category].map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>

                  {item.price && (
                    <p className="text-gray-700 dark:text-gray-300">₹{item.price}</p>
                  )}

                  {(item.halfPrice || item.fullPrice) && (
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {item.halfPrice && <p>Half: ₹{item.halfPrice}</p>}
                      {item.fullPrice && <p>Full: ₹{item.fullPrice}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
