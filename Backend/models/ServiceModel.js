import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ExigenceServiceModel from "./ExigenceServiceModel.js";

const ServiceModel = sequelize.define("Service", {
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
ServiceModel.hasMany(ExigenceServiceModel);
ExigenceServiceModel.belongsTo(ServiceModel);

ServiceModel.beforeCreate(async (service, options) => {
    console.log('test');
    const titleCheckQuery = {
        where: {
            title: service.title
        }
    };
    const serviceExistes = await ServiceModel.findOne(titleCheckQuery);

    if (serviceExistes) {
        throw new Error("Service already exist");
    }
});

export default ServiceModel;
