import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ExigenceServiceModel from "./ExigenceServiceModel.js";

const ServiceModel = sequelize.define("Service", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
});
ServiceModel.hasMany(ExigenceServiceModel);

export default ServiceModel;
