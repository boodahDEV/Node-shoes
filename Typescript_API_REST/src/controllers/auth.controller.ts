import { Request, Response } from "express";
import User, { IUser } from "../model/user";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  res.send("SINGUP");
  //GUARDANDO UN  NUEVO USUARIO
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    pass: req.body.password,
  });
  const savedUser = await user.save();
  console.log(savedUser);
  // TOKEN 
  

};

export const signin = (req: Request, res: Response) => {
  res.send("SINGIN");
};

export const profile = (req: Request, res: Response) => {
  res.send("PROFILE");
};
