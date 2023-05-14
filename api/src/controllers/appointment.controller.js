import { Op } from "sequelize";
import { Appointment } from "../models/appointment.js"
import { Price } from "../models/price.js";
import { Settings } from "../models/settings.js";

export const createAppointment = async (req, res) => {
    const { date, time, dni } = req.body;
    const currentDate = new Date();
    let discount = false;
    try {
        /* Busco la ultima reserva con [Op.lte] al día de hoy */
        const lastAppointment = await Appointment.findAll({
            limit: 1,
            where: {
                UserDni: dni,
                date: { [Op.lte]: currentDate }
            },
            order: [['createdAt', 'DESC']]
        });
        if (lastAppointment.length === 0) {
            discount = false;
        } else {
            const settings = await Settings.findByPk(1);
            const { promoDays, promoActive } = settings;
            const differenceDates = (new Date(date).getTime() - new Date(lastAppointment[0].date).getTime()) / 86400000; //Calculo en X días
            discount = promoActive && differenceDates <= promoDays // Si las promociones están activadas y es menor a X días se aplica el descuento
        }
        const currentPrice = await Price.findOne({
            limit: 1,
            order: [['dateFrom', 'DESC']]
        })
        
        const newAppointment = await Appointment.create({
            date,
            time,
            discount,
            UserDni: dni,
            price: discount ? currentPrice.discount : currentPrice.price,
            created: true
        });
        res.json(newAppointment);
    } catch (err) {
        res.status(500).json({ ...err, created: false })
    }
}

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll()
        res.json(appointments)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await Appointment.findByPk(id)
        if (!appointment) return res.status(404)
        res.json(appointment)
    } catch (err) {
        res.status(500).json({ error: true })
    }
}

export const updateAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await Appointment.findByPk(id)
        appointment.set(req.body);
        await appointment.save();
        res.json(appointment)
    } catch (err) {
        res.send(500).json(err)
    }
}

export const deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        await Appointment.destroy({
            where: { id }
        })
        res.sendStatus(204)
    } catch (err) {
        res.send(500).json(err)
    }
}
