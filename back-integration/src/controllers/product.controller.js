import * as productService from "../services/product.service.js";

export const getProducts = async (_, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch {
    res.status(400).json({ message: "Datos inválidos" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    if (error.message === "PRODUCT_NOT_FOUND") {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(500).json({ message: "Error interno" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    if (error.message === "PRODUCT_NOT_FOUND") {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(500).json({ message: "Error interno" });
  }
};
