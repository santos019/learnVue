const key = require('../key');
var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/current', async function(req, res, next) {
    let view = req.query; 
    const baseDate = req.query.baseDate;
    const baseTime = req.query.baseTime;
    const nx = req.query.nx;
    const ny = req.query.ny; 
    try {
        const custom = axios.create({});
        const va = await custom.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey='+ key.publicDataKey+'&numOfRows=1000&pageNo=1&base_date=' + baseDate + '&base_time='+ baseTime + '&nx=' + nx + '&ny=' + ny + '&dataType=JSON')
        //console.log(va.data.response.body.items.item);
        console.log(req.query)
        const dattt = changeToFormat(va.data.response.body.items.item)
        console.log('dattt',dattt);
        res.json(dattt);
    } catch (e) {
        res.json({
            status: 400,
            message: e
        });
    }
    // res.render('index', { title: 'Express' });
});

const changeToFormat = (allData) => {
    const arr = [];
    let tmpArr = {};
    let beforefcstTime = allData[0].fcstTime;
    //console.log(allData)
    console.log(beforefcstTime);
    allData.forEach((my,index) => {
        if(my.fcstTime !== beforefcstTime)
        {   
            tmpArr.baseDate = allData[index-1].baseDate;
            tmpArr.baseTime = allData[index-1].baseTime;
            tmpArr.fcstDate = allData[index-1].fcstDate;
            tmpArr.fcstTime = allData[index-1].fcstTime;
            arr.push(tmpArr);
            tmpArr = {};
            beforefcstTime = my.fcstTime;
            
        }
         tmpArr[my.category] = my.fcstValue;
        
    }); 
    tmpArr.baseDate = allData[allData.length-1].baseDate;
    tmpArr.baseTime = allData[allData.length-1].baseTime;
    tmpArr.fcstDate = allData[allData.length-1].fcstDate;
    tmpArr.fcstTime = allData[allData.length-1].fcstTime;
    arr.push(tmpArr);
    console.log('arr',arr);
    return arr;
}

module.exports = router;