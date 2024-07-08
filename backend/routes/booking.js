import express from 'express';
import { verifyAdmin, verifyUser } from '../Utils/veriftToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';

const router = express.Router()
 
router.post('/',verifyUser,createBooking)
router.get('/',verifyAdmin,getAllBooking)
router.get('/:id',verifyUser,getBooking)

export default router