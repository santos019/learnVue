export const dateFormatFuc = () => {
    let date = new Date;
    const fulltime = makeTime(date.getHours(), date.getMinutes(), date)
    const fulldate = String(date.getFullYear()) + makeWord(date.getMonth() + 1) + makeWord(date.getDate());
    const userDate = {date: fulldate, time:fulltime}
    return userDate;
}
// 02:10, 05:10, 08:10, 11:10, 14:10, 17:10, 20:10, 23:10
function makeWord (number) {
    if(number < 10) {
        return '0'+ number
    } else return number
}

function makeTime (timeHour, timeMin, date) {
    console.log(timeHour + '/' + timeMin)
    console.log(((timeHour<=19)|| (timeHour===20 && timeMin <=10)));
    if ((timeHour>23 && timeMin>10)) // 23:11 ~ 02:10 
    {     return '2300'
    } else if(timeHour>= 0 && (timeHour<=2 && timeMin<=10)) {
        // eslint-disable-next-line no-unused-vars
        date = new Date(date.setDate(date.getDate() - 1 ))
       return '2300';
    } else if ((timeHour>=3 ||(timeHour >=2 && timeMin > 10)) && ((timeHour<=4)|| (timeHour===5 && timeMin <=10))){ // 02:11 ~ 05:10
        return '0200';
    } else if((timeHour>=6 || (timeHour >=5 && timeMin > 10)) && ((timeHour<=7)|| (timeHour===8 && timeMin <=10))){ // 05:11 ~ 08:10
        return '0500';
    } else if((timeHour>=9 ||(timeHour>=8 && timeMin > 10)) && ((timeHour<=10)|| (timeHour===11 && timeMin <=10))){ // 08:11 ~ 11:10
        return '0800';
    } else if((timeHour>=12 ||(timeHour >=11 && timeMin > 10)) && ((timeHour<=13)|| (timeHour===14 && timeMin <=10))){ // 11:11 ~ 14:10
        return '1100';
    } else if((timeHour>=15 ||(timeHour >=14 && timeMin > 10)) && ((timeHour<=16)|| (timeHour===17 && timeMin <=10))){ // 14:11 ~ 17:10
        return '1400';
    } else if((timeHour>=18 ||(timeHour ===17 && timeMin > 10)) && ((timeHour<=19)|| (timeHour===20 && timeMin <=10))){ // 17:11 ~ 20:10
        return '1700';
    } else { // 20:11 ~ 23:10
        return '2000';
    }  

}