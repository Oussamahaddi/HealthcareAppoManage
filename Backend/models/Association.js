import { DataTypes } from "sequelize";
import {ClientModel, UserModel} from "./index.js"

/**
 * @type one to one association 
 * @desc store association on property user inside object clientModel
 * @access public
 */

ClientModel.user = ClientModel.hasOne(UserModel, {
    foreignKey : {
        name : 'actor_id',
        type : DataTypes.INTEGER,
        allowNull : false
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
UserModel.client = UserModel.belongsTo(ClientModel, {
    foreignKey: "actor_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
});

/**
 * @type ....
 * @desc ....
 * @access public
 */