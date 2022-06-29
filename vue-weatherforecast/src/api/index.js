import axios from "axios";

const config = {
    baseUrl: '/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=xAL3HhXPLapIk8kqPCr3Q%2Fn9aPxhQUlwYeTF8reIwRpT4ZthkBepQ73lhebDef3mZ6LfBcHYGy9tC2Zn6bcWFg%3D%3D&dataType=JSON'
}

function fetchWeather({numOfRows, pageNo, stnIds, endDt, endHh, startHh, startDt}) {
    return axios.get(config.baseUrl +'&numOfRows=' +numOfRows +'&pageNo='+pageNo + '&dataCd=ASOS&dateCd=HR&stnIds=' + stnIds + '&endDt=' + endDt+'&endHh='+endHh+'&startHh=' + startHh+ '&startDt=' + startDt);

}
function fetchRealLocation () {
    navigator.geolocation.getCurrentPosition(res => {
        const latitude = res.coords.latitude;
        const longitude = res.coords.longitude;
        return {latitude, longitude} //이걸로 경도위도 찾아서 지역 리턴하기...

    }, err => {
        console.log(err)
        return -1;
    })
}


export {
    fetchWeather,
    fetchRealLocation
}