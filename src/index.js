import React from 'react';
import ReactDOM from 'react-dom';
import './containers/css/index.css';
import Assignment1 from './containers/assignment1';
import Assignment2 from './containers/assignment2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Assignment1 title = "Relevant Users"/>
  <Assignment2/>

  </div>,  document.getElementById('root')
  );
registerServiceWorker();
