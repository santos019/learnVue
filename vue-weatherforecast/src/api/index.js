import axios from "axios";
import { mapKey, publicDataKey } from '../../keys'
const config = {
    baseUrl: '/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey='+publicDataKey +'&dataType=JSON',
    mapUrl: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
}

function fetchWeather({numOfRows, pageNo, stnIds, endDt, endHh, startHh, startDt}) {
    return axios.get(config.baseUrl +'&numOfRows=' +numOfRows +'&pageNo='+pageNo + '&dataCd=ASOS&dateCd=HR&stnIds=' + stnIds + '&endDt=' + endDt+'&endHh='+endHh+'&startHh=' + startHh+ '&startDt=' + startDt);

}

function fetchRealLocation () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((res) => {
            axios.get(config.mapUrl + res.coords.latitude+','+res.coords.longitude+'&key='+mapKey)
            .then(res => {
                resolve(res.data.plus_code.compound_code);
            })
            .catch(err => reject(err))
        }, err => {
            console.log(err)
            return -1;
        })
    })
}


export {
    fetchWeather,
    fetchRealLocation
}