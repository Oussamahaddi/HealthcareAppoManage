export * from "./SuccurcalModel.js";
export * from "./ServiceModel.js";
export * from "./UserModel.js"

import ClientModel from "./ClientModel.js";
import UserModel from "./UserModel.js";


UserModel.belongsTo(ClientModel, {
    foreignKey: "actor_id"
});
ClientModel.hasMany(UserModel, {
    foreignKey : "actor_id",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});