import { Router } from "express";
import { deleteUser, getUser, patchUser, postUser, putUser } from "../services/index.js";

const router = Router();

router
  .get("/", async (req, res) => {
    await getUser(req, res);
  })
  .post("/", async (req, res) => {
    await postUser(req, res);
  })
  .put("/:id", async (req, res) => {
    await putUser(req, res);
  })
  .patch("/:id", async (req, res) => {
    await patchUser(req, res);
  })
  .delete("/:id", async (req, res) => {
    await deleteUser(req, res);
  });

export default router;
