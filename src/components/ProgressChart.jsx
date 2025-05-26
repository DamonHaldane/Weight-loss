import {
  AreaChart, Area, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from "recharts";

export default function ProgressChart({ trendData, actualData }) {
  return (
    <div className="p-4 bg-white shadow rounded-xl mt-6">
      <h2 className="text-lg font-semibold mb-4">Progress Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={trendData}>
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="targetWeight"
            stroke="#3B82F6"
            fillOpacity={1}
            fill="url(#trendFill)"
            name="Target Trend"
          />

          <Line
            type="monotone"
            data={actualData}
            dataKey="weight"
            stroke="#EF4444"
            dot={{ r: 4 }}
            name="Actual Weight"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}