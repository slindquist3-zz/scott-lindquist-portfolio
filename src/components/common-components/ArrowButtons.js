import React from 'react';
import { Link } from 'react-router-dom';

import './ArrowButtons.scss';

export default function ArrowButtons(props) {

  return (
    <div className="ArrowButtons">

      { props.slide <= 1
        ?

        <Link className="gray-arrow arrow-button-back" onClick={(e) => e.preventDefault() } to="#">
          <img className="back" alt="back" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow-gray.c9d414f8.svg" />
        </Link>
        :
        <Link className="arrow-button-back" onClick={props.handleClickBack} to={`/${props.slide - 1}`}>
          <img className="back" alt="back" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow.6468634d.svg" />
        </Link>
      }

      <div className="divider"></div>

      { props.slide < 3
        ?
        <Link className="arrow-button-next" onClick={props.handleClickNext} to={`/${props.slide + 1}`}>
          <img className="next" alt="next" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow.6468634d.svg" />
        </Link>
        :
        <Link className="gray-arrow arrow-button-back" onClick={(e) => e.preventDefault() } to="#">
          <img className="next gray-arrow" alt="next" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/arrow-gray.c9d414f8.svg" />
        </Link>
      }

    </div>
  );
}
