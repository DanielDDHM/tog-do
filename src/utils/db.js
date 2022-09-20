import { Sequelize } from "sequelize";
import 'dotenv/config';

const {DB_NAME, DB_USER, DB_PASS, DB_HOST} = process.env

const sql = new Sequelize(
    DB_NAME, // db name
    DB_USER,
    DB_PASS,
     {
       host: DB_HOST,
       dialect: 'mysql'
     }
);

const authDb = sql.authenticate().then(
    () => console.log('Connection has been established successfully.')
).catch((e) => {
    console.error('Unable to connect to the database: ', e);
});

export {sql, authDb};