import { DataTypes } from 'sequelize';
import { sequelize } from './../database/index.js';

export const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    discount: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});
