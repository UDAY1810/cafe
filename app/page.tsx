// app/page.tsx
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/cafe1.jpeg')] bg-cover">
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Welcome to Brew Haven ☕
      </h1>
      <p className="mt-4 text-xl text-white">
        Your cozy neighborhood café
      </p>
    </div>
  );
}

// Optional metadata (can stay in same file)
export const metadata = {
  title: "Hunger Lane",
  description: "Best coffee in town",
};
