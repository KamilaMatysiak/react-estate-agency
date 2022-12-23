import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import login from './routes/login.js';
import estateRoutes from './routes/estates.js'
import employeeRoutes from './routes/employees.js'
import tenantRoutes from './routes/tenants.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/login', login);
app.use('/estates', estateRoutes);
app.use('/admin/employees', employeeRoutes);
app.use('/admin/tenants', tenantRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error) => console.log(error.mongoose));