import { useState } from "react";

export default function WeightLogForm({ onAdd }) {
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !weight) return;
    onAdd({ date, weight: parseFloat(weight) });
    setDate("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-xl mt-6 space-y-4">
      <h2 className="text-lg font-semibold">Log Your Weight</h2>
      <div className="flex gap-4">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="p-2 border rounded w-1/2" required />
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="kg" className="p-2 border rounded w-1/2" required />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Entry</button>
    </form>
  );
}