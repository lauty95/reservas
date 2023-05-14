import { Appointment } from "../models/appointment.js";
import { User } from "../models/user.js";

export const createUsers = async (req, res) => {
    const { dni, name, phone } = req.body;
    try {
        const newUser = await User.create({ dni, name, phone });
        res.json({ ...newUser, created: true });
    } catch (err) {
        res.status(500).json({ created: false })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getUser = async (req, res) => {
    const { dni } = req.params;
    try {
        const user = await User.findByPk(dni)
        if (!user) return res.status(404)
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: true })
    }
}

export const updateUser = async (req, res) => {
    const { dni } = req.params;
    const { name, phone } = req.body;
    try {
        const user = await User.findByPk(dni)
        user.name = name;
        user.phone = phone;
        await user.save();
        res.json(user);
    } catch (err) {
        res.send(500).json(err);
    }
}

export const deleteUser = async (req, res) => {
    const { dni } = req.params;
    try {
        await User.destroy({ where: { dni } });
        res.sendStatus(204);
    } catch (err) {
        res.send(500).json(err);
    }
}

export const getUserAppointments = async (req, res) => {
    const { dni } = req.params;
    try {
        const appointment = await Appointment.findAll({ where: { UserDni: dni } });
        res.json(appointment);
    } catch (err) {
        res.send(500).json(err);
    }
}