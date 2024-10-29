import express from "express";
import {
    store
} from "../controllers/expeditionController.js";

const router = express.Router();

router.post("/", store);

export default router;
