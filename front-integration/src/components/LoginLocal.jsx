import { useState } from "react";
import { loginUser, setLoggedUser } from "../utils/authLocal";

export default function LoginLocal() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Intentar hacer login con las credenciales
      const user = loginUser(form.email, form.password);

      // Guardar usuario logueado en localStorage
      setLoggedUser(user);

      alert("Login exitoso");
      
      // Limpiar formulario
      setForm({ email: "", password: "" });

    } catch (error) {
      // Mostrar mensaje de error
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Login</button>
    </form>
  );
}