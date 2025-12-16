import { useState, useEffect } from "react";

// Funciones helper para manejar localStorage
const getProducts = () =>
  JSON.parse(localStorage.getItem("products")) || [];

const saveProducts = (products) =>
  localStorage.setItem("products", JSON.stringify(products));

const addProduct = (product) => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

const updateProduct = (id, updatedData) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedData };
    saveProducts(products);
    return products[index];
  }
  return null;
};

const deleteProduct = (id) => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  saveProducts(filtered);
  return filtered;
};

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
    setForm({ name: "", price: "", stock: "", imgUrl: "" });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleUpdate = () => {
    if (!editingProduct.name || !editingProduct.price || !editingProduct.stock) return;
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
      <h2>Gestión de Productos</h2>
      
      <div className="form-container">
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
        <button onClick={handleSubmit}>Agregar Producto</button>
      </div>

      <ul className="products-grid">
        {products.map(p => (
          <li key={p.id} className="product-card">
            <img 
              src={p.imgUrl || "https://via.placeholder.com/200"} 
              alt={p.name}
              className="product-image"
            />
            <strong className="product-name">{p.name}</strong>
            <p className="product-info">Precio: ${p.price}</p>
            <p className="product-info">Stock: {p.stock}</p>
            
            <div className="product-actions">
              <button onClick={() => handleEdit(p)} className="btn-edit">
                Editar
              </button>
              <button onClick={() => handleDelete(p.id, p.name)} className="btn-delete">
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && editingProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Editar Producto</h3>
            
            <div className="form-container">
              <input 
                placeholder="Nombre" 
                value={editingProduct.name}
                onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
              />
              <input 
                placeholder="Precio" 
                type="number" 
                value={editingProduct.price}
                onChange={e => setEditingProduct({...editingProduct, price: e.target.value})}
              />
              <input 
                placeholder="Stock" 
                type="number" 
                value={editingProduct.stock}
                onChange={e => setEditingProduct({...editingProduct, stock: e.target.value})}
              />
              <input 
                placeholder="Imagen URL" 
                value={editingProduct.imgUrl}
                onChange={e => setEditingProduct({...editingProduct, imgUrl: e.target.value})}
              />
              
              <div className="modal-actions">
                <button onClick={handleUpdate} className="btn-save">
                  Guardar Cambios
                </button>
                <button 
                  onClick={() => {
                    setShowModal(false);
                    setEditingProduct(null);
                  }}
                  className="btn-cancel"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}