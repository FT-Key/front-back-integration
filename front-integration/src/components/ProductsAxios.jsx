import { useEffect, useState } from "react";
import { getProducts, createProduct } from "../api/product.service";

export default function ProductsAxios() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    imgUrl: "",
  });

  const loadProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await createProduct(form);
      loadProducts();
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
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
