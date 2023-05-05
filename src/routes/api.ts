import { Router } from 'express';
import { Auth } from '../middlewares/auth';
import * as emailController from '../controllers/emailController';


const router = Router();

console.log('oii')

router.get('/', emailController.contato);
console.log('foi');

export default router;
