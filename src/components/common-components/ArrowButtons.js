import React from 'react';
import './ArrowButtons.scss';

export default function ArrowButtons(props) {

  var slide = props.slide;

  function HandleBackArrow() {
    if (slide === 1) {
      return <img className="back" alt="back" src={require("../../assets/images/arrow-gray.svg")} />
    } else {
      return <img className="back" alt="back" src={require("../../assets/images/arrow.svg")} />
    }
  }

  function HandleNextArrow() {
    if (slide === 4 ) {
      return <img className="next" alt="back" src={require("../../assets/images/arrow-gray.svg")} />
    } else {
      return <img className="next" alt="back" src={require("../../assets/images/arrow.svg")} />
    }
  }

  return (
    <div className="ArrowButtons">
      <div className="arrow-button-back" onClick={props.handleClickBack}>
        {HandleBackArrow()}
      </div>
      <div className="divider"></div>
      <div className="arrow-button-next" onClick={props.handleClickNext}>
        {HandleNextArrow()}
      </div>
    </div>
  );
}
