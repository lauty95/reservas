import { DataTypes } from 'sequelize';
import { sequelize } from './../database/index.js';
import { Appointment } from './appointment.js';

export const User = sequelize.define('Users', {
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

User.hasMany(Appointment, {
    foreingKey: 'appointmentId',
    sourceKey: 'dni'
});


Appointment.belongsTo(User, {
    foreingKey: 'appointmentId',
    targetId: 'dni'
}); 
