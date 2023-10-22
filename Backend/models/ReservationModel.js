import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ROLE_LIST from "../config/Role_list.js";

export const ReservationModel = sequelize.define("reservations", {
    id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
    reservationState : {
        type : DataTypes.ENUM("accepted", "pending"),
        defaultValue: "pending"
    }
})
