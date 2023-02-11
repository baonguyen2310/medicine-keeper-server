import express from 'express';
import { postTime, getTime, postTook, pushNotify } from '../controllers';

router = express.Router();

router.get('/time', getTime);

export default router;