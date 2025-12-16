import { Router } from "express";
import * as bannerController from "../controllers/banner.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Públicas
router.get("/", bannerController.getBanners);
router.get("/:id", bannerController.getBanner);

// Protegidas
router.post("/", authMiddleware, bannerController.createBanner);
router.put("/:id", authMiddleware, bannerController.updateBanner);
router.delete("/:id", authMiddleware, bannerController.deleteBanner);

export default router;
