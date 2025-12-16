import Product from "../models/Product.model.js";

export const getAllProducts = async () => {
  return Product.find().lean();
};

export const createProduct = async (data) => {
  return Product.create(data);
};

export const updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, { new: true });
  if (!product) {
    throw new Error("PRODUCT_NOT_FOUND");
  }
  return product;
};

export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new Error("PRODUCT_NOT_FOUND");
  }
};
