import React from 'react';
import { Link } from 'react-router-dom';

import './HomeIcon.scss';

export default function HomeIcon() {
  return (
    <div className="HomeIcon">
      <Link to="/1">
      <img className="home-icon-img" alt="home icon" src={require("../../assets/images/home-icon.svg")} />
      </Link>
    </div>
  );
}
