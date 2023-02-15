import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

dotenv.config();
const salt = process.env.SALT;

//Dùng mảng users sẽ tránh được việc phải query liên tục vào mongodb
const users = [];

const register = async (req, res) => {
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, salt);
  const ESPCODE = req.body.ESPCODE;

  const doc = await userModel.findOne({
    $or: [{ username: username }, { ESPCODE: ESPCODE }],
  });

  if (doc != null) {
    console.log("username hoặc ESPCODE đã được sử dụng");
    res.sendStatus(403);
  } else {
    //Chỉ có 1 username mới và 1 ESPCODE mới thì mới có thể register
    const newUser = new userModel({
      username: username,
      password: password,
      ESPCODE: ESPCODE,
    });
    await newUser.save();
    users.push(newUser);
    res.sendStatus(200);
  }
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, salt);
  let doc = await userModel.findOne({ username: username });
  if (doc == null) {
    console.log("Wrong username");
    res.sendStatus(403);
  } else {
    if (password == doc.password) {
      console.log("Login success");
      const accessToken = jwt.sign(
        { username: username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "600s" }
      );
      console.log({ accessToken });
      res.status(200);
      res.json({ accessToken });
    } else {
      console.log("Wrong password");
      res.sendStatus(403);
    }
  }
};

const updateInfo = (req, res) => {};

const changePassword = (req, res) => {};

const deleteAccount = (req, res) => {};

export { register, login, updateInfo, changePassword, deleteAccount, users };
