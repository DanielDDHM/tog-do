import e from 'express';
import userRouter from './user.js';
import workspaceRouter from './workspaces.js';
import commentsRouter from './comments.js';
import cardsRouter from './boards.js';
import boardsRouter from './boards.js';

const router = e.Router();

router.use('/user', userRouter);
router.use('/workspace', workspaceRouter);
router.use('/comments', commentsRouter)
router.use('/cards', cardsRouter)
router.use('/boards', boardsRouter)

export default router;
