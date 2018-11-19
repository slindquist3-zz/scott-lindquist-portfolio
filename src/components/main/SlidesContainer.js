import React from 'react';

import MenuIcon from '../common-components/MenuIcon.js';
import ArrowButtons from '../common-components/ArrowButtons.js';
import CollabHeader from '../common-components/CollabHeader.js';

import Slide1 from '../slides/Slide1.js';
import Slide2 from '../slides/Slide2.js';
import Slide3 from '../slides/Slide3.js';

export default class SlidesContainer extends React.Component {

  constructor(props) {
    super(props);

    if (window.location.pathname === "/" ||
        window.location.pathname === "/creative-muscle/" ||
        window.location.pathname === "/creative-muscle") {

        this.state = {
          slide: 1
          //need to add class to slide currently being display that handles an ease out animaiton
        }

    } else {
      var path = window.location.pathname;

      if (path[path.length-1] === "/") {
        path = path.slice(0, -1);
      }
      this.state = { slide: parseInt(path.slice(path.length - 1))}
    }

    this.handleCLickNext = this.handleClickNext.bind(this);
    this.handleCLickBack = this.handleClickBack.bind(this);
  }

  handleClickNext = () => {
    this.setState({slide: this.state.slide + 1}, function() {
      if (window.innerWidth < 768) {
        document.querySelector('.currentSlide').children[0].classList.add('in');
      }
    });
  }

  handleClickBack = () => {
    if (this.state.slide - 1 < 1) {
      return;
    } else {
      this.setState({slide: this.state.slide - 1}, function() {
        if (window.innerWidth < 768) {
          document.querySelector('.currentSlide').children[0].classList.add('out');
        }
      });
    }
  }

  render() {

    var slidesToRender = {
      1: <Slide1 />,
      2: <Slide2 />,
      3: <Slide3 />
    }

    return (
      <div className="SlidesContainer">
        <CollabHeader />
        <MenuIcon />
        <ArrowButtons
          slide={this.state.slide}
          handleClickBack={this.handleClickBack}
          handleClickNext={this.handleClickNext}
        />

        <div className="currentSlide">
          {slidesToRender[this.state.slide]}
        </div>
      </div>
    )
  }
}

//what needs to happen

//on click of the down arrow, the view should scroll down and display the next sequential component
//on click of the up arrow, the view should scroll up an and display the previous sequential component

//document.querySelector('.currentSlide').children[0]
