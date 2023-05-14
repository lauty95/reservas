import { Settings } from "../models/settings.js";

export const getSettings = async (_, res) => {
    try {
        const settings = await Settings.findByPk(1)
        res.json(settings);
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const updateSettings = async (req, res) => {
    try {
        const settings = await Settings.findByPk(1);
        if (!settings) {
            const newSettings = await Settings.create(req.body);
            res.json({ ...newSettings, created: true });
        } else {
            settings.set(req.body);
            await settings.save();
            res.json({ ...settings, updated: true });
        }
    } catch (err) {
        res.status(404).json({ message: err })
    }
}