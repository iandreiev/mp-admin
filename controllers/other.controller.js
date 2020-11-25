const { response } = require("express");
const http = require('http');

exports.btc = () => {
    let URL = "http://api.bitcoincharts.com/v1/markets.json"

    http.get(URL)
    .then((res)=>{
        var bodyChunks = [];

        res.on()
    })

}