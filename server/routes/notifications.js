import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getNotifications, markAsRead } from "../controllers/notifications.js";

const router = express.Router();

router.get("/", verifyToken, getNotifications); // Fetch notifications
router.patch("/:id", verifyToken, markAsRead);  // Mark notification as read

export default router;
