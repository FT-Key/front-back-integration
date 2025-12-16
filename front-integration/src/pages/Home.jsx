import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>🚀 Sistema de Autenticación y Productos</h1>
        <p className="hero-subtitle">
          Aprende las diferencias entre LocalStorage, Fetch API y Axios
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">💾</div>
          <h3>LocalStorage</h3>
          <p>
            Almacenamiento local del navegador. Perfecto para prototipos y
            aplicaciones sin backend.
          </p>
          <ul className="feature-list">
            <li>✓ Sin servidor necesario</li>
            <li>✓ Datos persisten localmente</li>
            <li>✓ Ideal para desarrollo rápido</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Fetch API</h3>
          <p>
            API nativa del navegador para hacer peticiones HTTP. Simple y
            moderna.
          </p>
          <ul className="feature-list">
            <li>✓ Nativo de JavaScript</li>
            <li>✓ Basado en Promises</li>
            <li>✓ Sin dependencias externas</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Axios</h3>
          <p>
            Cliente HTTP basado en promesas. Más funcionalidades y mejor manejo
            de errores.
          </p>
          <ul className="feature-list">
            <li>✓ Interceptores de request/response</li>
            <li>✓ Manejo automático de JSON</li>
            <li>✓ Mejor experiencia de desarrollo</li>
          </ul>
        </div>
      </div>

      <div className="cta-section">
        <h2>¿Listo para comenzar?</h2>
        <p>
          Navega por las diferentes secciones usando el menú superior y
          selecciona el método de integración que deseas explorar.
        </p>
      </div>

      <div className="info-cards">
        <div className="info-card">
          <h4>📝 Registro</h4>
          <p>Crea una nueva cuenta con cualquiera de los tres métodos</p>
        </div>
        <div className="info-card">
          <h4>🔐 Login</h4>
          <p>Inicia sesión y obtén tu token de autenticación</p>
        </div>
        <div className="info-card">
          <h4>🛍️ Productos</h4>
          <p>Gestiona productos con operaciones CRUD completas</p>
        </div>
      </div>
    </div>
  );
}