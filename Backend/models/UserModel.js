import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ClientModel from "./ClientModel.js";

const UserModel = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile_image: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM(
            "client",
            "entreprise",
            "chef",
            "technicien",
            "admin",
            "superadmin"
        ),
        defaultValue: "client"
    }
});

// sequelize hooke
UserModel.beforeCreate(async (user, options) => {
    const emailCheckQuery = {
        where: {
            email: user.email
        }
    };
    const userExistes = await UserModel.findOne(emailCheckQuery);

    if (userExistes) {
        throw new Error("user already existes");
    }
});

export default UserModel;
