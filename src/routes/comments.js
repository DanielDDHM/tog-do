import { Router } from 'express';
import { deleteComment, getComments, postComment, updateComment } from '../services/index.js';
const router = Router();

router
  .get('/', async (req, res) => {
    await getComments(req, res)
  })
  .post('/', async (req, res) => {
    await postComment(req, res)
  })
  .put('/:id', async (req, res) => {
    await updateComment(req, res)
  })
  .delete('/:id', async (req, res) => {
    await deleteComment(req, res)
  });

export default router;
