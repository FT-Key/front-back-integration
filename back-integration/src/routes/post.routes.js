import { Router } from "express";
import * as postController from "../controllers/post.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Públicas
router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);

// Protegidas
router.post("/", authMiddleware, postController.createPost);
router.put("/:id", authMiddleware, postController.updatePost);
router.delete("/:id", authMiddleware, postController.deletePost);

export default router;
