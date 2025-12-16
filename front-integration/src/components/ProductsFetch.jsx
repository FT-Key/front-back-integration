import { useEffect, useState } from "react";

const API = "http://localhost:4000/api/products";

export default function ProductsFetch() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", stock: "", imgUrl: "", });
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.stock) return;

    const token = localStorage.getItem("token");

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    setForm({ name: "", price: "", stock: "", imgUrl: "" });
    loadProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    if (!editingProduct.name || !editingProduct.price || !editingProduct.stock) return;

    const token = localStorage.getItem("token");

    await fetch(`${API}/${editingProduct._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editingProduct),
    });

    setShowModal(false);
    setEditingProduct(null);
    loadProducts();
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`¿Estás seguro de eliminar "${name}"?`)) return;

    const token = localStorage.getItem("token");

    await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadProducts();
  };

  return (
    <div className="products-container">
      <h2>Gestión de Productos (API)</h2>

      <div className="form-container">
        <input placeholder="Nombre" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="number" placeholder="Precio" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        <input type="number" placeholder="Stock" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} />
        <input placeholder="Imagen URL" value={form.imgUrl} onChange={e => setForm({ ...form, imgUrl: e.target.value })} />
        <button onClick={handleSubmit}>Agregar Producto</button>
      </div>

      <ul className="products-grid">
        {products.map(p => (
          <li key={p._id} className="product-card">
            <img src={p.imgUrl || "https://via.placeholder.com/200"} alt={p.name} className="product-image" />
            <strong className="product-name">{p.name}</strong>
            <p className="product-info">Precio: ${p.price}</p>
            <p className="product-info">Stock: {p.stock}</p>

            <div className="product-actions">
              <button onClick={() => handleEdit(p)} className="btn-edit">Editar</button>
              <button onClick={() => handleDelete(p._id, p.name)} className="btn-delete">Borrar</button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && editingProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Editar Producto</h3>

            <div className="form-container">
              <input placeholder="Nombre" value={editingProduct.name} onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })} />
              <input type="number" placeholder="Precio" value={editingProduct.price} onChange={e => setEditingProduct({ ...editingProduct, price: e.target.value })} />
              <input type="number" placeholder="Stock" value={editingProduct.stock} onChange={e => setEditingProduct({ ...editingProduct, stock: e.target.value })} />
              <input placeholder="Imagen URL" value={editingProduct.imgUrl} onChange={e => setEditingProduct({ ...editingProduct, imgUrl: e.target.value })} />

              <div className="modal-actions">
                <button onClick={handleUpdate} className="btn-save">Guardar Cambios</button>
                <button onClick={() => { setShowModal(false); setEditingProduct(null); }} className="btn-cancel">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}