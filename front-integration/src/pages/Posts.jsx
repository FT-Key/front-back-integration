import { useState } from "react";

// import PostsFetch from "../components/PostsFetch";
// import PostsAxios from "../components/PostsAxios";

export default function Posts() {
  const [method, setMethod] = useState("fetch");

  return (
    <div className="page-container">
      <h2>📰 Gestión de Posts</h2>

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
              <h3>Posts con Fetch API</h3>
              <span className="method-badge fetch">Nativo JS</span>
            </div>
            <p>Listado y gestión de posts desde el backend usando Fetch.</p>

            {/* <PostsFetch /> */}
          </div>
        )}

        {method === "axios" && (
          <div className="method-info">
            <div className="method-header">
              <h3>Posts con Axios</h3>
              <span className="method-badge axios">Librería</span>
            </div>
            <p>Gestión de posts usando Axios con manejo de errores.</p>

            {/* <PostsAxios /> */}
          </div>
        )}
      </div>
    </div>
  );
}
