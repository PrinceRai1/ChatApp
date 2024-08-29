import express from "express";
import protectRoute from "../middleware/protectRoute.middleware";
import { getUserForSidebar } from "../controllers/user.controller";

const router = express.Router();

router.get("/",protectRoute,getUserForSidebar)

export default router;