import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">☕ Hunger Lane Cafe</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/reservation">Reservation</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
           <li><Link href="/dashboard/reservations">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
}
