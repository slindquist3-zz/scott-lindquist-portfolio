import React from 'react'
import Slide1 from '../slides/Slide1.js'
import Slide2 from '../slides/Slide2.js'
import MenuIcon from '../common-components/MenuIcon.js'
import ArrowButtons from '../common-components/ArrowButtons.js'

export default class Slides extends React.Component {

  constructor(props) {
    super(props);
    //create state here and by default, set the value to 1 (slide1)
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

    //imported compontents above and placed them in this object here to conditionally render, based on state
    var slidesToRender = {
      1: <Slide1/>,
      2: <Slide2/>
    }

    return (
      <div className="Slides">
        <MenuIcon />
        <ArrowButtons
          slide={this.state.slide}
          //we giving ArrowButtons the props of slide, which points to the current state of Slides component
          handleClickBack={this.handleClickBack}
          handleClickNext={this.handleClickNext}
          //we pass these two functions down so that the arrow button can call them. These functions change state.
        />

        {/* access the above object and show current slide based on state  */}
        {slidesToRender[this.state.slide]}

      </div>
    )
  }
}
