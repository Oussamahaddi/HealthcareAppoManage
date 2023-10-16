import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import {UserModel} from "./index.js";


export const AdminModel = sequelize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
});

AdminModel.belongsTo(UserModel, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
})