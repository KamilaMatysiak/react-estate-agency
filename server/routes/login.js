import express from "express";
import { login, register } from "../controlers/login.js";

const router = express.Router();

router.post('/', login);
router.post('/register', register);

export default router;