import React from 'react';
import { render } from 'react-dom';

import Detail from '../components/Detail';
import json from '../../json/index.json';
import utils from '../util/utils';

const rootEl = document.getElementById('root');

  let result={
    body:'client',
    title:'client'
  }

var id=utils.GetQueryString('id') || '';

  var singProduct=json.product.filter((item)=>{
    return item.id==id;
  })

  
  var data={
    "product":singProduct
  }

  render(
    <Detail {...data} />,
    rootEl
  );
