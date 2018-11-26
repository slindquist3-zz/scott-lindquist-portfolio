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
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById('root'))
