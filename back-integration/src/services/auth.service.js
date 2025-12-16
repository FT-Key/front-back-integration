import argon2 from "argon2";
import User from "../models/User.model.js";
import { signToken } from "../utils/jwt.js";

export const registerUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("EMAIL_ALREADY_EXISTS");
  }

  const hashedPassword = await argon2.hash(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const validPassword = await argon2.verify(user.password, password);
  if (!validPassword) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const token = signToken({
    id: user._id,
    email: user.email,
    role: user.role,
  });

  return token;
};
