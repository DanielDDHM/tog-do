import e from 'express';
import userRouter from './user.js';
import workspaceRouter from './workspaces.js';
import commentsRouter from './comments.js';
import cardsRouter from './boards.js';
import boardsRouter from './boards.js';
import projectsRouter from './project.js';

const router = e.Router();

router
  .use('/user', userRouter)
  .use('/workspace', workspaceRouter)
  .use('/comments', commentsRouter)
  .use('/cards', cardsRouter)
  .use('/boards', boardsRouter)
  .use('/project', projectsRouter);

export default router;
