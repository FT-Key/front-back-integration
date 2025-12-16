import { useState } from "react";

// import ColorsFetch from "../components/ColorsFetch";
// import ColorsAxios from "../components/ColorsAxios";

export default function Colors() {
  const [method, setMethod] = useState("fetch");

  return (
    <div className="page-container">
      <h2>🎨 Gestión de Colores</h2>

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
              <h3>Colores con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>Listado y administración de colores desde el backend.</p>

            {/* <ColorsFetch /> */}
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Colores con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>Gestión de colores usando Axios y middlewares de auth.</p>

            {/* <ColorsAxios /> */}
          </div>
        )}
      </div>
    </div>
  );
}
