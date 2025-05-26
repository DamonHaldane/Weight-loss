export default function WeightHistory({ entries, onDelete }) {
  return (
    <div className="p-4 bg-white shadow rounded-xl mt-6">
      <h2 className="text-lg font-semibold mb-4">Logged Weight History</h2>
      <ul className="divide-y">
        {entries.length === 0 && <li className="py-2 text-gray-500">No entries yet.</li>}
        {entries.map((entry, idx) => (
          <li key={idx} className="flex justify-between py-2">
            <span>{entry.date} — {entry.weight} kg</span>
            <button onClick={() => onDelete(idx)} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}