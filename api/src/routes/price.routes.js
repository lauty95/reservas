import { Router } from "express";
import {
    getPrice,
    updatePrice,
    createPrice,
    getPrices
} from "../controllers/price.controller.js";
const router = Router();

router.post('/price', createPrice);
router.put('/price', updatePrice);
router.get('/price', getPrice);
router.get('/allPrices', getPrices);

export default router;