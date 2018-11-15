import React from 'react';
import { Link } from 'react-router-dom';

import './HomeIcon.scss';

export default function HomeIcon() {
  return (
    <div className="HomeIcon">
      <Link to="/1">
        {/* <img className="home-icon-img" alt="home icon" src={require("../../assets/images/home-icon.svg")} /> */}
        <img className="home-icon-img" alt="home icon" src="https://furthermore-cdn.equinox.com/creative-muscle/static/media/home-icon.979d2932.svg" />
      </Link>
    </div>
  );
}
