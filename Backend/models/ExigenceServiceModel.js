import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const ExigenceServiceModel = sequelize.define("ExigenceService", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeInput: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    required: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default ExigenceServiceModel;
