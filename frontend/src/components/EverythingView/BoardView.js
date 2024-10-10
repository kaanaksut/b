// src/components/BoardView.js
import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosConfig"; // axiosConfig.js'i buradan import ediyoruz

const BoardView = () => {
  const [tasks, setTasks] = useState([]);

  // Veritabanından görevleri çek
  // useEffect ile listeleri API'den çekiyoruz
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data } = await axiosInstance.get("/lists"); // JWT olmadan istek
        setTasks(data);
      } catch (error) {
        console.error("Error fetching lists", error);
      }
    };
    fetchLists();
  }, []);

  return (
    <div>
      <h2>Task Board</h2>
      <div className="board">
        {tasks.map((task) => (
          <div key={task._id} className="board-card">
            <h3>{task.name}</h3>
            <p>{task.describtion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardView;
