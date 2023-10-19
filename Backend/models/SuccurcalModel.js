import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

export const SuccurcalModel = sequelize.define("Succurcal", {
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
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

SuccurcalModel.beforeCreate(async (succurcal, options) => {
    const titleCheckQuery = {
        where: {
            title: succurcal.title
        }
    };
    const SuccurcalExistes = await SuccurcalModel.findOne(titleCheckQuery);

    if (SuccurcalExistes) {
        throw new Error("Succurcal already exist");
    }
});

