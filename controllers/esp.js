import moment from "moment";
import userModel from "../models/user.js";
import { users } from "./user.js";

const postTimeESP = async (req, res) => {
  //console.log(moment(req.body.alarm1).utcOffset('+0700'));

  await userModel.findOneAndUpdate(
    { ESPCODE: req.body.ESPCODE },
    {
      "alarm.monday.morning.time": new Date(2023, 2, 16, req.body.alarm1_hour, req.body.alarm1_minute),
      "alarm.monday.afternoon.time": new Date(2023, 2, 16, req.body.alarm2_hour, req.body.alarm2_minute),
      "alarm.monday.evening.time": new Date(2023, 2, 16, req.body.alarm3_hour, req.body.alarm3_minute),
      "alarm.monday.morning.isNotify": req.body.checked1,
      "alarm.monday.afternoon.isNotify": req.body.checked2,
      "alarm.monday.evening.isNotify": req.body.checked3,
    }
  );

  //Mỗi lần post cập nhật lại mảng users
  for (let i = 0; i < users.length; i++) {
    if (users[i].ESPCODE == req.body.ESPCODE) {
      users[i].alarm.monday.morning.time = new Date(2023, 2, 16, req.body.alarm1_hour, req.body.alarm1_minute);
      users[i].alarm.monday.afternoon.time = new Date(2023, 2, 16, req.body.alarm2_hour, req.body.alarm2_minute);
      users[i].alarm.monday.evening.time = new Date(2023, 2, 16, req.body.alarm3_hour, req.body.alarm3_minute);
      users[i].alarm.monday.morning.isNotify = req.body.checked1;
      users[i].alarm.monday.afternoon.isNotify = req.body.checked2;
      users[i].alarm.monday.evening.isNotify = req.body.checked3;
    }
  }

  console.log("esp post alarm");
};

const getTimeESP = async (req, res) => {
  let doc = await userModel.findOne({ ESPCODE: req.query.ESPCODE });

  console.log("esp get alarm");

  if (doc != null) {
    res.json({
      alarm1_hour: doc.alarm.monday.morning.time.getHours(),
      alarm1_minute: doc.alarm.monday.morning.time.getMinutes(),
      alarm2_hour: doc.alarm.monday.afternoon.time.getHours(),
      alarm2_minute: doc.alarm.monday.afternoon.time.getMinutes(),
      alarm3_hour: doc.alarm.monday.evening.time.getHours(),
      alarm3_minute: doc.alarm.monday.evening.time.getMinutes(),
      checked1: doc.alarm.monday.morning.isNotify,
      checked2: doc.alarm.monday.afternoon.isNotify,
      checked3: doc.alarm.monday.evening.isNotify,

      //Server không nên gửi trạng thái isTook cho esp, chỉ có esp có quyền gửi isTook cho server
      // isTook1: doc.alarm.monday.morning.isTook,
      // isTook2: doc.alarm.monday.afternoon.isTook,
      // isTook3: doc.alarm.monday.evening.isTook
    });
  }
};

const postTookESP = async (req, res) => {
    await userModel.findOneAndUpdate(
        { ESPCODE: req.body.ESPCODE },
        {
          "alarm.monday.morning.isTook": req.body.isTook1,
          "alarm.monday.afternoon.isTook": req.body.isTook2,
          "alarm.monday.evening.isTook": req.body.isTook3
        }
      );

      for (let i = 0; i < users.length; i++) {
        if (users[i].ESPCODE == req.body.ESPCODE) {
          users[i].alarm.monday.morning.isTook = req.body.isTook1;
          users[i].alarm.monday.afternoon.isTook = req.body.isTook2;
          users[i].alarm.monday.evening.isTook = req.body.isTook3;
        }
      }

      console.log("esp post took");
}

const postIsNotifyESP = async (req, res) => {
  await userModel.findOneAndUpdate(
    { ESPCODE: req.body.ESPCODE },
    {
      "alarm.monday.morning.isNotify": req.body.checked1,
      "alarm.monday.afternoon.isNotify": req.body.checked2,
      "alarm.monday.evening.isNotify": req.body.checked3
    }
  );

  for (let i = 0; i < users.length; i++) {
    if (users[i].ESPCODE == req.body.ESPCODE) {
      users[i].alarm.monday.morning.isNotify = req.body.checked1;
      users[i].alarm.monday.afternoon.isNotify = req.body.checked2;
      users[i].alarm.monday.evening.isNotify = req.body.checked3;
    }
  }

  console.log("esp post isNotify");
}

export { postTimeESP, getTimeESP, postTookESP, postIsNotifyESP };
