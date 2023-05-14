import { Router } from "express";
import {
    createUsers,
    deleteUser,
    getUser,
    getUserAppointments,
    getUsers,
    updateUser
} from "../controllers/user.controller.js";

const router = Router();

router.get('/users/', getUsers);
router.post('/users/', createUsers);
router.put('/users/:dni', updateUser);
router.delete('/users/:dni', deleteUser);
router.get('/users/:dni', getUser);
router.get('/users/appointments/:dni', getUserAppointments);

export default router;