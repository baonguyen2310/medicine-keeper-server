import { webPush } from "../index.js";

let subscription;

const subscribe = (req, res) => {
    subscription = req.body;
    console.log("hihi");
    console.log(subscription);
    const payload = JSON.stringify({
        title: 'Server Chi Bao Push Notification'
    })
    setTimeout(() => {
        webPush.sendNotification(subscription, payload)
            .then(() => {
                console.log("Server Push Notification Success")
            })
            .catch((err) => console.log(err));
    }, 3000);
}

export { subscribe, subscription }