import { Router } from "express";
import Explorer from "../models/Explorer.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const explorer = new Explorer(req.body);
    await explorer.save();
    res.status(201).json(explorer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const explorers = await Explorer.find();
  res.json(explorers);
});

router.get("/:id", async (req, res) => {
  const explorer = await Explorer.findById(req.params.id).populate("speciesFound");
  if (!explorer) return res.status(404).json({ error: "Explorer not found" });
  res.json(explorer);
});

router.put("/:id", async (req, res) => {
  const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(explorer);
});

router.delete("/:id", async (req, res) => {
  await Explorer.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
