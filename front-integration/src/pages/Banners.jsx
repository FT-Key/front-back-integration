import { useState } from "react";

// import BannersFetch from "../components/BannersFetch";
// import BannersAxios from "../components/BannersAxios";

export default function Banners() {
  const [method, setMethod] = useState("fetch");

  return (
    <div className="page-container">
      <h2>🖼️ Gestión de Banners</h2>

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
              <h3>Banners con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>CRUD de banners con imágenes y textos usando Fetch.</p>

            {/* <BannersFetch /> */}
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Banners con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>Gestión de banners usando Axios y token de autenticación.</p>

            {/* <BannersAxios /> */}
          </div>
        )}
      </div>
    </div>
  );
}
