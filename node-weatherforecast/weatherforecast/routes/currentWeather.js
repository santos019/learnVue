const key = require('../key');
var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/current', async function(req, res, next) {
    let view = req.query; 
    const baseDate = '20220707';
    const baseTime = '0500';
    const nx = '55';
    const ny = '127'
    try {
        const custom = axios.create({});
        const va = await custom.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey='+ key.publicDataKey+'&numOfRows=1000&pageNo=1&base_date=20220707&base_time=0500&nx=55&ny=127&dataType=JSON')
        //console.log(va.data.response.body.items.item);
        console.log(req.query)
        res.json(va.data.response.body.items.item);
    } catch (e) {
        res.json({
            status: 400,
            message: e
        });
    }
    // res.render('index', { title: 'Express' });
});

module.exports = router;