import React from 'react';
import { render } from 'react-dom';

import Index from '../components/Index';
import json from '../../json/index.json';
import xcors from '../util/xcors';

const rootEl = document.getElementById('root');

var baseView={};

baseView.rend=function(){
    render(
      <Index />,
      rootEl
    );
}


baseView.rend()




