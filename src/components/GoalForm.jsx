import { useState } from "react";

export default function GoalForm({ onGoalSubmit }) {
  const [startDate, setStartDate] = useState("");
  const [goalDate, setGoalDate] = useState("");
  const [startWeight, setStartWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGoalSubmit({
      startDate,
      goalDate,
      startWeight: parseFloat(startWeight),
      targetWeight: parseFloat(targetWeight),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-xl space-y-4">
      <h2 className="text-lg font-semibold">Set Your Goal</h2>
      <div className="space-y-2">
        <label className="block">Start Date</label>
        <input type="date" className="w-full p-2 border rounded" value={startDate} onChange={e => setStartDate(e.target.value)} required />

        <label className="block">Goal Date</label>
        <input type="date" className="w-full p-2 border rounded" value={goalDate} onChange={e => setGoalDate(e.target.value)} required />

        <label className="block">Start Weight (kg)</label>
        <input type="number" className="w-full p-2 border rounded" value={startWeight} onChange={e => setStartWeight(e.target.value)} required />

        <label className="block">Target Weight (kg)</label>
        <input type="number" className="w-full p-2 border rounded" value={targetWeight} onChange={e => setTargetWeight(e.target.value)} required />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Set Goal</button>
    </form>
  );
}