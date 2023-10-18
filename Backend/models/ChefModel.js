import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import UserModel from "./UserModel.js";

const ChefModel = sequelize.define('Chef', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});



export default ChefModel