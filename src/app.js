import e from 'express';
import 'dotenv/config'
import { authDb, sql } from './utils/db.js';

const {PORT} = process.env

const app = e();

const start = async () => {
    await authDb
};

start()
.then(
  sql.sync().then(() => {
    app.listen(PORT, () => console.log(`app is running on PORT: ${PORT}`))
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  })
)

