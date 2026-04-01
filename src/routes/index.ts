import { Router } from "express";
import { postChat } from "../controllers/chatController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.post("/chat", postChat);

export default router;
