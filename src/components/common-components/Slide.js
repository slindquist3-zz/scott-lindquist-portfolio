import React from 'react'


class Slide extends React.Component {
  render() {

    return (
      <div className="Slide">
        {this.props.children}
      </div>
    )
  }
}
export default Slide
