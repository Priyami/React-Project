import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reactassign1 from './react-assign1';
import Reactassign2 from './react-assign2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Reactassign1/>
  <Reactassign2/>
  </div>,  document.getElementById('root')
  );
registerServiceWorker();
