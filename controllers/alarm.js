import moment from "moment";
import userModel from "../models/user.js";
import { webPush } from "../index.js";
import { users } from "./user.js";

const postTime = async (req, res) => {
  //console.log(moment(req.body.alarm1).utcOffset('+0700'));
  const data = res.locals.data;

  await userModel.findOneAndUpdate(
    { username: data.username },
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
    if (users[i].username == data.username) {
      users[i].alarm.monday.morning.time = req.body.alarm1;
      users[i].alarm.monday.afternoon.time = req.body.alarm2;
      users[i].alarm.monday.evening.time = req.body.alarm3;
      users[i].alarm.monday.morning.isNotify = req.body.checked1;
      users[i].alarm.monday.afternoon.isNotify = req.body.checked2;
      users[i].alarm.monday.evening.isNotify = req.body.checked3;
    }
  }
};

const getTime = async (req, res) => {
  const data = res.locals.data;
  let doc = await userModel.findOne({ username: data.username });

  if (doc != null) {
    res.json({
      alarm1: doc.alarm.monday.morning.time,
      alarm2: doc.alarm.monday.afternoon.time,
      alarm3: doc.alarm.monday.evening.time,
      checked1: doc.alarm.monday.morning.isNotify,
      checked2: doc.alarm.monday.afternoon.isNotify,
      checked3: doc.alarm.monday.evening.isNotify,
    });
  }
};

const updateTime = (req, res) => {};

export { postTime, getTime, updateTime };
