import axios from "axios";
import { mapKey } from '../../keys'
const config = {
    baseUrl: 'http://localhost:3001/weather/', 
    //'/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=' + publicDataKey + '&numOfRows=1000&pageNo=1&base_date=',
    mapUrl: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
}

function fetchWeather({baseDate, baseTime, nx, ny }) {
    return axios.get(config.baseUrl+'current',{
        params: {baseDate:baseDate, baseTime:baseTime, nx:nx, ny:ny}})
}

function fetchRealLocation () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((res) => {
            const latitude =  res.coords.latitude;
            const longitude = res.coords.longitude;
            axios.get(config.mapUrl + latitude+','+ longitude +'&key='+mapKey)
            .then(res => {
                const data = {code:res.data.plus_code.compound_code,latitude:latitude, longitude:longitude  }
                resolve(data);
            })
            .catch(err => reject(err))
        }, err => {
            reject(err)
        })
    })
}

// function fetchRealLocation () {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition((res) => {
//             const latitude =  res.coords.latitude;
//             const longitude = res.coords.longitude;
//             axios.get(config.mapUrl + latitude+','+ longitude +'&key='+mapKey)
//             .then(res => {
//                 const data = {code:res.data.plus_code.compound_code,latitude:latitude, longitude:longitude  }
//                 resolve(data);
//             })
//             .catch(err => reject(err))
//         }, err => {
//             console.log(err)
//             return -1;
//         })
//     })
// }


export {
    fetchWeather,
    fetchRealLocation
}