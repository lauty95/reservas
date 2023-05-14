import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import appointmentRoutes from './routes/appointment.routes.js';
import settingsRoutes from './routes/settings.routes.js';
import priceRoutes from './routes/price.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(appointmentRoutes);
app.use(settingsRoutes);
app.use(priceRoutes);

export default app;