import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import Slides from './components/main/Slides.js'
import Archive from './components/main/Archive.js'
import CollabHeader from './components/common-components/CollabHeader.js'
import Slide1 from './components/slides/Slide1.js'
import Slide2 from './components/slides/Slide2.js'


const routing = (
  <Router>
      <div>
        <CollabHeader />
          <Route exact path="/" component={Slide1} />
          <Route exact path="/1" component={Slide1} />
          <Route exact path="/2" component={Slide2} />
          {/* <Route path="/slides" component={Slides} /> */}
          <Route exact path="/archive" component={Archive} />
      </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))

//each route needs to have the common component

//the way I'm loading slides must be wrong
//maybe the slides should be in an array that iterates until the limit
  //the arrows would be the +1 or -1 to the loop.
  //arrows would remain common component.


  //maybe i need an event listener for changes in the url, and then I can update state based on the url
  //maybe slide1 should be the parent component


  // var slideArray= [<Slide1/>, <Slide2/>];
  //
  // renderSlide = () => {
  //
  //   for (var i= 0; i < slideArray.length; i++) {
  //     var currentSlide = slideArray[i];
  //   }
  //
  // }


//onClick window.location.url = route of the next component (this.state + 1)
