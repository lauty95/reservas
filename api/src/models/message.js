import { DataTypes } from "sequelize";
import { sequelize } from "./../database/index.js";

export const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true        
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateFrom: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})