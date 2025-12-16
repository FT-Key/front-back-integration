import { useState } from "react";
import ProductsLocal from "../components/ProductsLocal";
import ProductsFetch from "../components/ProductsFetch";
import ProductsAxios from "../components/ProductsAxios";

export default function Products() {
  const [method, setMethod] = useState("local");

  return (
    <div className="page-container">
      <h2>🛍️ Gestión de Productos</h2>
      
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
              <h3>Productos con LocalStorage</h3>
              <span className="method-badge">Sin Backend</span>
            </div>
            <p>Gestiona productos almacenados localmente en tu navegador. Operaciones CRUD sin servidor.</p>
            <ProductsLocal />
          </div>
        )}

        {method === "fetch" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Productos con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>Operaciones CRUD usando Fetch API nativa. Peticiones GET, POST, PUT y DELETE al servidor.</p>
            <ProductsFetch />
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Productos con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>Gestión avanzada de productos con Axios. Configuración centralizada y manejo de errores mejorado.</p>
            <ProductsAxios />
          </div>
        )}
      </div>
    </div>
  );
}