import { Router } from 'express';
import { deleteBoard, getBoards, postBoard, updateBoard } from '../services/index.js';
const router = Router();

router
  .get('/', async (req, res) => {
    await getBoards(req, res);
  })
  .post('/', async (req, res) => {
    await postBoard(req, res);
  })
  .put('/:id', async (req, res) => {
    await updateBoard(req, res);
  })
  .delete('/:id', async (req, res) => {
    await deleteBoard(req, res);
  });

export default router;
