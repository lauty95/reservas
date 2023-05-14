import { DataTypes } from "sequelize";
import { sequelize } from "./../database/index.js";

export const Settings = sequelize.define('Settings', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    promoDays: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    },
    promoActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    sendMessage: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    workOnSaturday: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    workOnSunday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    workOnMonday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})