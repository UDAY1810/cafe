"use client";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="mt-4 p-2 bg-gray-700 text-white rounded">
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
