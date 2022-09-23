import { DataTypes } from 'sequelize';
import { sql } from '../utils/db.js';

const Comments = sql.define('Comment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  content: { type: DataTypes.STRING, allowNull: false },
});

export default Comments;
