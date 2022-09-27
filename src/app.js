import e from 'express';
import 'dotenv/config';
import cors from 'cors';
import { sql, wss } from './utils/index.js';
import router from './routes/index.js';

// eslint-disable-next-line no-unused-vars
import { Boards, Projects, User, Cards, Comments, Workspace } from '../src/models/index.js';

const { PORT } = process.env;

const app = e();

app.use(cors());
app.use(e.json());

app.use('/v1', router);

app.get('/health', (req, res) => {
  return res.send({ status: 'UP' });
});

const start = async () => {
  try {
    await sql.authenticate().then();
    await sql.sync().then(() => console.log('DB HAS SYNC')); //{ force: true } If Necessary
  } catch (e) {
    throw new Error(e);
  }
};

const srv = app.listen(PORT || 3000, () => console.log(`app is running on PORT: ${PORT || 3000}`));

start().then(wss(srv));
