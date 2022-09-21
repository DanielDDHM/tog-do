import e from "express";
import "dotenv/config";
import { authDb } from "./utils/db.js";
import cors from "cors";

const { PORT } = process.env;

const app = e();

app.use(cors());

const start = async () => {
  await authDb;
};

start().then(app.listen(PORT, () => console.log(`app is running on PORT: ${PORT}`)));
