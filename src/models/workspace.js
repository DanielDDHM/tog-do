import { DataTypes } from 'sequelize';
import { sql } from '../utils/db.js';

const Workspace = sql.define('Workspace', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  background_image: { type: DataTypes.STRING, allowNull: false, defaultValue: 'None' },
  board_type: { type: DataTypes.STRING, allowNull: false },
  starred: { type: DataTypes.BOOLEAN, defaultValue: false },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
});

export default Workspace;
