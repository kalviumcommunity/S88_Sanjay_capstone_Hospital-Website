import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import DoctorRoutes from "./routes/doctor.route.js"; 
import PatientRoutes from "./routes/patient.route.js";

dotenv.config(); 

const app = express();

const PORT=process.env.PORT || 4848

app.use(express.json());

app.use("/api/doctor",DoctorRoutes);

app.use("/api/patient",PatientRoutes);

app.listen(4848, () => {
    connectDB();   
    console.log("Server started at "+ PORT);    
});
