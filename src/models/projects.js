import { DataTypes } from 'sequelize';
import { sql } from '../utils/db.js';

const Projects = sql.define('Project', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

export default Projects;
