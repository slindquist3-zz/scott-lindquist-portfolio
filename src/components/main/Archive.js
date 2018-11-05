import React from 'react'
import HomeIcon from '../common-components/HomeIcon'
import './Archive.scss';

export default class Archive extends React.Component {
  render() {

    return (
      <div className="Archive">
        <HomeIcon />

        <h1 className="header">Creative Muscle</h1>
        <h2 className="subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. </h2>
      </div>
    )
  }
}
