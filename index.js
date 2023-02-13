import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
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
    deleteAccount
} from './controllers/index.js';

dotenv.config();
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

app.get('/alarm', getTime);
app.post('/alarm', postTime);
app.post('/took', postTook);
app.post('/register', register);
app.post('/login', login);
app.post('/notify', setNotify);

mongoose.connect("mongodb+srv://khkt:khkt@cluster0.bditlhp.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected mongodb");
        pushNotify();
    })
    .catch((err) => {
        console.log(err);
    })