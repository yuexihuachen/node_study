import React from 'react';
import { render } from 'react-dom';

import Index from '../components/Index';
import json from '../../json/index.json';
import xcors from '../util/xcors';

const rootEl = document.getElementById('root');

var rend=function(data){
      render(
      <Index {...data} />,
      rootEl
    );
}

xcors.execute({
  method:'POST',
  url:'http://m.ctrip.com/restapi/soa2/12568/search.json',
  params:{
    goodsLimit:{sort: 0, imageWidth: 160, imageHeight: 160},
    pageIndex:1,
    pageSize:10,
    poid:2,
    resType:[1,2,3,4,5,6,7,8],
    searchType:2
  },
  onComplete:function(data){
    console.log(data)
    rend(data)
  },
  onError:function(err){
    console.log(err)
  }
})


