import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller";

const router = express.Router();

router.get("/:id",protectRoute,getMessage)
router.post("send/:id",protectRoute,sendMessage)

export default router;