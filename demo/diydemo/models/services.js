import fetch from 'node-fetch';

        /*
            {
            method: 'GET'
            , headers: {}        // request header. format {a:'1'} or {b:['1','2','3']}
            , redirect: 'follow' // set to `manual` to extract redirect headers, `error` to reject redirect
            , follow: 20         // maximum redirect count. 0 to not follow redirect
            , timeout: 0         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
            , compress: true     // support gzip/deflate content encoding. false to disable
            , size: 0            // maximum response body size in bytes. 0 to disable
            , body: empty        // request body. can be a string, buffer, readable stream
            , agent: null        // http.Agent instance, allows custom proxy, certificate etc.

            method: 请求使用的方法，如 GET、POST。
            headers: 请求的头信息，形式为 Headers 对象或 ByteString。
            body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
            mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
            credentials: 请求的 credentials，如 omit、same-origin 或者 include。
            cache: 请求的 cache 模式: default, no-store, reload, no-cache, force-cache, 或者 only-if-cached。
        }
        */

var services={
    initialSetting:function(params){

    },
    fetchData:function(params){
        var postParams={};
        if(params.method.toUpperCase()!='GET'){
            postParams.method=params.method.toUpperCase();
        }
        if(typeof params.headers ==='object'){
            postParams.headers=params.headers;
        }
        if(params.data && typeof params.data ==='object'){
            postParams.body=JSON.stringify(params.data);
        }
        //返回一个promise来处理response。response参数带着一个Response对象。
        //Response实例通常在fetch()的回调中获得。但是它们也可以用JS构造，不过通常这招只用于ServiceWorkers。
        //Response中最常见的成员是 url,status,statusText,headers,ok,body,bodyUsed,size,timeout,_raw,_abort
        let execute=fetch(params.url,postParams)
                .then(function(res) {
                    if(res.ok){
                        return res.json();
					} else {
                        return null;
                    }
                }).catch(function(err){
                    logs("[EXEC FAILED]: " + params.url + " [FAILED REASON]: " + err);
					return null;
				})
        
        var timeout = new Promise(function(resolve, reject) { 
            setTimeout(function() { 
                resolve('FAILED!'); 
            }, 10000);
        });

        //promise.race 中只要有一个执行结束，它就会触发
        return Promise.race([execute,timeout]).then(function(res){
			return res
		});

    }
}

module.exports=services;

function logs(message){
	if(console && console.log) console.log(message);
}