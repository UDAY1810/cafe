// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import DarkModeToggle from "@/components/DarkModeToggle";

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <main className="flex flex-col items-center justify-center min-h-screen bg-[url('/cafe11.jpeg')] bg-cover bg-center">
//         <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center">
//           Welcome to Brew Haven ☕
//         </h1>
//         <p className="mt-4 text-xl text-white text-center">
//           Your cozy neighborhood café
//         </p>
//         <DarkModeToggle />
//       </main>
//       <Footer />
//     </>
//   );
// }

// import Gallery from "@/components/Gallery";
// import Reviews from "@/components/Reviews";
// 'use client';
// import { motion } from "framer-motion";

// export default function HomePage() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section
//         className="relative h-screen bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/cafe-hero.jpeg')" }}
//       >
//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white">
//           <div>
//             {/* Title with animation */}
//             <motion.h1
//               initial={{ opacity: 0, y: -60 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="text-5xl md:text-6xl font-bold mb-4"
//             >
//               Welcome to Hunger Lane Cafe
//             </motion.h1>

//             {/* Subtitle with animation */}
//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//               className="text-lg md:text-xl mb-6"
//             >
//               Good food, great ambience – your perfect hangout spot.
//             </motion.p>

//             {/* Buttons with animation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//               className="space-x-4"
//             >
//               <a
//                 href="/menu"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition"
//               >
//                 🍴 Explore Menu
//               </a>
//               <a
//                 href="/reservation"
//                 className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold transition"
//               >
//                 📅 Book a Table
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-16 px-6 text-center bg-gray-100 dark:bg-gray-900">
//         <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition">
//             <img
//               src="/images/food.jpeg"
//               className="h-40 w-full object-cover rounded mb-4"
//             />
//             <h3 className="text-xl font-semibold">Delicious Food</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Freshly prepared dishes with authentic taste.
//             </p>
//           </div>
//           <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition">
//             <img
//               src="/images/ambience.jpeg"
//               className="h-40 w-full object-cover rounded mb-4"
//             />
//             <h3 className="text-xl font-semibold">Cozy Ambience</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Perfect place to chill with friends & family.
//             </p>
//           </div>
//           <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition">
//             <img
//               src="/images/service.jpeg"
//               className="h-40 w-full object-cover rounded mb-4"
//             />
//             <h3 className="text-xl font-semibold">Great Service</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Quick and friendly staff always at your service.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";
// import { motion } from "framer-motion";

// export default function HomePage() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section
//         className="relative h-screen bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/bg.jpeg')" }}
//       >
//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white">
//           <div>
//             {/* Title with scroll animation */}
//             <motion.h1
//               initial={{ opacity: 0, y: -60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.6 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="text-5xl md:text-6xl font-bold mb-4"
//             >
//               Welcome to Hunger Lane Cafe
//             </motion.h1>

//             {/* Subtitle with scroll animation */}
//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.6 }}
//               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//               className="text-lg md:text-xl mb-6"
//             >
//               Good food, great ambience – your perfect hangout spot.
//             </motion.p>

//             {/* Buttons with scroll animation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: false, amount: 0.6 }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="space-x-4"
//             >
//               <a
//                 href="/menu"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition"
//               >
//                 🍴 Explore Menu
//               </a>
//               <a
//                 href="/reservation"
//                 className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold transition"
//               >
//                 📅 Book a Table
//               </a>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-16 px-6 text-center bg-gray-100 dark:bg-gray-900">
//         <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
//         <div className="grid gap-6 md:grid-cols-3">
//           {[
//             {
//               img: "/images/food.jpeg",
//               title: "Delicious Food",
//               desc: "Freshly prepared dishes with authentic taste.",
//             },
//             {
//               img: "/images/bg2.jpeg",
//               title: "Cozy Ambience",
//               desc: "Perfect place to chill with friends & family.",
//             },
//             {
//               img: "/images/bg.jpeg",
//               title: "Great Service",
//               desc: "Quick and friendly staff always at your service.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.4 }}
//               transition={{ duration: 0.8, delay: i * 0.3 }}
//               className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition"
//             >
//               <img
//                 src={item.img}
//                 className="h-40 w-full object-cover rounded mb-4"
//               />
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg1.jpeg')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white z-10">
          <div>
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Welcome to Hunger Lane Cafe
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl mb-6"
            >
              Good food, great ambience – your perfect hangout spot.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-x-4"
            >
              <a
                href="/menu"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition"
              >
                🍴 Explore Menu
              </a>
              <a
                href="/reservation"
                className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold transition"
              >
                📅 Book a Table
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 text-center bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              img: "/images/food.jpeg",
              title: "Delicious Food",
              desc: "Freshly prepared dishes with authentic taste.",
            },
            {
              img: "/images/bg3.jpeg",
              title: "Cozy Ambience",
              desc: "Perfect place to chill with friends & family.",
            },
            {
              img: "/images/bg.jpeg",
              title: "Great Service",
              desc: "Quick and friendly staff always at your service.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition"
            >
              <img
                src={item.img}
                className="h-40 w-full object-cover rounded mb-4"
                alt={item.title}
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

