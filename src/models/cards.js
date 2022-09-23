import { DataTypes } from 'sequelize';
import { sql } from '../utils/db.js';

const Cards = sql.define('Card', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  description: { type: DataTypes.STRING, allowNull: false },
  due_date: { type: DataTypes.STRING, allowNull: false },
});

export default Cards;
