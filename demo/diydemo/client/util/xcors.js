var xcors={};
//method,url,onComplete, onError
xcors.execute=function(request){
    if(typeof request.onComplete !=='function' || typeof request.onError !== 'function'){
        request.onError({"errorMessage":"throw e message"});
    }

    var xhr = window.xhr = new XMLHttpRequest();
    var params=JSON.stringify(request.params);
    xhr.open(request.method.toUpperCase(), request.url);
    // xhr.onreadystatechange = function(e) {
    //     if(xhr.readyState === 4){
    //         request.onComplete(JSON.parse(xhr.responseText));
    //     } else {
    //         request.onError(xhr);
    //     }
    // };
    xhr.onerror=function(err){
         request.onError(xhr);
    }
    xhr.onload=function(data){
        request.onComplete(JSON.parse(xhr.responseText));
    }

    xhr.send(params);
}

module.exports=xcors;