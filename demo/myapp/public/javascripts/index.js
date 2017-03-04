console.log('index');

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        vxhr = new XDomainRequest();
        xhr.open(method, url); 
    } else {
            xhr = null;
    }
    return xhr; 
}

var request = createCORSRequest("post", "http://m.ctrip.com/restapi/soa2/12568/search.json"); 
if (request){
    request.onload = function(res){
        //对 request.responseText 进行处理
    };
    request.send();
}