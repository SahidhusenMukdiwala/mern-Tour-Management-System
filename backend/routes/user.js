import express from 'express';
import { createUser,deleteUser,getAllUser,updateUser,getSingleUser } from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../Utils/veriftToken.js';

const router = express.Router();

router.post('/',createUser)
router.put('/:id',verifyUser,updateUser)
router.delete('/:id',verifyUser,deleteUser)
router.get('/:id',verifyUser,getSingleUser)
router.get('/',verifyAdmin,getAllUser)


export default router;