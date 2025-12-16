import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import taskRoutes from "./routes/task.routes.js";
import colorRoutes from "./routes/color.routes.js";
import postRoutes from "./routes/post.routes.js";
import bannerRoutes from "./routes/banner.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({
    message: "🚀 API Integration Backend",
    status: "running",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      products: "/api/products",
      tasks: "/api/tasks",
      colors: "/api/colors",
      posts: "/api/posts",
      banners: "/api/banners"
    }
  });
});

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
// Rutas para tarea
app.use("/api/tasks", taskRoutes);
app.use("/api/colors", colorRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/banners", bannerRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    path: req.path,
    method: req.method
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Error interno del servidor",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
});

export default app;
