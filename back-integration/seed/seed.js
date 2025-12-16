import mongoose from "mongoose";
import dotenv from "dotenv";
import argon2 from "argon2";
import User from "../src/models/User.model.js";
import Product from "../src/models/Product.model.js";

// Cargar variables de entorno
dotenv.config();

const seedDatabase = async () => {
  try {
    console.log("🌱 Iniciando seed de la base de datos...");

    // Limpiar colecciones
    await User.deleteMany();
    await Product.deleteMany();
    console.log("✅ Colecciones limpiadas");

    // Usuarios con datos más realistas
    const users = [
      {
        name: "Admin User",
        email: "admin@mail.com",
        password: await argon2.hash("admin123"),
        role: "admin",
      },
      {
        name: "Juan Pérez",
        email: "juan@mail.com",
        password: await argon2.hash("123456"),
        role: "user",
      },
      {
        name: "María García",
        email: "maria@mail.com",
        password: await argon2.hash("123456"),
        role: "user",
      },
      {
        name: "Carlos López",
        email: "carlos@mail.com",
        password: await argon2.hash("123456"),
        role: "user",
      },
      {
        name: "Ana Martínez",
        email: "ana@mail.com",
        password: await argon2.hash("123456"),
        role: "user",
      },
    ];

    await User.insertMany(users);
    console.log(`✅ ${users.length} usuarios creados`);

    // Productos con datos realistas y categorías variadas
    const products = [
      // Electrónicos
      {
        name: "Laptop HP Pavilion",
        price: 899.99,
        stock: 15,
        imgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      },
      {
        name: "iPhone 15 Pro",
        price: 1299.99,
        stock: 25,
        imgUrl: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400",
      },
      {
        name: "Samsung Galaxy S24",
        price: 999.99,
        stock: 20,
        imgUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
      },
      {
        name: "AirPods Pro",
        price: 249.99,
        stock: 50,
        imgUrl: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400",
      },
      {
        name: "MacBook Air M3",
        price: 1499.99,
        stock: 12,
        imgUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      },
      
      // Gaming
      {
        name: "PlayStation 5",
        price: 499.99,
        stock: 8,
        imgUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
      },
      {
        name: "Xbox Series X",
        price: 499.99,
        stock: 10,
        imgUrl: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400",
      },
      {
        name: "Nintendo Switch OLED",
        price: 349.99,
        stock: 18,
        imgUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400",
      },
      
      // Accesorios
      {
        name: "Teclado Mecánico RGB",
        price: 129.99,
        stock: 30,
        imgUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      },
      {
        name: "Mouse Logitech MX Master 3",
        price: 99.99,
        stock: 40,
        imgUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      },
      {
        name: "Webcam Logitech C920",
        price: 79.99,
        stock: 22,
        imgUrl: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400",
      },
      {
        name: "Monitor 4K 27 pulgadas",
        price: 399.99,
        stock: 14,
        imgUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      },
      
      // Audio
      {
        name: "Sony WH-1000XM5",
        price: 349.99,
        stock: 25,
        imgUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
      },
      {
        name: "JBL Charge 5",
        price: 179.99,
        stock: 35,
        imgUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      },
      {
        name: "Bose QuietComfort 45",
        price: 329.99,
        stock: 20,
        imgUrl: "https://images.unsplash.com/photo-1577174881658-0f30157f384b?w=400",
      },
      
      // Tablets y Accesorios
      {
        name: "iPad Air 2024",
        price: 599.99,
        stock: 16,
        imgUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      },
      {
        name: "Samsung Galaxy Tab S9",
        price: 549.99,
        stock: 18,
        imgUrl: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
      },
      {
        name: "Apple Pencil 2da Gen",
        price: 129.99,
        stock: 45,
        imgUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400",
      },
      
      // Smart Home
      {
        name: "Echo Dot 5ta Gen",
        price: 49.99,
        stock: 60,
        imgUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
      },
      {
        name: "Google Nest Hub",
        price: 99.99,
        stock: 28,
        imgUrl: "https://images.unsplash.com/photo-1558089687-e28f0c7d0b98?w=400",
      },
    ];

    await Product.insertMany(products);
    console.log(`✅ ${products.length} productos creados`);

    console.log("\n🎉 Seed completado exitosamente!");
    console.log("\n📊 Resumen:");
    console.log(`   - Usuarios: ${users.length} (1 admin, ${users.length - 1} users)`);
    console.log(`   - Productos: ${products.length}`);
    console.log("\n🔑 Credenciales de prueba:");
    console.log("   Admin: admin@mail.com / admin123");
    console.log("   User:  juan@mail.com / 123456");

  } catch (error) {
    console.error("❌ Error al ejecutar seed:", error);
    throw error;
  }
};

const runSeed = async () => {
  try {
    // Conectar a MongoDB
    console.log("🔌 Conectando a MongoDB...");
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/integration");
    console.log("✅ Conectado a MongoDB");

    // Ejecutar seed
    await seedDatabase();

    // Desconectar
    await mongoose.disconnect();
    console.log("🔌 Desconectado de MongoDB");
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error en el proceso de seed:", error);
    process.exit(1);
  }
};

runSeed();