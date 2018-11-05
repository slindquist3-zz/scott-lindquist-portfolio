import React from 'react'
import Slide1 from '../slides/Slide1.js'
import Slide2 from '../slides/Slide2.js'
import MenuIcon from '../common-components/MenuIcon.js'
import HomeIcon from '../common-components/HomeIcon.js'

import ArrowButtons from '../common-components/ArrowButtons.js'


export default class Slides extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slide: 1
    };
    this.handleCLickNext = this.handleClickNext.bind(this);
    this.handleCLickBack = this.handleClickBack.bind(this);
  }

  handleClickNext = () => {
    if (this.state.slide + 1 > 4) {
      return;
    }

    this.setState({slide: this.state.slide + 1}, function() {
      console.log(this.state.slide);
    })
  }

  handleClickBack = () => {
    if (this.state.slide - 1 < 1) {
      return;
    }

    this.setState({slide: this.state.slide - 1}, function() {
      console.log(this.state.slide);
    })
  }

  render() {

    var slides = {
      1: <Slide1/>,
      2: <Slide2/>
    }

    return (
      <div>
        <MenuIcon />
        <ArrowButtons
          slide={this.state.slide}
          handleClickBack={this.handleClickBack}
          handleClickNext={this.handleClickNext}
          />

          {slides[this.state.slide]}

      </div>
    )
  }
}
