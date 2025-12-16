import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import { seedLocalStorage } from "./utils/seedLocalStorage";

export default function App() {
  // Cargar datos iniciales en localStorage al montar la app
  useEffect(() => {
    seedLocalStorage();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/login">🔐 Login</Link>
        <Link to="/register">📝 Register</Link>
        <Link to="/products">🛍️ Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}