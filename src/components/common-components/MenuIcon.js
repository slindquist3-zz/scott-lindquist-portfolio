import React from 'react'
import './MenuIcon.scss'
import { Link } from 'react-router-dom'

export default function MenuIcon() {
  return (
    <div className="MenuIcon">
      <Link to="/archive">
        <img className="menuicon-img" alt="menu" src={require("../../assets/images/menu-icon.svg")} />
      </Link>
    </div>
  );
}
