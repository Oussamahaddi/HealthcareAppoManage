import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const SuccurcalModel = sequelize.define("Succurcal", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
});


export default SuccurcalModel;