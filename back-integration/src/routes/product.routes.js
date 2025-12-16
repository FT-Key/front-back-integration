import { Router } from "express";
import * as controller from "../controllers/product.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", controller.getProducts);
router.post("/", authMiddleware, controller.createProduct);
router.put("/:id", authMiddleware, controller.updateProduct);
router.delete("/:id", authMiddleware, controller.deleteProduct);

export default router;
