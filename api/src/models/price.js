import { DataTypes } from "sequelize";
import { sequelize } from './../database/index.js';

export const Price = sequelize.define('Price', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    dateFrom: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})