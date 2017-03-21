import React from 'react';
import { render } from 'react-dom';
import Counter from '../../components/Counter';
import json from '../../json/index.json';

const rootEl = document.getElementById('root');

  let result={
    body:'client',
    title:'client'
  }


  render(
    <Counter {...json} />,
    rootEl
  );
