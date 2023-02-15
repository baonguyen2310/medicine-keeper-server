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
  for (let i = 0; i < docs.length; i++) {
    users.push(docs[i]);
  }

  let date = new Date();
  let alarm1;
  let alarm2;
  let alarm3;
  let isNotify1;
  let isNotify2;
  let isNotify3;
  let isTook1 = false;
  let isTook2 = false;
  let isTook3 = false;
  let start1;
  let start2;
  let start3;
  let newStart1;
  let newStart2;
  let newStart3;
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
      isTook1 = users[i].alarm.monday.morning.isTook;
      isTook2 = users[i].alarm.monday.afternoon.isTook;
      isTook3 = users[i].alarm.monday.evening.isTook;
      if (
        date.getHours() == alarm1.getHours() &&
        date.getMinutes() == alarm1.getMinutes() &&
        isNotify1 == true
      ) {
        console.log("Đã đến giờ uống thuốc buổi sáng!");
        start1 = date; //Bắt đầu tính thời gian đến giờ uống thuốc
        newStart1 = start1;

        const payload = JSON.stringify({
          title: "Đã đến giờ uống thuốc buổi sáng!",
        });
        webPush
          .sendNotification(users[i].subscription, payload)
          .catch((err) => console.error(err));
      }

      if (
        date.getHours() == alarm2.getHours() &&
        date.getMinutes() == alarm2.getMinutes() &&
        isNotify2 == true
      ) {
        console.log("Đã đến giờ uống thuốc buổi chiều!");
        start2 = date; //Bắt đầu tính thời gian đến giờ uống thuốc
        newStart2 = start2;

        const payload = JSON.stringify({
          title: "Đã đến giờ uống thuốc buổi chiều!",
        });
        webPush
          .sendNotification(users[i].subscription, payload)
          .catch((err) => console.error(err));
      }

      if (
        date.getHours() == alarm3.getHours() &&
        date.getMinutes() == alarm3.getMinutes() &&
        isNotify3 == true
      ) {
        console.log("Đã đến giờ uống thuốc buổi tối!");
        start3 = date; //Bắt đầu tính thời gian đến giờ uống thuốc
        newStart3 = start3;

        const payload = JSON.stringify({
          title: "Đã đến giờ uống thuốc buổi tối!",
        });
        webPush
          .sendNotification(users[i].subscription, payload)
          .catch((err) => console.error(err));
      }

      if (Math.floor((date - newStart1) / 60000) >= 5 && (isTook1 == false) && (isNotify1 == true)) {
        console.log(`Đã quá ${Math.floor((date - start1) / 60000)} phút mà người bệnh chưa uống thuốc buổi sáng!`);
        newStart1 = date; //dùng newStart để cập nhật lại sau khi thông báo lần 2 để 5 phút mới thông báo thêm 1 lần

        const payload = JSON.stringify({
          title: `Đã quá ${Math.floor((date - start1) / 60000)} phút mà người bệnh chưa uống thuốc buổi sáng!`,
        });
        webPush
          .sendNotification(users[i].subscription, payload)
          .catch((err) => console.error(err));
      }

      if (Math.floor((date - newStart2) / 60000) >= 5 && (isTook2 == false) && (isNotify2 == true)) {
        console.log(`Đã quá ${Math.floor((date - start2) / 60000)} phút mà người bệnh chưa uống thuốc buổi chiều!`);
        newStart2 = date; //dùng newStart để cập nhật lại sau khi thông báo lần 2 để 5 phút mới thông báo thêm 1 lần

        const payload = JSON.stringify({
          title: `Đã quá ${Math.floor((date - start2) / 60000)} phút mà người bệnh chưa uống thuốc buổi chiều!`,
        });
        webPush
          .sendNotification(users[i].subscription, payload)
          .catch((err) => console.error(err));
      }

      if (Math.floor((date - newStart3) / 60000) >= 5 && (isTook3 == false) && (isNotify3 == true)) {
        console.log(`Đã quá ${Math.floor((date - start3) / 60000)} phút mà người bệnh chưa uống thuốc buổi tối!`);
        newStart3 = date; //dùng newStart để cập nhật lại sau khi thông báo lần 2 để 5 phút mới thông báo thêm 1 lần

        const payload = JSON.stringify({
          title: `Đã quá ${Math.floor((date - start3) / 60000)} phút mà người bệnh chưa uống thuốc buổi tối!`,
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
