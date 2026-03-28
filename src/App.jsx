import React, { useState } from "react";
import Tasks from "./Tasks";
import Timer from "./Timer";
import Stats from "./Stats";

const App = () => {
  // Global states
  const [taskList, setTaskList] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [stats, setStats] = useState({
    workMinutes: 0,
    breakMinutes: 0,
  });

  return (
    <div>
      <h1>PomodoroPulse</h1>
      <Tasks taskList={taskList} setTaskList={setTaskList} />
      <Timer
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        taskList={taskList}
        setTaskList={setTaskList}
        stats={stats}
        setStats={setStats}
      />
      <Stats stats={stats} taskList={taskList} />
    </div>
  );
};

export default App;