import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/integration";

    console.log("🔌 Conectando a MongoDB...");

    const conn = await mongoose.connect(MONGO_URI, {
      // Opciones recomendadas para Mongoose 7+
      serverSelectionTimeoutMS: 5000, // Timeout de 5 segundos
      socketTimeoutMS: 45000, // Timeout de socket de 45 segundos
    });

    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    console.log(`📦 Base de datos: ${conn.connection.name}`);

    // Event listeners para la conexión
    mongoose.connection.on("error", (err) => {
      console.error("❌ Error de MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️  MongoDB desconectado");
    });

    // Manejo de cierre de proceso
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("\n🔌 MongoDB desconectado por cierre de aplicación");
      process.exit(0);
    });

  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1); // Salir con error
  }
};