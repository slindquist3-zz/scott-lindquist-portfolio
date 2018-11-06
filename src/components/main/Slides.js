import React from 'react'
import Slide1 from '../slides/Slide1.js'
import Slide2 from '../slides/Slide2.js'
import MenuIcon from '../common-components/MenuIcon.js'
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
    this.setState({slide: this.state.slide + 1});
  }

  handleClickBack = () => {
    if (this.state.slide - 1 < 1) {
      return;
    }
    this.setState({slide: this.state.slide - 1});
  }

  render() {

    var slides = {
      1: <Slide1/>,
      2: <Slide2/>
    }

    return (
      <div className="Slides">
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
