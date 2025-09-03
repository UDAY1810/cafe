"use client";
import { motion } from "framer-motion";
import { FaCoffee, FaSmile, FaUtensils } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg3.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white text-center"
          >
            About Hunger Lane Cafe
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl font-extrabold text-gray-900 dark:text-black mb-8 relative inline-block"
>
  Our Story
  <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded-full"></span>
</motion.h2>
        <p className="text-gray-700 dark:text-black-300 leading-relaxed text-lg">
          At <span className="font-semibold">Hunger Lane Cafe</span>, we believe that food is more than just taste — it’s an
          experience. Founded with a passion for delicious coffee, hearty meals, and cozy vibes, our cafe has become a
          favorite hangout spot for friends, families, and professionals. From our freshly brewed coffee to our carefully
          curated snacks, every detail is designed to give you comfort, joy, and unforgettable memories.
        </p>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {[
            { icon: <FaCoffee />, title: "Premium Coffee", desc: "Brewed from the finest beans." },
            { icon: <FaUtensils />, title: "Delicious Food", desc: "Fresh meals prepared with love." },
            { icon: <FaSmile />, title: "Cozy Ambience", desc: "Perfect place to relax & connect." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:scale-105 transition-transform"
            >
              <div className="text-5xl text-yellow-500 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-gray-900 dark:text-black mb-8 relative inline-block"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { img: "/images/chef1.jpeg", name: "Rajesh Kumar", role: "Head Chef" },
            { img: "/images/chef2.jpeg", name: "Anita Sharma", role: "Barista" },
            { img: "/images/chef3.jpeg", name: "Aman Verma", role: "Manager" },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
