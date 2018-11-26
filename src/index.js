import React from 'react'
import ReactDOM from 'react-dom'
import { Route, HashRouter, Link } from 'react-router-dom';
import App from './components/App'
import Work from './components/work'
import About from './components/about'
import './index.scss';

const routing = (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/About" component={About} />
      <Route path="/Work" component={Work} />
    </nav>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById('root'))
