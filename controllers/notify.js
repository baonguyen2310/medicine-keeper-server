import { webPush } from "../index.js";
import { users } from "./user.js";
import userModel from "../models/user.js";

//Việc cho server tự đếm rồi tự push thông báo cho từng user là không khôn ngoan
//Kể cả lưu mảng users thay cho nhiều câu query liên tục vẫn không không ngoan
//Nên tìm cách để user tự đồng bộ giờ, sau đó service worker ở mỗi user tự đếm

const pushNotify = async () => {
  //Lấy mảng user về khi mới chạy node
  //Sau khi chạy node, mỗi lần register sẽ push vào users, posttime hoặc subscribe sẽ update users
  const docs = await userModel.find({});
  for (let i = 0; i < docs.length; i++){
    users.push(docs[i]);
  }

  let date;
  let alarm1;
  let alarm2;
  let alarm3;
  let isNotify1;
  let isNotify2;
  let isNotify3;
  setInterval(() => {
    console.log(users);
    for (let i = 0; i < users.length; i++) {
      date = new Date();
      alarm1 = new Date(users[i].alarm.monday.morning.time);
      alarm2 = new Date(users[i].alarm.monday.afternoon.time);
      alarm3 = new Date(users[i].alarm.monday.evening.time);
      isNotify1 = users[i].alarm.monday.morning.isNotify;
      isNotify2 = users[i].alarm.monday.afternoon.isNotify;
      isNotify3 = users[i].alarm.monday.evening.isNotify;
      if (
        (date.getHours() == alarm1.getHours() &&
          date.getMinutes() == alarm1.getMinutes() &&
          isNotify1 == true) ||
        (date.getHours() == alarm2.getHours() &&
          date.getMinutes() == alarm2.getMinutes() &&
          isNotify2 == true) ||
        (date.getHours() == alarm3.getHours() &&
          date.getMinutes() == alarm3.getMinutes() &&
          isNotify3 == true)
      ) {
        console.log("Đã đến giờ uống thuốc!");
        const payload = JSON.stringify({
          title: "Đã đến giờ uống thuốc!",
        });
        webPush
          .sendNotification(users[i].subscription, payload)
          .catch((err) => console.error(err));
      }
    }
  }, 60000); //Logic: phải là 60-120 vì nếu là số nhỏ hơn 60 sẽ bị thông báo 2 lần trở lên
};

const setNotify = (req, res) => {};

export { setNotify, pushNotify };
