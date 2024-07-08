import express from 'express';
import { createTour ,deleteTour,updateTour,getAllTour,getSingleTour,getTourBySearch,getFeaturedTour,getTourCount } from '../controllers/tourController.js';

import { verifyAdmin } from '../Utils/veriftToken.js';

const router = express.Router();

router.post('/',verifyAdmin,createTour)
router.put('/:id',verifyAdmin,updateTour)
router.delete('/:id',verifyAdmin,deleteTour)
router.get('/:id',getSingleTour)
router.get('/',getAllTour)
router.get('/search/getTourBySearch',getTourBySearch)
router.get('/search/getFeaturedTours',getFeaturedTour)
router.get('/search/getTourCount',getTourCount)


export default router;