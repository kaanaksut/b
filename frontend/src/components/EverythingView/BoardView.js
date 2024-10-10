// src/components/BoardView.js
import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosConfig"; // axiosConfig.js'i buradan import ediyoruz
import "./BoardView.css";

const BoardView = () => {
  const [tasks, setTasks] = useState([]);

  // Veritabanından görevleri çek
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosInstance.get("/lists"); // JWT olmadan istek
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  }, []);

  // Görevleri durumlarına göre gruplandırma
  const groupedTasks = tasks.reduce((acc, task) => {
    const status = task.status || "No Status"; // Eğer görevde durum yoksa, varsayılan değer
    if (!acc[status]) acc[status] = [];
    acc[status].push(task);
    return acc;
  }, {});

  return (
    <div className="board-view-container">
      <h2>Task Board</h2>
      <div className="board-columns">
        {Object.keys(groupedTasks).map((status) => (
          <div key={status} className="board-column">
            <h3>{status}</h3>
            <div className="board-tasks">
              {groupedTasks[status].map((task) => (
                <div key={task._id} className="board-card">
                  <h4>{task.name}</h4>
                  <p>{task.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardView;
