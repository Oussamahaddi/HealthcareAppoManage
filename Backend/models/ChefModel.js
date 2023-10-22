import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

export const ChefModel = sequelize.define('Chef', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

ChefModel.beforeCreate(async (chef, option) => {
  const chefExist = await ChefModel.findOne({where : {SuccurcalId : chef.SuccurcalId}});
  if (chefExist) throw new Error ("Cheff already has a Succurcal !!!");
})
