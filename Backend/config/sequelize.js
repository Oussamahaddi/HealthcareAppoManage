import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.host,
    port: process.env.hostPort,
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    connectionLimit: process.env.connectionLimit
});

export default sequelize;
