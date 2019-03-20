// 创建XHR对象
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    //否则，即使服务器同意发送Cookie，浏览器也不会发送。或者，服务器要求设置Cookie，浏览器也不会处理。
    //但是，如果省略withCredentials设置，有的浏览器还是会一起发送Cookie。这时，可以显式关闭withCredentials。
    //xhr.withCredentials = true;
    //-----------------------------------------------------------------------------------------------------------------------------------
    //需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。
    //同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页
    //代码中的document.cookie也无法读取服务器域名下的Cookie。

    if ("withCredentials" in xhr){
         // 针对Chrome/Safari/Firefox.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
         // 针对IE
        vxhr = new XDomainRequest();
        xhr.open(method, url); 
    } else {
        // 不支持CORS
            xhr = null;
    }

    /*
    1.Accept属于请求头， Content-Type属于实体头。 
    Http报头分为  通用报头，请求报头，响应报头和实体报头。 
    请求方的http报头结构：通用报头|请求报头|实体报头 
    响应方的http报头结构：通用报头|响应报头|实体报头
    */

    //Accept代表发送端（客户端）希望接受的数据类型。 
    xhr.setRequestHeader('Accept', 'application/json');
    //Accept-Language请求报头域类似于Accept，但是它是用于指定一种自然语言.
    //eg：Accept-Language:zh-cn.如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。
    xhr.setRequestHeader('Accept-Language', 'zh-CN,zh;q=0.8');
    //Content-Language实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读
    //xhr.setRequestHeader('Content-Language', 'zh-CN,zh;q=0.8');
    //Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。
    //只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
    xhr.setRequestHeader('Content-Type', 'application/json');


    //该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    //该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
    //设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。这个值也只能设为true，
    //如果服务器不要浏览器发送Cookie，删除该字段即可。
    //上面说到，CORS请求默认不发送Cookie和HTTP认证信息。
    //如果要把Cookie发到服务器，一方面要服务器同意，指定Access-Control-Allow-Credentials字段。
    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    //发送一个自定义头信息X-Custom-Header。
    //xhr.setRequestHeader('X-Custom-Header', 'value');
    //该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
    //Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
    //如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。
    //上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段的值。
    //该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段，上例是X-Custom-Header。
    //xhr.setRequestHeader('Access-Control-Expose-Headers', 'FooBar');


    //非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
    //浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。
    //只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。
    //浏览器发现，这是一个非简单请求，就自动发出一个"预检"请求，要求服务器确认可以这样请求。下面是这个"预检"请求的HTTP头信息。
    //"预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是Origin，表示请求来自哪个源。
    //除了Origin字段，"预检"请求的头信息包括两个特殊字段。
    //该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法，上例是PUT。
    //xhr.setRequestHeader('Access-Control-Request-Method', 'POST');



    //服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，
    //确认允许跨源请求，就可以做出回应。
    
    return xhr; 
}


//http://m.ctrip.com/restapi/soa2/12568/search.json
var request = createCORSRequest("post", "http://137.116.141.39:3009/login"); 
if (request){
    request.onload = function(res){
        //对 request.responseText 进行处理
    };
    request.send();
}

/*
事件	说明
onloadstart*	当请求发生时触发
onprogress	读取及发送数据时触发
onabort*	当请求被中止时触发，如使用abort()方法
onerror	当请求失败时触发
onload	当请求成功时触发
ontimeout	当调用者设定的超时时间已过而仍未成功时触发
onloadend*	请求结束时触发（无论成功与否）
注：带星号的表示IE的XDomainRequest仍不支持。
*/

/*
;q= (q-factor weighting)
值代表优先顺序，用相对质量价值 表示，又称为权重。

Accept 请求头用来告知（服务器）客户端可以处理的内容类型
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng;q=0.8

Accept-Charset 请求头用来告知（服务器）客户端可以处理的字符集类型。
Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Encoding 请求头会将客户端能够理解的内容编码方式——通常是某种压缩算法——进行通知。
Accept-Encoding: gzip, deflate, br

Accept-Language请求头允许客户端声明它可以理解的自然语言，以及优先选择的区域方言。
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8

Cache-Control 通用消息头字段被用于在http请求和响应中通过指定指令来实现缓存机制。
缓存指令是单向的,这意味着在请求设置的指令，在响应中不一定包含相同的指令。
Response Headers
Cache-Control: public,max-age=31536000
Request Headers
Cache-Control: max-age=0

Connection 头（header） 决定当前的事务完成后，是否会关闭网络连接。
Connection: keep-alive

Content-Encoding 是一个实体消息首部，用于对特定媒体类型的数据进行压缩。
Content-Encoding: gzip

Content-Type 实体头部用于指示资源的MIME类型(多用途互联网邮件扩展类型)。
--在响应中，Content-Type标头告诉客户端实际返回的内容的内容类型。
Content-Type: text/html; charset=utf-8

Content-Length 是一个实体消息首部，用来指明发送给接收方的消息主体的大小，即用十进制数字表示的八位元组的数目。
Content-Length: <length>

Cookie 是一个请求首部，其中含有先前由服务器通过Set-Cookie首部投放并存储到客户端的HTTP cookies。
Cookie: name=value; name2=value2; name3=value3

Date 是一个通用首部，其中包含了报文创建的日期和时间。
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

ETagHTTP响应头是资源的特定版本的标识符。
这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web服务器不需要发送完整的响应。
如果给定URL中的资源更改，则一定要生成新的Etag值。 因此Etags类似于指纹，也可能被某些服务器用于跟踪。
ETag: W/"<etag_value>"

Expires 响应头包含日期/时间， 即在此时候之后，响应过期。
Expires: <http-date>

The Last-Modified  是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。 
它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比  ETag 要低，所以这是一个备用机制。
Last-Modified: Tue, 26 Feb 2019 07:24:24 GMT

Server 首部包含了处理请求的源头服务器所用到的软件相关信息。
Server: <product>

User-Agent 首部包含了一个特征字符串，用来让网络协议的对端来识别发起请求的
用户代理软件的应用类型、操作系统、软件开发商以及版本号。
User-Agent: <product> / <product-version> <comment>


*/