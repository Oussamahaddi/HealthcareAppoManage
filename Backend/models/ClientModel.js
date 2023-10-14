import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const ClientModel = sequelize.define("clients", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});

export default ClientModel;