import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoalForm from "./components/GoalForm";
import ProgressChart from "./components/ProgressChart";
import WeightLogForm from "./components/WeightLogForm";
import WeightHistory from "./components/WeightHistory";

function App() {
  const [goal, setGoal] = useState({
    startDate: "2025-05-01",
    goalDate: "2025-08-01",
    startWeight: 95,
    targetWeight: 80
  });
  const [actualData, setActualData] = useState([]);

  const handleGoalSubmit = (goalData) => {
    setGoal(goalData);
  };

  const addEntry = (entry) => {
    setActualData(prev => [...prev, entry]);
  };

  const deleteEntry = (index) => {
    setActualData(prev => prev.filter((_, i) => i !== index));
  };

  const generateTrendData = () => {
    if (!goal) return [];
    const { startDate, goalDate, startWeight, targetWeight } = goal;
    const start = new Date(startDate);
    const end = new Date(goalDate);
    const days = Math.round((end - start) / (1000 * 60 * 60 * 24));

    const trendData = [];
    for (let i = 0; i <= days; i += 7) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      const progress = i / days;
      const targetWeightAtDate = (startWeight - progress * (startWeight - targetWeight)).toFixed(1);
      const dateString = date.toISOString().split('T')[0];

      const actual = actualData.find(entry => entry.date === dateString);

      trendData.push({
        date: dateString,
        targetWeight: parseFloat(targetWeightAtDate),
        actualWeight: actual ? actual.weight : null,
      });
    }
    return trendData;
  };

  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Weight Loss Tracker</h1>
        <GoalForm onGoalSubmit={handleGoalSubmit} />
        <WeightLogForm onAdd={addEntry} />
        <WeightHistory entries={actualData} onDelete={deleteEntry} />
        <ProgressChart
  trendData={generateTrendData()}
  actualData={actualData}
/>
      </div>
    </Router>
  );
}

export default App;
