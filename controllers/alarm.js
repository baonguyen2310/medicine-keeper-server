import moment from 'moment';
import userModel from "../models/user.js";

const user = {
    username: '',
    alarm: {
        monday: {
            morning: {
                time: '',
                isTook: false,
                isNotify: false
            }
        }
    }
}

const postTime = async (req, res) => {
    //console.log(moment(req.body.alarm1).utcOffset('+0700'));
    console.log(req.body);
    user.username = req.body.username;
    user.alarm.monday.morning.time = req.body.alarm1;
    user.alarm.monday.morning.isNotify = req.body.checked1;

    await userModel.findOneAndUpdate(
        { username: req.body.username },
        {
            "alarm.monday.morning.time": req.body.alarm1,
            "alarm.monday.morning.isNotify": req.body.checked1
        }
    )
}

const getTime = async (req, res) => {
    res.send('getTime');
    const record = new userModel({
        username: 'jack',
        password: 'jack',
        age: 97,
        sexual: 'male',
        ESPCODE: 'ESP01',
        alarm: {
            monday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            },
            tuesday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            },
            wednesday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            },
            thursday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            },
            friday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            },
            saturday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            },
            sunday: {
                morning: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                afternoon: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                },
                evening: {
                    time: new Date(2023, 2, 11, 13, 30),
                    isTook: false,
                    isNotify: true
                }
            }
        }
    })
    //await record.save();
}

const updateTime = (req, res) => {

}

export { postTime, getTime, updateTime, user };