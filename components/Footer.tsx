export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6 ">
      <div className="container mx-auto text-center text-gray-700 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Hunger Lane Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
}
