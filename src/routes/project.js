import { Router } from 'express';
import { deleteProject, getProject, postProject, putProject } from '../services/index.js';
const router = Router();

router
  .get('/', async (req, res) => {
    await getProject(req, res);
  })
  .post('/', async (req, res) => {
    await postProject(req, res);
  })
  .put('/:id', async (req, res) => {
    await putProject(req, res);
  })
  .delete('/:id', async (req, res) => {
    await deleteProject(req, res);
  });

export default router;
