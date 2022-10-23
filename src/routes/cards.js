import { Router } from 'express';
import { deleteCard, getCards, postCard, updateCard } from '../services/index.js';
const router = Router();

router
  .get('/', async (req, res) => {
    await getCards(req, res)
  })
  .post('/', async (req, res) => {
    await postCard(req, res)
  })
  .put('/:id', async (req, res) => {
    await updateCard(req, res)
  })
  .delete('/:id', async (req, res) => {
    await deleteCard(req, res)
  });

export default router;
