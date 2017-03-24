import React from 'react';
import { render } from 'react-dom';

import Index from '../components/Index';
import json from '../../json/index.json';
import xcors from '../util/xcors';

const rootEl = document.getElementById('root');

var baseView={};

baseView.rend=function(data){
      data.delegate=baseView;
      render(
      <Index {...data} />,
      rootEl
    );
}

baseView.initData=function(opts){
    var sort=0,pageIndex=1,resType=[1,2,3,4,5,6,7,8];
    if(typeof opts==='object'){
        opts.sort?sort=opts.sort:'';
        opts.pageIndex?pageIndex=opts.pageIndex:'';
        opts.resType && opts.resType[0]!=0?resType=opts.resType:'';
    }
    xcors.execute({
      method:'POST',
      url:'http://m.ctrip.com/restapi/soa2/12568/search.json',
      params:{
        goodsLimit:{sort: sort, imageWidth: 160, imageHeight: 160},
        pageIndex:pageIndex,
        pageSize:10,
        poid:2,
        resType:resType,
        searchType:2
      },
      onComplete:function(data){
        baseView.rend(data)
        baseView.handScroll();
      },
      onError:function(err){
        console.log(err)
      }
    })
}

baseView.handScroll=function(){
            setTimeout(function(){
                // $(window).bind("scroll", ()=>{
                //     handleScroll();
                // });
                window.onscroll=function(){
                  handleScroll();
                }
                // if (this.isIOS) {
                //     $(window).bind("touchmove", ()=>{
                //         handleScroll();
                //     });
                // }
            },300);
}

function handleScroll(){
   let scrollhei=document.body.scrollTop+window.screen.height;
   var allhei=document.getElementsByClassName('content')[0].clientHeight;
   //if(scrollhei>=allhei){
            //$(window).unbind("scroll");
            //if (this.isIOS) { $(window).unbind("touchmove"); }
            console.log(scrollhei+'-'+allhei)
    //}
}

baseView.initData();



