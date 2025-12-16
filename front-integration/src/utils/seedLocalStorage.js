// Seed data para localStorage
const SEED_USERS = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@mail.com",
    password: "admin123", // En producción deberías hashear las contraseñas
    role: "admin",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Juan Pérez",
    email: "juan@mail.com",
    password: "123456",
    role: "user",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "María García",
    email: "maria@mail.com",
    password: "123456",
    role: "user",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Carlos López",
    email: "carlos@mail.com",
    password: "123456",
    role: "user",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Ana Martínez",
    email: "ana@mail.com",
    password: "123456",
    role: "user",
    createdAt: new Date().toISOString(),
  },
];

const SEED_PRODUCTS = [
  // Electrónicos
  {
    id: "1",
    name: "Laptop HP Pavilion",
    price: 899.99,
    stock: 15,
    imgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    price: 1299.99,
    stock: 25,
    imgUrl: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Samsung Galaxy S24",
    price: 999.99,
    stock: 20,
    imgUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "AirPods Pro",
    price: 249.99,
    stock: 50,
    imgUrl: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "MacBook Air M3",
    price: 1499.99,
    stock: 12,
    imgUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    createdAt: new Date().toISOString(),
  },
  
  // Gaming
  {
    id: "6",
    name: "PlayStation 5",
    price: 499.99,
    stock: 8,
    imgUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Xbox Series X",
    price: 499.99,
    stock: 10,
    imgUrl: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Nintendo Switch OLED",
    price: 349.99,
    stock: 18,
    imgUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400",
    createdAt: new Date().toISOString(),
  },
  
  // Accesorios
  {
    id: "9",
    name: "Teclado Mecánico RGB",
    price: 129.99,
    stock: 30,
    imgUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "10",
    name: "Mouse Logitech MX Master 3",
    price: 99.99,
    stock: 40,
    imgUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "11",
    name: "Webcam Logitech C920",
    price: 79.99,
    stock: 22,
    imgUrl: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "12",
    name: "Monitor 4K 27 pulgadas",
    price: 399.99,
    stock: 14,
    imgUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    createdAt: new Date().toISOString(),
  },
  
  // Audio
  {
    id: "13",
    name: "Sony WH-1000XM5",
    price: 349.99,
    stock: 25,
    imgUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "14",
    name: "JBL Charge 5",
    price: 179.99,
    stock: 35,
    imgUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "15",
    name: "Bose QuietComfort 45",
    price: 329.99,
    stock: 20,
    imgUrl: "https://images.unsplash.com/photo-1577174881658-0f30157f384b?w=400",
    createdAt: new Date().toISOString(),
  },
  
  // Tablets y Accesorios
  {
    id: "16",
    name: "iPad Air 2024",
    price: 599.99,
    stock: 16,
    imgUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "17",
    name: "Samsung Galaxy Tab S9",
    price: 549.99,
    stock: 18,
    imgUrl: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "18",
    name: "Apple Pencil 2da Gen",
    price: 129.99,
    stock: 45,
    imgUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400",
    createdAt: new Date().toISOString(),
  },
  
  // Smart Home
  {
    id: "19",
    name: "Echo Dot 5ta Gen",
    price: 49.99,
    stock: 60,
    imgUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400",
    createdAt: new Date().toISOString(),
  },
  {
    id: "20",
    name: "Google Nest Hub",
    price: 99.99,
    stock: 28,
    imgUrl: "https://images.unsplash.com/photo-1558089687-e28f0c7d0b98?w=400",
    createdAt: new Date().toISOString(),
  },
];

/**
 * Inicializa localStorage con datos de prueba si está vacío
 */
export const seedLocalStorage = () => {
  try {
    // Verificar si ya existen datos
    const existingUsers = localStorage.getItem("users");
    const existingProducts = localStorage.getItem("products");

    // Solo hacer seed si no hay datos
    if (!existingUsers) {
      localStorage.setItem("users", JSON.stringify(SEED_USERS));
      console.log("✅ Usuarios cargados en localStorage:", SEED_USERS.length);
    }

    if (!existingProducts) {
      localStorage.setItem("products", JSON.stringify(SEED_PRODUCTS));
      console.log("✅ Productos cargados en localStorage:", SEED_PRODUCTS.length);
    }

    if (!existingUsers || !existingProducts) {
      console.log("\n🎉 Seed de localStorage completado!");
      console.log("\n🔑 Credenciales de prueba:");
      console.log("   Admin: admin@mail.com / admin123");
      console.log("   User:  juan@mail.com / 123456");
    }

  } catch (error) {
    console.error("❌ Error al hacer seed de localStorage:", error);
  }
};

/**
 * Limpia localStorage y vuelve a cargar los datos iniciales
 */
export const resetLocalStorage = () => {
  localStorage.clear();
  seedLocalStorage();
  console.log("🔄 LocalStorage reseteado con datos iniciales");
};

// Exportar los datos por si se necesitan
export { SEED_USERS, SEED_PRODUCTS };