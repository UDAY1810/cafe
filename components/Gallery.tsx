export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src="/cafe1.jpeg" alt="Cafe Interior" className="rounded-lg shadow" />
      <img src="/cafe2.jpeg" alt="Coffee" className="rounded-lg shadow" />
      {/* <img src="/cafe3.jpeg" alt="Coffee" className="rounded-lg shadow" /> */}
    </div>
  );
}
