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

import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Welcome to Hunger Lane Cafe</h1>
      <p className="mt-4 text-lg text-gray-600">Good food, great ambience.</p>

      <div className="mt-10">
        <Gallery />
      </div>

      <div className="mt-10">
        <Reviews />
      </div>
    </section>
  );
}

