import mongoose, { trusted } from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        default: 55
    },
    sexual: {
        type: String,
        require: true,
        default: "male"
    },
    ESPCODE: {
        type: String,
        require: true
    },
    subscription: {
        type: Object
    },
    alarm: {
        monday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        },
        tuesday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        },
        wednesday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        },
        thursday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        },
        friday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        },
        saturday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        },
        sunday: {
            morning: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            afternoon: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            },
            evening: {
                time: {type: Date, require: true, default: new Date()},
                isTook: {type: Boolean, require: true, default: false},
                isNotify: {type: Boolean, require: true, default: false}
            }
        }
    }
    
})

const userModel = mongoose.model('user', userSchema);
export default userModel;