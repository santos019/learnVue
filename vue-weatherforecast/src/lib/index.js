export const dateFormatFuc = () => {
    const date = new Date;
    const fulldate = String(date.getFullYear()) + String(date.getMonth() + 1) + String(date.getDate());
    const time = date.getHours();
    const userDate = {date: fulldate, time}
    return userDate;
}
