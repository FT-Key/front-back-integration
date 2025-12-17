import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Tasks from "./pages/Tasks";
import Colors from "./pages/Colors";
import Posts from "./pages/Posts";
import Banners from "./pages/Banners";

import { seedLocalStorage } from "./utils/seedLocalStorage";

export default function App() {
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
        <Link to="/colors">🎨 Colors</Link>

        {/* <Link to="/tasks">✅ Tasks</Link>
      
        <Link to="/posts">📰 Posts</Link>
        <Link to="/banners">🖼️ Banners</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />

        <Route path="/tasks" element={<Tasks />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/banners" element={<Banners />} />
      </Routes>
    </>
  );
}
