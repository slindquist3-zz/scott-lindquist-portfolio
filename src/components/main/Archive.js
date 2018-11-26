import React from 'react';
import { Link } from 'react-router-dom';

import Overlay from './Overlay.js';
import HomeIcon from '../common-components/HomeIcon.js';

import './Archive.scss';

export default class Archive extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayOverlay: false
    }
  }

  renderOverlay = () => {
    if ( this.state.displayOverlay ) {
     return <Overlay toggle={this.toggleDisplayOverlay}/>
    }
  }

  toggleDisplayOverlay = () => {
    this.setState({displayOverlay: !this.state.displayOverlay});
  }

  render() {

    return (
      <div className="Archive">
        <section className="top-section">
          <HomeIcon />
          <h1 className="header">Featured Work</h1>
          <h2 className="subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. </h2>
        </section>

        {this.renderOverlay()}

        <section className="grid" onClick={this.toggleDisplayOverlay}>
          <Link to="/1"><div className="one-square"></div></Link>
          <div className="one-square"></div>
          <div className="one-square"></div>
          <div className="one-square"></div>
          
        </section>
      </div>
    )
  }
}
