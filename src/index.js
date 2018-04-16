import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Assignment1 from './assignment1';
import Assignment2 from './assignment2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Assignment1/>
  <Assignment2/>
  </div>,  document.getElementById('root')
  );
registerServiceWorker();
