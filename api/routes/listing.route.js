import express from 'express';
import { createListing,deleteListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUsers.js';

const router = express.Router();

router.post('/create',verifyToken,createListing);
router.delete('/delete/:id',verifyToken,deleteListing);


export default router;