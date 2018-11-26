import React from 'react';

import './Overlay.scss';

export default function Overlay(props) {

  return (
    <div className="Overlay">
      <div className="inner">
        <img className="x-icon" alt="x icon" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/x-icon.png" onClick={props.toggle}/>
        <p>hi</p>
      </div>
    </div>
  )
}
