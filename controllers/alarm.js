import userModel from "../models/user.js";

const postTime = (req, res) => {
    res.send('setTime');
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

export { postTime, getTime, updateTime };