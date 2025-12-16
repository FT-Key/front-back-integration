import { useState } from "react";
import clientAxios from "../api/clientAxios";

export default function RegisterAxios() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await clientAxios.post("/auth/register", form);
      alert("Usuario registrado");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button>Registrar</button>
    </form>
  );
}
