import { Router } from 'express';
import { Auth } from '../middlewares/auth';
import * as emailController from '../controllers/emailController';


const router = Router();

router.get('/ping', ApiController.ping);

router.get('/', emailController.contato);

export default router;
