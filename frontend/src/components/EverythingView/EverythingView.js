import React, { useState } from "react";
import List from "./ListView"; // List componentini ekliyoruz
import "./EverythingView.css";
import BoardView from "./BoardView";

const EverythingView = () => {
  const [activeView, setActiveView] = useState(""); // Başlangıçta hiçbir görünüm seçili değil

  const renderActiveView = () => {
    switch (activeView) {
      case "List":
        return <List />; // List componentini render et
      case "Board":
        return <BoardView />;
      case "Calendar":
        return <p>Content of Calendar view</p>;
      case "Gantt":
        return <p>Content of Gantt view</p>;
      case "Table":
        return <p>Content of Table view</p>;
      default:
        return <p>Please select a view to display its content</p>;
    }
  };

  return (
    <div className="everything-page">
      <h2>Everything</h2>
      <div
        className="btn-group table-header"
        style={{ display: "flex", gap: "10px" }}
      >
        <button
          className={`btn btn-primary ${activeView === "List" ? "active" : ""}`}
          onClick={() => setActiveView("List")}
        >
          List
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "Board" ? "active" : ""
          }`}
          onClick={() => setActiveView("Board")}
        >
          Board
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "Calendar" ? "active" : ""
          }`}
          onClick={() => setActiveView("Calendar")}
        >
          Calendar
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "Gantt" ? "active" : ""
          }`}
          onClick={() => setActiveView("Gantt")}
        >
          Gantt
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "Table" ? "active" : ""
          }`}
          onClick={() => setActiveView("Table")}
        >
          Table
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setActiveView("+View")}
        >
          +View
        </button>
      </div>

      <div className="content-area" style={{ marginTop: "20px" }}>
        {renderActiveView()}
      </div>
    </div>
  );
};

export default EverythingView;