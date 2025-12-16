import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB();

// Puerto
const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || "development"}\n`);
});