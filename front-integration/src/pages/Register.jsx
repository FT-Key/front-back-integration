import { useState } from "react";
import RegisterLocal from "../components/RegisterLocal";
import RegisterFetch from "../components/RegisterFetch";
import RegisterAxios from "../components/RegisterAxios";

export default function Register() {
  const [method, setMethod] = useState("local");

  return (
    <div className="page-container">
      <h2>📝 Registrarse</h2>
      
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
              <h3>Registro con LocalStorage</h3>
              <span className="method-badge">Sin Backend</span>
            </div>
            <p>Crea una cuenta que se guardará localmente en tu navegador. Ideal para prototipos rápidos.</p>
            <RegisterLocal />
          </div>
        )}

        {method === "fetch" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Registro con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>Registra tu cuenta usando la API nativa del navegador. Promesas y sintaxis moderna.</p>
            <RegisterFetch />
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Registro con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>Crea tu cuenta con el cliente HTTP de Axios. Interceptores y mejor experiencia de desarrollo.</p>
            <RegisterAxios />
          </div>
        )}
      </div>
    </div>
  );
}