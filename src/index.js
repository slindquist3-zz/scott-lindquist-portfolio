<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, HashRouter, Link } from 'react-router-dom';
import Home from './components/Home'
import Work from './components/Work'
import Demos from './components/Demos'
import './index.scss';

const routing = (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Demos</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/demos" component={Demos} />
      <Route path="/work" component={Work} />
    </nav>
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';


import SlidesContainer from './components/main/SlidesContainer.js';
import Archive from './components/main/Archive.js';

import './index.scss';

const routing = (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App-Container">
      <Route exact path="/" component={SlidesContainer}/>
      <Route path="/(1|2|3)/" component={SlidesContainer}/>
      <Route exact path="/archive" component={Archive} />
    </div>
>>>>>>> 6bed3fdb663f0b5e420df608f738f52f6a2daf55
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
