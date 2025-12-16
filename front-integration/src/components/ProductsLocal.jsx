import { useState, useEffect } from "react";
import { getProducts, addProduct } from "../utils/productsLocal";

export default function ProductsLocal() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    imgUrl: "",
  });

  // Cargar productos al montar el componente
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agregar producto usando la función helper
    const newProduct = addProduct(form);

    // Actualizar el estado con el nuevo producto
    setProducts([...products, newProduct]);

    // Limpiar el formulario
    setForm({ name: "", price: "", stock: "", imgUrl: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Nombre" 
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})} 
        />
        <input 
          placeholder="Precio" 
          type="number" 
          value={form.price}
          onChange={e => setForm({...form, price: e.target.value})} 
        />
        <input 
          placeholder="Stock" 
          type="number" 
          value={form.stock}
          onChange={e => setForm({...form, stock: e.target.value})} 
        />
        <input 
          placeholder="Imagen URL" 
          value={form.imgUrl}
          onChange={e => setForm({...form, imgUrl: e.target.value})} 
        />
        <button>Agregar</button>
      </form>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            <img src={p.imgUrl} width="80" alt={p.name} />
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </>
  );
}