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


// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function MenuPage() {
//   const [items, setItems] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("/api/menu")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success && Array.isArray(data.menu)) {
//           setItems(data.menu);
//         } else {
//           setItems([]);
//         }
//       });
//   }, []);

//   return (
//     <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:to-black">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-4">
//           🍴 Our Menu
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 text-lg">
//           Explore our freshly brewed coffees, delicious snacks, and more.
//         </p>
//       </div>

//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
//         {items.length > 0 ? (
//           items.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//             >
//               {/* Image */}
//               <div className="relative w-full h-48 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                 />
//                 <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
//                   {item.category}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-5 text-center">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
//                   {item.name}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                   {item.description || "Delicious and freshly made."}
//                 </p>
//                 <div className="flex justify-center gap-4">
//                   {item.priceHalf && (
//                     <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg text-sm text-gray-700 dark:text-gray-200">
//                       Half: ₹{item.priceHalf}
//                     </span>
//                   )}
//                   {item.priceFull && (
//                     <span className="bg-yellow-500 px-3 py-1 rounded-lg text-sm font-semibold text-black">
//                       Full: ₹{item.priceFull}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             🍽 No menu items found.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
