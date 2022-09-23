import { Router } from 'express';
import {
  deleteWorkspace,
  getWorkspace,
  patchWorkspace,
  postWorkspace,
  putWorkspace,
} from '../services/index.js';
const router = Router();

router
  .get('/', async (req, res) => {
    await getWorkspace(req, res);
  })
  .post('/', async (req, res) => {
    await postWorkspace(req, res);
  })
  .put('/:id', async (req, res) => {
    await putWorkspace(req, res);
  })
  .patch('/:id', async (req, res) => {
    await patchWorkspace(req, res);
  })
  .delete('/:id', async (req, res) => {
    await deleteWorkspace(req, res);
  });

export default router;
