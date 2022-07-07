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
    } else {
        return number
    }
}

function makeTime (timeHour, timeMin, date) {
    console.log(timeHour + '/' + timeMin)
    console.log(((timeHour<=19)|| (timeHour===20 && timeMin <=10)));
    if ((timeHour>23 && timeMin>10)) {// 23:11 ~ 02:10 
        return '2300'
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
   // LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
export const LongtideLatitudeToCoordinate = (code, v1, v2) => {
    const RE = 6371.00877; // 지구 반경(km)
    const GRID = 5.0; // 격자 간격(km)
    const SLAT1 = 30.0; // 투영 위도1(degree)
    const SLAT2 = 60.0; // 투영 위도2(degree)
    const OLON = 126.0; // 기준점 경도(degree)
    const OLAT = 38.0; // 기준점 위도(degree)
    const XO = 43; // 기준점 X좌표(GRID)
    const YO = 136; // 기1준점 Y좌표(GRID)
    
        var DEGRAD = Math.PI / 180.0;
        var RADDEG = 180.0 / Math.PI;

        var re = RE / GRID;
        var slat1 = SLAT1 * DEGRAD;
        var slat2 = SLAT2 * DEGRAD;
        var olon = OLON * DEGRAD;
        var olat = OLAT * DEGRAD;

        var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
        var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
        sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
        var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
        ro = re * sf / Math.pow(ro, sn);
        var rs = {};
        if (code == "toXY") {
            rs['lat'] = v1;
            rs['lng'] = v2;
            var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
            ra = re * sf / Math.pow(ra, sn);
            var theta = v2 * DEGRAD - olon;
            if (theta > Math.PI) theta -= 2.0 * Math.PI;
            if (theta < -Math.PI) theta += 2.0 * Math.PI;
            theta *= sn;
            rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
            rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
        } else {
            rs['x'] = v1;
            rs['y'] = v2;
            var xn = v1 - XO;
            var yn = ro - v2 + YO;
            ra = Math.sqrt(xn * xn + yn * yn);
            if (sn < 0.0) - ra;
            var alat = Math.pow((re * sf / ra), (1.0 / sn));
            alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

            if (Math.abs(xn) <= 0.0) {
                theta = 0.0;
            } else {
                if (Math.abs(yn) <= 0.0) {
                    theta = Math.PI * 0.5;
                    if (xn < 0.0) - theta;
                } else {
                    theta = Math.atan2(xn, yn);
                }
            }
            var alon = theta / sn + olon;
            rs['lat'] = alat * RADDEG;
            rs['lng'] = alon * RADDEG;
        }
        return rs;
}