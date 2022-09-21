import { DataTypes } from "sequelize";
import { sql } from "../utils/db.js";

const User = sql.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  photo: { type: DataTypes.STRING, allowNull: false },
});

export default User;
