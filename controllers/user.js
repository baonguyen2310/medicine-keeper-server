import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.js';

dotenv.config();
const salt = process.env.SALT;

//Dùng mảng users sẽ tránh được việc phải query liên tục vào mongodb
const users = [];

const register = async (req, res) => {
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, salt);
    const doc = new userModel({
        username: username,
        password: password
    })
    await doc.save();
    users.push(doc);
}

const login = async (req, res) => {
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, salt);
    let doc = await userModel.findOne({username: username});
    if (doc == null) {
        console.log("Wrong username");
    }
    else {
        if (password == doc.password){
            console.log("Login success");
            const accessToken = jwt.sign(
                {username: username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '600s'}
            )
            console.log({accessToken});
            res.json({accessToken});
        } else {
            console.log("Wrong password");
        }
    }
}

const updateInfo = (req, res) => {

}

const changePassword = (req, res) => {

}

const deleteAccount = (req, res) => {

}

export { register, login, updateInfo, changePassword, deleteAccount, users }