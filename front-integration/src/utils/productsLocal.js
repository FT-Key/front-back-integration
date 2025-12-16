export const getProducts = () =>
  JSON.parse(localStorage.getItem("products")) || [];

export const saveProducts = (products) =>
  localStorage.setItem("products", JSON.stringify(products));

export const addProduct = (product) => {
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

export const updateProduct = (id, updatedData) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedData };
    saveProducts(products);
    return products[index];
  }
  return null;
};

export const deleteProduct = (id) => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  saveProducts(filtered);
  return filtered;
};