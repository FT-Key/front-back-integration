import { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../utils/productsLocal";

export default function ProductsLocal() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    imgUrl: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.stock) return;

    const newProduct = addProduct(form);
    setProducts([...products, newProduct]);

    setForm({
      name: "",
      price: "",
      stock: "",
      imgUrl: "",
    });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleUpdate = () => {
    if (
      !editingProduct.name ||
      !editingProduct.price ||
      !editingProduct.stock
    )
      return;

    updateProduct(editingProduct.id, editingProduct);
    setProducts(getProducts());

    setShowModal(false);
    setEditingProduct(null);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`¿Estás seguro de eliminar "${name}"?`)) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  return (
    <div className="products-container">
      <h2>Gestión de Productos (LocalStorage)</h2>

      <div className="form-container">
        <input placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Precio" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Stock" type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        <input placeholder="Imagen URL" value={form.imgUrl} onChange={(e) => setForm({ ...form, imgUrl: e.target.value })} />
        <button onClick={handleSubmit}>Agregar Producto</button>
      </div>

      <ul className="products-grid">
        {products.map((p) => (
          <li key={p.id} className="product-card">
            <img src={p.imgUrl || "https://via.placeholder.com/200"} alt={p.name} className="product-image" />
            <strong>{p.name}</strong>
            <p>Precio: ${p.price}</p>
            <p>Stock: {p.stock}</p>

            <div className="product-actions">
              <button onClick={() => handleEdit(p)}>Editar</button>
              <button onClick={() => handleDelete(p.id, p.name)}>Borrar</button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && editingProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Producto</h3>

            <input
              placeholder="Nombre" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value, })} />
            <input placeholder="Precio" type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value, })} />
            <input placeholder="Stock" type="number" value={editingProduct.stock} onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value, })} />
            <input placeholder="Imagen URL" value={editingProduct.imgUrl} onChange={(e) => setEditingProduct({ ...editingProduct, imgUrl: e.target.value, })} />

            <div className="modal-actions">
              <button onClick={handleUpdate}>Guardar</button>
              <button onClick={() => { setShowModal(false); setEditingProduct(null); }}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
