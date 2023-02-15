import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import webPush from 'web-push';
import { 
    postTime, 
    getTime, 
    updateTime, 
    pushNotify, 
    setNotify, 
    postTook,
    register,
    login,
    updateInfo,
    changePassword,
    deleteAccount,
    subscribe,
    postTimeESP,
    getTimeESP,
    postTookESP
} from './controllers/index.js';
import accessTokenMiddleware from './middlewares/accesstoken.js';

dotenv.config();

// import bcrypt from 'bcrypt';
// bcrypt.genSalt(10).then((value) => {
//     console.log(value);
// })

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
    'mailto:test@example.com',
    publicVapidKey,
    privateVapidKey
)

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Application is listening at port ${PORT}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('SUCCESS');
})

app.get('/alarm', accessTokenMiddleware, getTime);
app.post('/alarm', accessTokenMiddleware, postTime);
app.post('/took', postTook);
app.post('/register', register);
app.post('/login', login);
app.post('/notify', setNotify);
app.post('/subscribe', accessTokenMiddleware, subscribe);

app.get('/esptime', getTimeESP);
app.post('/esptime', postTimeESP);
app.post('/esptook', postTookESP);

mongoose.connect("mongodb+srv://khkt:khkt@cluster0.bditlhp.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected mongodb");
        pushNotify();
    })
    .catch((err) => {
        console.log(err);
    })

export { webPush };