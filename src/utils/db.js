import { Sequelize } from "sequelize";
import 'dotenv/config';

const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT} = process.env

const sql = new Sequelize(
    DB_NAME, // db name
    DB_USER,
    DB_PASS,
     {
       host: DB_HOST,
       port: DB_PORT,
       dialect: 'mysql'
     }
);

const authDb = sql.authenticate().then(
  sql.sync().then(() => {
    console.log('Conected and Created table successfully!');
 }).catch((e) => {
    throw new Error(e);
 }),
).catch((e) => {
    throw new Error(e);
});

export {sql, authDb};