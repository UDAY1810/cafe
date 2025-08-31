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
        <main className="min-h-screen container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
