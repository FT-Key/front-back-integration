import { useEffect, useState } from "react";

const API = "http://localhost:4000/api/products";

export default function ProductsFetch() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    imgUrl: "",
  });

  const loadProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    loadProducts();
  };

  return (
    <>
      <form onSubmit={addProduct}>
        <input placeholder="Nombre" onChange={e => setForm({...form, name: e.target.value})} />
        <input type="number" placeholder="Precio" onChange={e => setForm({...form, price: e.target.value})} />
        <input type="number" placeholder="Stock" onChange={e => setForm({...form, stock: e.target.value})} />
        <input placeholder="Imagen URL" onChange={e => setForm({...form, imgUrl: e.target.value})} />
        <button>Agregar</button>
      </form>

      <ul>
        {products.map(p => (
          <li key={p._id}>
            <img src={p.imgUrl} width="80" />
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </>
  );
}
