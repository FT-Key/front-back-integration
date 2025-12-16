import { useState } from "react";

// import TasksFetch from "../components/TasksFetch";
// import TasksAxios from "../components/TasksAxios";

export default function Tasks() {
  const [method, setMethod] = useState("fetch");

  return (
    <div className="page-container">
      <h2>✅ Gestión de Tareas</h2>

      <div className="method-selector">
        <button
          className={`method-btn ${method === "fetch" ? "active" : ""}`}
          onClick={() => setMethod("fetch")}
        >
          🌐 Fetch API
        </button>
        <button
          className={`method-btn ${method === "axios" ? "active" : ""}`}
          onClick={() => setMethod("axios")}
        >
          ⚡ Axios
        </button>
      </div>

      <div className="method-content">
        {method === "fetch" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Tareas con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>CRUD de tareas usando Fetch API contra el backend.</p>

            {/* <TasksFetch /> */}
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Tareas con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>CRUD de tareas usando Axios y configuración centralizada.</p>

            {/* <TasksAxios /> */}
          </div>
        )}
      </div>
    </div>
  );
}
