import React from 'react'
import './Slide1.scss'
import ArrowButtons from '../common-components/ArrowButtons.js'

export default function Slide1() {

    return (
      <div className="Slide1">

        <ArrowButtons/>

        <div className="left-side">
        </div>
        <div className="right-side">
          <div className="text-container">
            <h1 className="header"><span className="creative">Creative</span><span className="muscle">Muscle</span></h1>
            <img className="subheader" src={require("../../assets/images/furthermorexcolehaan.png")} alt="sub header"/>
            <p className="subcopy">orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. Cras ultrices magna non turpis fringilla, nec dictum ipsum blandit.</p>
          </div>
        </div>
      </div>
    )
}
