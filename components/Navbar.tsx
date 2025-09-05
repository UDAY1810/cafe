// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold">☕ Hunger Lane Cafe</h1>
//         <ul className="flex gap-6">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/menu">Menu</Link></li>
//           <li><Link href="/reservation">Reservation</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//            <li><Link href="/dashboard/reservations">Dashboard</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); // 50px scroll ke baad bg change
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-yellow-500">
//           Hunger Lane
//         </Link>

//         {/* Links */}
//         <div className="space-x-6 text-white font-medium">
//           <Link href="/menu" className="hover:text-yellow-400 transition">
//             Menu
//           </Link>
//           <Link href="/reservation" className="hover:text-yellow-400 transition">
//             Reservation
//           </Link>
//           <Link href="/contact" className="hover:text-yellow-400 transition">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-yellow-500">
//           Hunger Lane
//         </Link>

//         {/* Links */}
//         <div className="space-x-6 text-white font-medium">
//           <Link href="/menu" className="hover:text-yellow-400 transition">
//             Menu
//           </Link>
//           <Link href="/reservation" className="hover:text-yellow-400 transition">
//             Reservation
//           </Link>
//           <Link href="/contact" className="hover:text-yellow-400 transition">
//             Contact
//           </Link>
//           <Link href="/about" className="hover:text-yellow-400 transition">
//             About
//           </Link>
//           <Link href="/dashboard" className="hover:text-yellow-400 transition">
//             Dashboard
//           </Link>
          
//         </div>
//       </div>
//     </nav>
//   );
// }

// agr khuch glt ho to reset to basic
// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white bg-black/30 backdrop-blur-md">
//   <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//     <a href="/" className="text-2xl font-bold text-yellow-400">Hunger Lane</a>
//     <div className="space-x-6">
//       <a href="/menu" className="hover:text-yellow-400">Menu</a>
//       <a href="/reservation" className="hover:text-yellow-400">Reservation</a>
//       <a href="/contact" className="hover:text-yellow-400">Contact</a>
//       <a href="/about" className="hover:text-yellow-400">About</a>
//       <a href="/dashboard" className="hover:text-yellow-400">Dashboard</a>
//     </div>
//   </div>
// </nav>

//   );
// }



"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Hunger Lane
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 text-white font-medium">
          <Link href="/menu" className="hover:text-yellow-400 transition">
            Menu
          </Link>
          <Link href="/reservation" className="hover:text-yellow-400 transition">
            Reservation
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/dashboard/reservations" className="hover:text-yellow-400 transition">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}







