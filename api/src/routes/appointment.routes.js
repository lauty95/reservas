import { Router } from "express";
import {
    getAppointment,
    updateAppointment,
    deleteAppointment,
    createAppointment,
    getAppointments
} from "../controllers/appointment.controller.js";
const router = Router();

router.get('/appointments', getAppointments);
router.post('/appointments', createAppointment);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);
router.get('/appointments/:id', getAppointment);

export default router;