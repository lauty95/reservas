import { Router } from "express";
import {
    getSettings,
    updateSettings
} from "../controllers/settings.controller.js";
const router = Router();

router.put('/settings', updateSettings);
router.get('/settings', getSettings);

export default router;