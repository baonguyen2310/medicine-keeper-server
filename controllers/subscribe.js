import { webPush } from "../index.js";
import userModel from '../models/user.js';
import { users } from './user.js';

let subscription;

const subscribe = async (req, res) => {
    const data = res.locals.data;
    subscription = req.body;
    //console.log(subscription);

    await userModel.findOneAndUpdate(
        { username: data.username },
        { subscription: subscription }
    );

    //Mỗi lần subscribe là cập nhật lại mảng users
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == data.username) {
          users[i].subscription = subscription;
        }
      }

    const payload = JSON.stringify({
        title: 'User đã đăng ký nhận thông báo'
    })
    setTimeout(() => {
        webPush.sendNotification(subscription, payload)
            .then(() => {
                console.log("User đã đăng ký nhận thông báo")
            })
            .catch((err) => console.log(err));
    }, 3000);
}

export { subscribe, subscription }