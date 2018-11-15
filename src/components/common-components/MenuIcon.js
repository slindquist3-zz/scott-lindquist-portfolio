import React from 'react';
import { Link } from 'react-router-dom';

import './MenuIcon.scss';

export default function MenuIcon() {
  return (
    <div className="MenuIcon">
      <Link to="/archive">
        {/* <img className="menu-icon-img" alt="menu" src={require("../../assets/images/menu-icon.svg")} /> */}
        <img className="menu-icon-img" alt="menu" src="https://furthermore-cdn.equinox.com/cole-haan-2/static/media/menu-icon.cc736c00.svg" />
      </Link>
    </div>
  );
}
