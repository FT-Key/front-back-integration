import { useState } from "react";
import clientAxios from "../api/clientAxios";

export default function LoginAxios() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await clientAxios.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      alert("Login exitoso");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button>Login</button>
    </form>
  );
}
