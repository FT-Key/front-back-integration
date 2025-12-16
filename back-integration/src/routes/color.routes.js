import { Router } from "express";
import * as colorController from "../controllers/color.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Públicas
router.get("/", colorController.getColors);
router.get("/:id", colorController.getColor);

// Protegidas
router.post("/", authMiddleware, colorController.createColor);
router.put("/:id", authMiddleware, colorController.updateColor);
router.delete("/:id", authMiddleware, colorController.deleteColor);

export default router;
