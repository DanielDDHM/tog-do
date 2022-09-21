import { DataTypes } from "sequelize";
import { sql } from "../utils/db.js";

export const Projects = sql.define("Project", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
