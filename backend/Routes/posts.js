import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";
import { verifyToken } from "../Middleware/auth.js";

const router = express.Router();

/* Read */

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* Update */

router.patch("/:id/like", verifyToken, likePost);

export default router;