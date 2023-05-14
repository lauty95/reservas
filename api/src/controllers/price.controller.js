import { Price } from "../models/price.js";
import { Op } from 'sequelize';

export const createPrice = async (req, res) => {
    try {
        const newPrice = await Price.create(req.body);
        res.json({ ...newPrice, created: true });
    } catch (err) {
        res.status(500).json({ created: false })
    }
}

export const getPrice = async (_, res) => {
    const currentDate = new Date();
    try {
        const price = await Price.findOne({
            where: {
                dateFrom: {
                    [Op.gte]: currentDate
                }
            }
        })
        res.json(price);
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const getPrices = async (_, res) => {
    try {
        const price = await Price.findAll()
        res.json(price);
    } catch (err) {
        res.status(404).json({ message: err })
    }
}

export const updatePrice = async (req, res) => {
    const { price, discount } = req.body
    const currentDate = new Date();
    try {
        const priceFound = await Price.findOne({
            where: {
                dateFrom: {
                    [Op.gt]: currentDate
                }
            }
        })
        priceFound.price = price;
        priceFound.discount = discount;
        await priceFound.save();
        res.json({ ...priceFound, updated: true });
    } catch (err) {
        res.status(404).json({ message: err })
    }
}