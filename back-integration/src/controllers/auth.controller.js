import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error.message === "EMAIL_ALREADY_EXISTS") {
      return res.status(400).json({ message: "Email ya registrado" });
    }
    res.status(500).json({ message: "Error interno" });
  }
};

export const login = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json({ token });
  } catch (error) {
    if (error.message === "INVALID_CREDENTIALS") {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    res.status(500).json({ message: "Error interno" });
  }
};

export const me = (req, res) => {
  res.json(req.user);
};
