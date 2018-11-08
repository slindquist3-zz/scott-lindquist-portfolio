import React from 'react';
import './ArrowButtons.scss';

export default function ArrowButtons(props) {



  function RenderBackArrow() {
    var path = window.location.pathname;
    if ( "/" || "/1") {
      return <img className="back" alt="back" src={require("../../assets/images/arrow-gray.svg")} />
    } else {
      return <img className="back" alt="back" src={require("../../assets/images/arrow.svg")} />
    }
  }

  function RenderNextArrow() {
    var path = window.location.pathname;
    if (path === "/4" ) {
      return <img className="next" alt="back" src={require("../../assets/images/arrow-gray.svg")} />
    } else {
      return <img className="next" alt="back" src={require("../../assets/images/arrow.svg")} />
    }
  }

  function changePathForward() {

    var currentPath = window.location.pathname;

    if ( currentPath === "/" || currentPath === "/1") {
      window.location.pathname = "/2";
    } else if (parseInt(window.location.pathname.slice(1)) > 5){
      var newPathInt = parseInt(currentPath.slice(1)) + 1;
      window.location.pathname = "/" + newPathInt;
    } else {
      return;
    }
  }


  function changePathBackward() {

    var currentPath = window.location.pathname;

    if ( currentPath.length === 1) {
      return;
    } else {

      var newPathInt = parseInt(currentPath.slice(1)) - 1;
      window.location.pathname = "/" + newPathInt;
    }
  }

  return (
    <div className="ArrowButtons">
      <div className="arrow-button-back" onClick={changePathBackward}>
        {RenderBackArrow()}
      </div>
      <div className="divider"></div>
      <div className="arrow-button-next" onClick={changePathForward}>
        {RenderNextArrow()}
      </div>
    </div>
  );
}
