import { Router } from "express";
import { deleteUser, getUser, postUser, putUser } from "../services/user";

const router = Router();

router
  .get("/", async (req, res) => {
    await getUser(req, res);
  })
  .post("/", async (req, res) => {
    await postUser(req, res);
  })
  .put("/", async (req, res) => {
    await putUser(req, res);
  })
  .delete("/", async (req, res) => {
    await deleteUser(req, res);
  });
