import React from 'react';

import './Slide1.scss';

export default function Slide1() {

  return (
    <div className="Slide1">
      <div className="intro-container">
        <h1 className="intro-headline">Welcome! I'm a Front End Engineer living and working in NYC. I've created sites for companies like Bloomingdales, Equinox, and American Express with tools like React.js and SCSS. Check out my work!</h1>
        <img className="intro-headshot" src="#" alt="headshot"/>
      </div>

      <div className="contact-container">
        <img className="contact-linkedin" src="#" alt="linkedin"/>
        <img className="contact-email" src="#" alt="email"/>
        <img className="contact-resume" src="#" alt="resume"/>
      </div>
    </div>
  )
}
