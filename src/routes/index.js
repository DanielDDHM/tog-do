import e from 'express';
import userRouter from './user.js';
import workspaceRouter from './workspaces.js';

const router = e.Router();

router.use('/user', userRouter);
router.use('/workspace', workspaceRouter);

export default router;
