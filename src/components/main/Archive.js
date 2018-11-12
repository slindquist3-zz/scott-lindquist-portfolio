import React from 'react';

import HomeIcon from '../common-components/HomeIcon.js';
import CollabHeader from '../common-components/CollabHeader.js';

import './Archive.scss';

export default function Archive() {

  return (
    <div className="Archive">
      <section className="top-section">
        <CollabHeader />
        <HomeIcon />
        <h1 className="header">Creative Muscle</h1>
        <h2 className="subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. </h2>
      </section>

      <section className="grid">
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
        <div className="one-square"></div>
      </section>
    </div>
  )
}
