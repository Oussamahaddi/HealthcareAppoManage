import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const AdminModel = sequelize.define('admin',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    first_name : DataTypes.STRING,
    last_name : DataTypes.STRING,
    email : DataTypes.STRING,
    password : DataTypes.STRING,
    profile_image : DataTypes.STRING,
    role : DataTypes.ENUM("admin")
});

export default AdminModel;