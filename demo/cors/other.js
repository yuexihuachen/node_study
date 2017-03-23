window.onload=function(){
    var xhr = window.xhr = new XMLHttpRequest();
    var params={
    pageIndex:1,
    pageSize:10,
    poid:2,
    resType:[1,2,3,4,5,6,7,8],
    searchType:2
    }

    xhr.open('POST', 'http://m.ctrip.com/restapi/soa2/12568/search.json');
    xhr.onreadystatechange = function(e) {
    if(xhr.readyState === 4)
        console.log("got result: ", xhr);
    };
    xhr.send(JSON.stringify(params));
}
