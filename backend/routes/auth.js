import express from 'express';
const router = express.Router();
import { Login, register } from '../controllers/authController.js'  

router.post('/register',register)
router.post('/login',Login)

export default router;