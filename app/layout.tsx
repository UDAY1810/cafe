// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


// export const metadata = {
//   title: "Cafe Website",
//   description: "A modern cafe website built with Next.js & MongoDB",
// };

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="en">
// //       <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
// //         <Navbar />
// //         <main className="min-h-screen container mx-auto px-4">{children}</main>
// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }


// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-white dark:bg-black">
//         <Navbar />   {/* 👈 Navbar Added */}
//         <main className="pt-16">{children}</main> {/* navbar ke niche space */}
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cafe Website",
  description: "A modern cafe website built with Next.js & MongoDB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar />
        {/* 👇 Navbar ke overlap se bachne ke liye padding */}
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export const metadata = {
//   title: "Cafe Website",
//   description: "A modern cafe website built with Next.js & MongoDB",
// };


// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
//         <Navbar />
//         <main className=" min-h-screen pt-20 ">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
