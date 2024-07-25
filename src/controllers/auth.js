import createHttpError from 'http-errors';
import { getAllUsers, getUserById, registerUser } from '../services/auth.js';
import { UsersCollection } from '../db/models/user.js';

// export const findUserByEmail = (email) => UsersCollection.findOne({ email });

export const getAllUsersController = async (req, res, next) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};

export const getUserByIdController = async (req, res, next) => {
  const { userId } = req.params;
  const user = await getUserById(userId);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  res.json({
    status: 200,
    message: `Successfully found user with id ${userId}!`,
    data: user,
  });
};

// ********** registerUser Controller  *************
export const registerUserController = async (req, res, next) => {
  const userExist = await UsersCollection.findOne({ email: req.body.email });
  if (userExist) throw createHttpError(409, 'Email is in use');

  const user = await registerUser(req.body);

  res.status(201).json({
    user: { name: user.name, email: user.email },
  });
};
