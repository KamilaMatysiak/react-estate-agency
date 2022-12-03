import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import login from './routes/login.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/login', login);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
    .catch((error) => console.log(error.mongoose));