import { Router } from "express";
import Species from "../models/Species.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const species = new Species(req.body);
    await species.save();
    res.status(201).json(species);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const species = await Species.find();
  res.json(species);
});

router.get("/:id", async (req, res) => {
  const species = await Species.findById(req.params.id);
  if (!species) return res.status(404).json({ error: "Species not found" });
  res.json(species);
});

router.put("/:id", async (req, res) => {
  const species = await Species.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(species);
});

router.delete("/:id", async (req, res) => {
  await Species.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
