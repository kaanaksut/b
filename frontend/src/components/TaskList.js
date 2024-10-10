import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosConfig'; // axiosConfig'i kullanıyoruz
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect ile API'den görevleri çekiyoruz
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/tasks'); // API'den görevleri alıyoruz
        setTasks(response.data); // Gelen veriyi tasks state'ine atıyoruz
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []); // useEffect sadece component yüklendiğinde çalışacak

  // Eğer görevler yükleniyorsa
  if (loading) return <p>Loading tasks...</p>;

  // Eğer hata oluştuysa
  if (error) return <p>Error: {error}</p>;

  // Görevleri ekrana render ediyoruz
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.status}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
