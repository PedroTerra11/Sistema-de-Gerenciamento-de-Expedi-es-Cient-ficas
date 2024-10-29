import { Router } from "express";
import Expedition from "../models/Expedition.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const expedition = new Expedition(req.body);
    await expedition.save();
    res.status(201).json(expedition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const expeditions = await Expedition.find().populate("participants speciesFound");
  res.json(expeditions);
});

router.get("/:id", async (req, res) => {
  const expedition = await Expedition.findById(req.params.id).populate("participants speciesFound");
  if (!expedition) return res.status(404).json({ error: "Expedition not found" });
  res.json(expedition);
});

router.put("/:id", async (req, res) => {
  const expedition = await Expedition.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(expedition);
});

router.delete("/:id", async (req, res) => {
  await Expedition.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
