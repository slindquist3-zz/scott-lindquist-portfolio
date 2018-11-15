import React from 'react';
import { Link } from 'react-router-dom';

import './ArrowButtons.scss';

export default function ArrowButtons(props) {

  function RenderBackArrow() {
    if (props.slide <= 1 ) {
      // return <img className="back" alt="back" src={require("../../assets/images/arrow-gray.svg")} />
      return <img className="back" alt="back" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow-gray.c9d414f8.svg" />

    } else {
      // return <img className="back" alt="back" src={require("../../assets/images/arrow.svg")} />
      return <img className="back" alt="back" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow.6468634d.svg" />
    }
  }

  function RenderNextArrow() {
    if (props.slide > 5 ) {
      // return <img className="next gray-arrow" alt="next" src={require("../../assets/images/arrow-gray.svg")} />
      return <img className="next gray-arrow" alt="next" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow.6468634d.svg" />

    } else {
      // return <img className="next" alt="next" src={require("../../assets/images/arrow.svg")} />
      return <img className="next" alt="next" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow.6468634d.svg" />
    }
  }

  return (
    <div className="ArrowButtons">
      {
        props.slide === 1
        ?
        <Link className=" gray-arrow arrow-button-back" onClick={(e) => e.preventDefault() } to="#">
          {RenderBackArrow()}
        </Link>
        :
        <Link className="arrow-button-back" onClick={props.handleClickBack} to={`/${props.slide - 1}`}>
          {RenderBackArrow()}
        </Link>
      }
      <div className="divider"></div>

      <Link className="arrow-button-next" onClick={props.handleClickNext} to={`/${props.slide + 1}`}>
        {RenderNextArrow()}
      </Link>
    </div>
  );
}
