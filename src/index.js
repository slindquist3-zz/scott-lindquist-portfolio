import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import MenuIcon from './components/common-components/MenuIcon.js'
import Slides from './components/main/Slides.js'
import Archive from './components/main/Archive.js'
import CollabHeader from './components/common-components/CollabHeader.js'

const routing = (
  <Router>
      <div>
        <CollabHeader />
          <Route exact path="/" component={Slides} />
          <Route exact path="/archive" component={Archive} />
      </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
