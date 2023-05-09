import { Router } from 'express';
import * as emailController from '../controllers/emailController';


const router = Router();


router.get('/', emailController.contato);

export default router;
