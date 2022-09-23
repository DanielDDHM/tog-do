import { DataTypes } from 'sequelize';
import { sql } from '../utils/db.js';

const Boards = sql.define('Board', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  order: { type: DataTypes.STRING, allowNull: false },
});

export default Boards;
