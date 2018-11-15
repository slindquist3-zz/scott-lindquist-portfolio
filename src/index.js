import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import SlidesContainer from './components/main/SlidesContainer.js';
import Archive from './components/main/Archive.js';

import './index.scss';

const routing = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App-Container">
      <Route exact path="/" component={SlidesContainer}/>
      <Route path="/(1|2|3)/" component={SlidesContainer}/>
      <Route exact path="/archive" component={Archive} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
