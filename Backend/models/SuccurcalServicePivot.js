import sequelize from "../config/sequelize.js";
import SuccurcalModel from "./SuccurcalModel.js";
import ServiceModel from "./ServiceModel.js";

const SuccurcalServicePivot = sequelize.define("SuccurcalServicePivot", {});
SuccurcalModel.belongsToMany(ServiceModel, {
    through: SuccurcalServicePivot
});
ServiceModel.belongsToMany(SuccurcalModel, {
    through: SuccurcalServicePivot
});

SuccurcalModel.hasMany(ServiceModel, {
    onDelete: "CASCADE"
});

ServiceModel.hasMany(SuccurcalModel, {
    onDelete: "CASCADE"
});

export default SuccurcalServicePivot;
