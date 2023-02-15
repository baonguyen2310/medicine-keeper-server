import moment from "moment";
import userModel from "../models/user.js";
import { users } from "./user.js";

const postTimeESP = async (req, res) => {
  //console.log(moment(req.body.alarm1).utcOffset('+0700'));

  await userModel.findOneAndUpdate(
    { ESPCODE: req.body.ESPCODE },
    {
      "alarm.monday.morning.time": req.body.alarm1,
      "alarm.monday.afternoon.time": req.body.alarm2,
      "alarm.monday.evening.time": req.body.alarm3,
      "alarm.monday.morning.isNotify": req.body.checked1,
      "alarm.monday.afternoon.isNotify": req.body.checked2,
      "alarm.monday.evening.isNotify": req.body.checked3,
    }
  );

  //Mỗi lần post cập nhật lại mảng users
  for (let i = 0; i < users.length; i++) {
    if (users[i].ESPCODE == req.body.ESPCODE) {
      users[i].alarm.monday.morning.time = req.body.alarm1;
      users[i].alarm.monday.afternoon.time = req.body.alarm2;
      users[i].alarm.monday.evening.time = req.body.alarm3;
      users[i].alarm.monday.morning.isNotify = req.body.checked1;
      users[i].alarm.monday.afternoon.isNotify = req.body.checked2;
      users[i].alarm.monday.evening.isNotify = req.body.checked3;
    }
  }
};

const getTimeESP = async (req, res) => {
  let doc = await userModel.findOne({ ESPCODE: req.body.ESPCODE });

  if (doc != null) {
    res.json({
      alarm1: doc.alarm.monday.morning.time,
      alarm2: doc.alarm.monday.afternoon.time,
      alarm3: doc.alarm.monday.evening.time,
      checked1: doc.alarm.monday.morning.isNotify,
      checked2: doc.alarm.monday.afternoon.isNotify,
      checked3: doc.alarm.monday.evening.isNotify,
      isTook1: doc.alarm.monday.morning.isTook,
      isTook2: doc.alarm.monday.afternoon.isTook,
      isTook3: doc.alarm.monday.evening.isTook
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
}

export { postTimeESP, getTimeESP, postTookESP };
