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
        }

    } else {
      var path = window.location.pathname;

      if (path[path.length-1] === "/") {
        path = path.slice(0, -1);
      }
      // this.state = { slide: parseInt(window.location.pathname.slice(1))}
      this.state = { slide: parseInt(path.slice(path.length - 1))}
    }

    this.handleCLickNext = this.handleClickNext.bind(this);
    this.handleCLickBack = this.handleClickBack.bind(this);
  }

  handleClickNext = () => {
    this.setState({slide: this.state.slide + 1});
  }

  handleClickBack = () => {
    if (this.state.slide - 1 < 1) {
      return;
    } else {
      this.setState({slide: this.state.slide - 1});
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
        {slidesToRender[this.state.slide]}
      </div>
    )
  }
}
