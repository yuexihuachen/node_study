import React from 'react';
import { render } from 'react-dom';

import Detail from '../components/Detail';
import json from '../../json/index.json';
import utils from '../util/utils';
import xcors from '../util/xcors';

const rootEl = document.getElementById('root');

var id=utils.GetQueryString('id') || '',
      aid=utils.GetQueryString('aid') || '',
      poid=utils.GetQueryString('poid') || '';

var rend=function(data){
  render(
    <Detail {...data} />,
    rootEl
  );
}

xcors.execute({
  method:'POST',
  url:'http://m.ctrip.com/restapi/soa2/12568/search.json',
  params:{
      goodsLimit:{productIds:[parseInt(id,10)]},
      guideLimit:{"advisorIds":[parseInt(aid,10)],"ageTag":[],"onlyThesePoi":true},
      poid:parseInt(poid,10),
      resType:[],
      searchType:3
  },
  onComplete:function(data){
    rend(data)
  },
  onError:function(err){
    console.log(err)
  }
})




