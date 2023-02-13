import { user } from '../controllers/alarm.js'

const pushNotify = () => {
    let date;
    let alarm1;
    let isNotify1;
    setInterval(() => {
        date = new Date();
        alarm1 = new Date(user.alarm.monday.morning.time);
        isNotify1 = user.alarm.monday.morning.isNotify;
        if (
            date.getHours() == alarm1.getHours() &&
            date.getMinutes() == alarm1.getMinutes() &&
            isNotify1 == true
        ) {
            console.log("Đã đến giờ uống thuốc!");
        }
    }, 30000)
}

const setNotify = (req, res) => {

}

export { setNotify, pushNotify }