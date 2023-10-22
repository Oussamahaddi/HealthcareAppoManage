import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

export const ReclamationModel = sequelize.define("reclamations", {
    id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
    description : DataTypes.STRING,
    level : DataTypes.ENUM("hard", "low")
}) 