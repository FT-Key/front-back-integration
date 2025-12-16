
# Integración Frontend – Backend en Aplicaciones Web

Este repositorio tiene como objetivo **explicar y ejemplificar** tres formas comunes de integración entre el **frontend (React)** y el **backend (API REST)**, utilizadas habitualmente en el aprendizaje del desarrollo web.

La evolución presentada es **didáctica y progresiva**:
1. LocalStorage (sin backend real)
2. Fetch API (backend real, sin abstracción)
3. Axios (backend real, con cliente HTTP)

---

## 1. Integración usando LocalStorage

### ¿Qué es?
LocalStorage es un mecanismo de almacenamiento del navegador que permite guardar datos en formato clave–valor.

### Características
- No hay comunicación con un servidor
- Los datos persisten en el navegador
- Ideal para **simulaciones** y **primeros pasos**

### Flujo
Frontend → LocalStorage → Frontend

### Ejemplo
```js
// Guardar
localStorage.setItem("products", JSON.stringify(products));

// Leer
const products = JSON.parse(localStorage.getItem("products"));
```

### Ventajas
- Simplicidad
- No requiere backend
- Ideal para prototipos

### Desventajas
- No hay seguridad
- No es escalable
- Datos aislados por navegador

---

## 2. Integración usando Fetch API

### ¿Qué es?
Fetch es la API nativa del navegador para realizar peticiones HTTP.

### Características
- Comunicación directa con el backend
- No requiere librerías externas
- Manejo manual de errores y headers

### Flujo
Frontend → Fetch → Backend → Base de datos

### Ejemplo
```js
const response = await fetch("http://localhost:3000/api/products");
const data = await response.json();
```

### Ventajas
- Estándar del navegador
- No dependencias externas
- Ideal para entender HTTP

### Desventajas
- Código repetitivo
- Manejo de errores más verboso
- No interceptores

---

## 3. Integración usando Axios

### ¿Qué es?
Axios es una librería HTTP que abstrae y mejora el uso de Fetch.

### Características
- Cliente HTTP reutilizable
- Interceptores
- Manejo automático de JSON

### Cliente Axios
```js
// src/api/clientAxios.js
import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default clientAxios;
```

### Uso en componentes
```js
const { data } = await clientAxios.get("/products");
```

### Ventajas
- Código más limpio
- Manejo centralizado de errores
- Ideal para proyectos reales

### Desventajas
- Dependencia externa
- Curva de aprendizaje leve

---

## Comparación general

| Método        | Backend real | Complejidad | Escalabilidad |
|--------------|--------------|-------------|---------------|
| LocalStorage | ❌ No         | Muy baja    | ❌ No         |
| Fetch        | ✅ Sí         | Media       | ⚠️ Media      |
| Axios        | ✅ Sí         | Media–Alta  | ✅ Alta       |

---

## Flujo recomendado en la materia

1. Comenzar con **LocalStorage** para entender estado y persistencia
2. Pasar a **Fetch** para comprender HTTP y APIs REST
3. Finalizar con **Axios** como solución profesional

---

## Buenas prácticas

- Nunca usar LocalStorage para datos sensibles
- Separar la lógica HTTP en servicios o clientes
- Proteger rutas críticas desde el backend
- Usar Pull Requests para integrar cambios

---

## Objetivo académico

Comprender la **evolución natural de la integración frontend–backend**, desde una solución local hasta una arquitectura profesional y escalable.

