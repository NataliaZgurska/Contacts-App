import argon2 from 'argon2';
import { UsersCollection } from '../db/models/user.js';

export const getAllUsers = async () => {
  const users = await UsersCollection.find();
  return users;
};

export const getUserById = async (userId) => {
  const user = UsersCollection.findById(userId);
  return user;
};

// ********** registerUser Service  *************
export const registerUser = async (payload) => {
  const hashedPassword = await argon2.hash(payload.password, 10);

  const newUser = await UsersCollection.create({
    ...payload,
    password: hashedPassword,
  });
  return newUser;
};
