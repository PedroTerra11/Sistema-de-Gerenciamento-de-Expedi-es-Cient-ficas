import express from "express";
import "dotenv/config";
import "./config/db.js";
import explorersRouter from "./src/routers/explorers.js";
import speciesRouter from "./src/routers/species.js";
import expeditionsRouter from "./src/routers/expeditions.js";

const app = express();

app.use(express.json());

app.use("/explorers", explorersRouter);
app.use("/species", speciesRouter);
app.use("/expeditions", expeditionsRouter);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));
