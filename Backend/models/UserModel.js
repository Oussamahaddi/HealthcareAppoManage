import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import bcrypt from "bcrypt";
import ROLE_LIST from "../config/Role_list.js";

export const UserModel = sequelize.define("users", {
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
    },
    actor_id : {
        type : DataTypes.INTEGER,
    },
}, {
    scopes: {
        withoutPassword: {
            attributes: { exclude: ['password'] },
        },
        client : {
            where : {
                role : ROLE_LIST.client,
            }
        }
    }
});

// sequelize hooke
UserModel.beforeCreate(async (user, options) => {
    const emailCheckQuery = {where: {email: user.email}};
    const userExistes = await UserModel.findOne(emailCheckQuery);

    if (userExistes) {
        throw new Error("user already existes");
    } else {
        if (user.password) {
            const salt = bcrypt.genSaltSync(10); 
            user.password = bcrypt.hashSync(user.password, salt);
        }
    }
});
