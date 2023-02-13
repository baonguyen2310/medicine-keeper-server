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
        require: true
    },
    sexual: {
        type: String,
        require: true
    },
    ESPCODE: {
        type: String,
        require: true
    },
    alarm: {
        monday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        },
        tuesday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        },
        wednesday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        },
        thursday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        },
        friday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        },
        saturday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        },
        sunday: {
            morning: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            afternoon: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            },
            evening: {
                time: {type: Date, require: true},
                isTook: {type: Boolean, require: true},
                isNotify: {type: Boolean, require: true}
            }
        }
    }
    
})

const userModel = mongoose.model('user', userSchema);
export default userModel;