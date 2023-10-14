
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const SuccurcalModel = sequelize.define("clients", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});

export default SuccurcalModel;