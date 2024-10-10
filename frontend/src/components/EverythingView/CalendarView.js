// src/components/CalendarView.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosConfig';  // axiosInstance kullanalım

const CalendarView = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosInstance.get('/tasks');
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks for calendar view', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Calendar View</h2>
      <div className="calendar">
        {tasks.map((task) => (
          <div key={task._id} className="calendar-task">
            <h3>{task.name}</h3>
            <p>Due: {task.dueDate || 'No due date'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
