import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: "Token requerido" });
  }

  try {
    const token = auth.split(" ")[1];
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};
