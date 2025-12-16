import { useState } from "react";
import LoginLocal from "../components/LoginLocal";
import LoginFetch from "../components/LoginFetch";
import LoginAxios from "../components/LoginAxios";

export default function Login() {
  const [method, setMethod] = useState("local");

  return (
    <div className="page-container">
      <h2>🔐 Iniciar Sesión</h2>
      
      <div className="method-selector">
        <button
          className={`method-btn ${method === "local" ? "active" : ""}`}
          onClick={() => setMethod("local")}
        >
          💾 LocalStorage
        </button>
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
        {method === "local" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Login con LocalStorage</h3>
              <span className="method-badge">Sin Backend</span>
            </div>
            <p>Los datos se almacenan localmente en tu navegador. Perfecto para desarrollo sin servidor.</p>
            <LoginLocal />
          </div>
        )}

        {method === "fetch" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Login con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>Usando la API nativa del navegador para peticiones HTTP. Sin dependencias externas.</p>
            <LoginFetch />
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Login con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>Cliente HTTP con características avanzadas como interceptores y mejor manejo de errores.</p>
            <LoginAxios />
          </div>
        )}
      </div>
    </div>
  );
}