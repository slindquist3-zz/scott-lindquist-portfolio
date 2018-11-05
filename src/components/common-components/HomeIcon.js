import React from 'react';
import './HomeIcon.scss';
import { Link } from 'react-router-dom'


export default function HomeIcon() {
  return (
    <div className="HomeIcon">
      <Link to="/">
      <img alt="home icon" src={require("../../assets/images/home-icon.svg")} />
      </Link>
    </div>
  );
}
