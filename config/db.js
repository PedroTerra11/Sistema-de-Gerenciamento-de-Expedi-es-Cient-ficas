import mongoose from "mongoose";
import "dotenv/config";

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
})();
