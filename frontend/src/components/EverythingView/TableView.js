// src/components/TableView.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosConfig';  // axiosInstance kullanalım

const TableView = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosInstance.get('/tasks');
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks for table view', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Table View</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>{task.describtion}</td>
              <td>{task.status || 'Not Started'}</td>
              <td>{task.dueDate || 'No due date'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
