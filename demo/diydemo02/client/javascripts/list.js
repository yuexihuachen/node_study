import React from 'react';
import { render } from 'react-dom';

import List from '../components/List';
import xcors from '../util/xcors';

const rootEl = document.getElementById('root');

var baseView={};

baseView.rend=function(data){
      data.delegate=baseView;
      render(
      <List {...data} />,
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
      },
      onError:function(err){
        console.log(err)
      }
    })
}



baseView.initData();



