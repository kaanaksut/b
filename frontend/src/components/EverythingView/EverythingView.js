import React, { useState, useEffect } from "react";
import List from "./ListView"; 
import BoardView from "./BoardView";
import CalendarView from "./CalendarView";  // Calendar bileşeni
import GanttView from "./GanttView";        // Gantt bileşeni
import TableView from "./TableView";        // Table bileşeni
import axiosInstance from "../../utils/axiosConfig"; // axios config

const EverythingView = () => {
  const [activeView, setActiveView] = useState("List"); // Başlangıçta List seçili
  const [tasks, setTasks] = useState([]); // Tüm görevleri burada saklıyoruz

  // Görevleri veritabanından çekiyoruz
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosInstance.get('/lists'); // Görevleri çekiyoruz
        setTasks(data); // Görevleri state'e kaydediyoruz
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  // Hangi görünümün seçili olduğunu kontrol ediyoruz
  const renderActiveView = () => {
    switch (activeView) {
      case "List":
        return <List tasks={tasks} />; // List componentine verileri yolluyoruz
      case "Board":
        return <BoardView tasks={tasks} />; // BoardView componentine verileri yolluyoruz
      case "Calendar":
        return <CalendarView tasks={tasks} />; // CalendarView componentine verileri yolluyoruz
      case "Gantt":
        return <GanttView tasks={tasks} />; // GanttView componentine verileri yolluyoruz
      case "Table":
        return <TableView tasks={tasks} />; // TableView componentine verileri yolluyoruz
      default:
        return <p>Please select a view to display its content</p>;
    }
  };

  return (
    <div className="everything-page">
      <h2>Everything</h2>
      <div className="btn-group table-header" style={{ display: "flex", gap: "10px" }}>
        <button className={`btn btn-primary ${activeView === "List" ? "active" : ""}`} onClick={() => setActiveView("List")}>List</button>
        <button className={`btn btn-primary ${activeView === "Board" ? "active" : ""}`} onClick={() => setActiveView("Board")}>Board</button>
        <button className={`btn btn-primary ${activeView === "Calendar" ? "active" : ""}`} onClick={() => setActiveView("Calendar")}>Calendar</button>
        <button className={`btn btn-primary ${activeView === "Gantt" ? "active" : ""}`} onClick={() => setActiveView("Gantt")}>Gantt</button>
        <button className={`btn btn-primary ${activeView === "Table" ? "active" : ""}`} onClick={() => setActiveView("Table")}>Table</button>
        <button className="btn btn-primary" onClick={() => setActiveView("+View")}>+View</button>
      </div>

      <div className="content-area" style={{ marginTop: "20px" }}>
        {renderActiveView()} {/* Seçilen görünüm render ediliyor */}
      </div>
    </div>
  );
};

export default EverythingView;
