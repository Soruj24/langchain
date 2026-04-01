import type { Request, Response } from "express";
import { ask } from "../services/aiService.js";

export async function postChat(req: Request, res: Response) {
  const { message } = req.body ?? {};
  console.log(message);
  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "message is required" });
    return;
  }
  try {
    const reply = await ask(message);
    res.json({ message: reply });
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "internal_error" });
  }
}
