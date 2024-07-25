import { Router } from 'express';
import {
  getAllUsersController,
  getUserByIdController,
  registerUserController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middleware/validateBody.js';
import { registerUser } from '../services/auth.js';
import { registerUserSchema } from '../validation/auth.js';

const authRouter = Router();

authRouter.get('/users', ctrlWrapper(getAllUsersController));

authRouter.get('/users/:userId', ctrlWrapper(getUserByIdController));

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default authRouter;
