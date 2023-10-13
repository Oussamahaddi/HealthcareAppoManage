import sequelize from "./sequelize.js";

// Define your models
import { SuccurcalModel, ServicesModel } from "../models/Index.js";

// async database tables
async function recreateTables() {
    try {
        await sequelize.sync({ force: true }); // This will drop and recreate all tables
    } catch (error) {
        process.exit(1);
    }
}

recreateTables();
