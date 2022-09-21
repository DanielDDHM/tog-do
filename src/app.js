import e from "express";
import "dotenv/config";
import cors from "cors";
import { sql } from "./utils/db.js";
// eslint-disable-next-line no-unused-vars
import { Boards, Projects, User } from "../src/models/index.js";

const { PORT } = process.env;

const app = e();

app.use(cors());

const start = async () => {
  try {
    await sql.authenticate().then();
    await sql.sync({ alter: true }).then(() => console.log("DB HAS SYNC"));
  } catch (e) {
    throw new Error(e);
  }
};

start().then(app.listen(PORT, () => console.log(`app is running on PORT: ${PORT}`)));
