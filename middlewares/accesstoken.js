import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const accessTokenMiddleware = (req, res, next) => {
    const authorHeader = req.headers['authorization'];
    console.log(authorHeader);
    const token = authorHeader.split(' ')[1];   //Cẩn thận split thiếu dấu cách
    console.log(token);
    if (!token) res.sendStatus(401);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decode) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }    
            res.locals.data = decode;
            next();
        }
    )
}

export default accessTokenMiddleware;