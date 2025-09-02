"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section className="py-10 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📩 Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-2 rounded border"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-2 rounded border"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="p-2 rounded border"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
