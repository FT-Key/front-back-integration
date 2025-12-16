import { Router } from "express";
import * as taskController from "../controllers/task.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Públicas
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);

// Protegidas
router.post("/", authMiddleware, taskController.createTask);
router.put("/:id", authMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);

export default router;
