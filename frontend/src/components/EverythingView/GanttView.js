import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GanttView = () => {
  const [tasks, setTasks] = useState([]);

  // Görevleri API'den çekme işlemi
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get('/api/tasks');
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };
    fetchTasks();
  }, []);
  

  return (
    <div>
      <h2>Gantt Chart</h2>
      <div className="gantt-chart">
        {tasks.map((task) => (
          <div key={task._id} className="gantt-bar">
            <h3>{task.name}</h3>
            <p>Due: {task.dueDate || 'No due date'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttView;
