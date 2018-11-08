import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import CollabHeader from './components/common-components/CollabHeader.js'
import SlidesContainer from './components/main/SlidesContainer.js'
import Archive from './components/main/Archive.js'
import './index.scss';

const routing = (
  <Router>
      <div>
          <CollabHeader />
          <Route exact path="/" component={SlidesContainer}/>
          <Route path="/1" component={SlidesContainer}/>
          <Route path="/2" render={props =>
            <div>
              <SlidesContainer />
            </div>

          }/>
          <Route path="/3" render={props =>
            <div>
              <SlidesContainer />
            </div>

          }/>

          <Route exact path="/archive" component={Archive} />
      </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
