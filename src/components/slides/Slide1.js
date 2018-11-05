import React from 'react'
import Slide from '../common-components/Slide.js'
import './Slide1.scss'



export default class Slide1 extends React.Component {
  render() {

    return (
      <div className="Slide1">

        <Slide >

          <div className="left-side">
          </div>

          <div className="right-side">
            <div className="text-container">
              <h1 className="header"><span className="creative">Creative</span><span className="muscle">Muscle</span></h1>
              <img className="subheader" src={require("../../assets/images/test.png")}/>
              <p className="subcopy">orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lacus eget ex facilisis fermentum. Cras ultrices magna non turpis fringilla, nec dictum ipsum blandit.</p>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}
