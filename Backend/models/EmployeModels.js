import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

export const EmployeModels = sequelize.define("Employes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName :{
        type: DataTypes.STRING,
        allowNull: false
    },
    email :{
        type: DataTypes.STRING,
        allowNull: false
    }
});
