/**
 * APP2 will call the APP1 and get the result
 */

var request = require('request');

var hostname = 'http://127.0.0.1:3000';
var path = '/get?name=';
var requestData = 'jery';

httprequest(hostname, requestData);

function httprequest(url, data){
    request({
        url: hostname + path + requestData,
        method: 'GET',
        json: true,
        headers: {
            'content-type': 'application/json',
        },
        body: requestData
    }, (error, res)=>{
        if (!error && res.statusCode == 200) {
            console.log(res.body);
        }
    });
}