//import fetch from 'node-fetch';
// or
var fetch = require('node-fetch');
var services={
	init:function(callback){
		fetch('https://sec-m.ctrip.com/restapi/soa2/12568/search.json',{ 
			method: 'POST', 
			body: JSON.stringify({
				pageIndex:1,
				pageSize:10,
				poid:38,
				resType:[],
				searchType:0
			}) 
		}).then(function(response) {
			return response.json();
		}).then(function(response) {
			callback(response);
		}).catch(function(e){
			console.log("error");
		});
	}
}

module.exports = services;