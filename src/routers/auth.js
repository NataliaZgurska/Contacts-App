import { Router } from 'express';
import {
  getAllUsersController,
  getUserByIdController,
  registerUserController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const authRouter = Router();

authRouter.get('/users', ctrlWrapper(getAllUsersController));

authRouter.get('/users/:userId', ctrlWrapper(getUserByIdController));

authRouter.post('/register', ctrlWrapper(registerUserController));

export default authRouter;
