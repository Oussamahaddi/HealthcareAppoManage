export * from "./SuccurcalModel.js";
export * from "./ServiceModel.js";
export * from "./UserModel.js";
export * from "./AdminModel.js"


UserModel.belongsTo(ClientModel, {
    foreignKey: "actor_id"
});
ClientModel.hasMany(UserModel, {
    foreignKey : "actor_id",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});