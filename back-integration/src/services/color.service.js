import Color from "../models/Color.model.js";

export const getAllColors = async () => Color.find().lean();
export const getColorById = async (id) => Color.findById(id);
export const createColor = async (data) => Color.create(data);

export const updateColor = async (id, data) => {
  const color = await Color.findByIdAndUpdate(id, data, { new: true });
  if (!color) throw new Error("COLOR_NOT_FOUND");
  return color;
};

export const deleteColor = async (id) => {
  const color = await Color.findByIdAndDelete(id);
  if (!color) throw new Error("COLOR_NOT_FOUND");
};
