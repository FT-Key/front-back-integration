import * as colorService from "../services/color.service.js";

export const getColors = async (req, res) => {
  try {
    const colors = await colorService.getAllColors();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ message: "ERROR_GET_COLORS" });
  }
};

export const getColor = async (req, res) => {
  try {
    const color = await colorService.getColorById(req.params.id);
    if (!color) {
      return res.status(404).json({ message: "COLOR_NOT_FOUND" });
    }
    res.json(color);
  } catch (error) {
    res.status(400).json({ message: "INVALID_COLOR_ID" });
  }
};

export const createColor = async (req, res) => {
  try {
    const newColor = await colorService.createColor(req.body);
    res.status(201).json(newColor);
  } catch (error) {
    res.status(400).json({ message: "ERROR_CREATE_COLOR" });
  }
};

export const updateColor = async (req, res) => {
  try {
    const updatedColor = await colorService.updateColor(
      req.params.id,
      req.body
    );
    res.json(updatedColor);
  } catch (error) {
    if (error.message === "COLOR_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_UPDATE_COLOR" });
  }
};

export const deleteColor = async (req, res) => {
  try {
    await colorService.deleteColor(req.params.id);
    res.json({ message: "COLOR_DELETED" });
  } catch (error) {
    if (error.message === "COLOR_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_DELETE_COLOR" });
  }
};
