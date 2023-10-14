
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ClientModel from "./ClientModel.js";

const UserModel = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    first_name : {
        type: DataTypes.STRING,
        require: true,
    },
    last_name : DataTypes.STRING,
    email : {
        type: DataTypes.STRING,
        require: true,
        isEmail: true,
    },
    password : DataTypes.STRING,
    profile_image : DataTypes.STRING,
    role : DataTypes.ENUM("superadmin", "admin", "client", "chef", "technicien", "entreprise"),
    actor_id : {
        type : DataTypes.INTEGER,
    }
});

export default UserModel;