import { useState } from "react";
import { registerUser } from "../utils/authLocal";

export default function RegisterLocal() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Registrar nuevo usuario
      registerUser(form);

      alert("Usuario registrado exitosamente");

      // Limpiar formulario
      setForm({ name: "", email: "", password: "" });

    } catch (error) {
      // Mostrar mensaje de error (ej: email duplicado)
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Nombre" 
        value={form.name}
        onChange={e => setForm({...form, name: e.target.value})} 
      />
      <input 
        placeholder="Email" 
        type="email"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={form.password}
        onChange={e => setForm({...form, password: e.target.value})} 
      />
      <button>Registrar</button>
    </form>
  );
}