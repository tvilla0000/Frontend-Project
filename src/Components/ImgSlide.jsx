import React, { Component } from "react";

class ImgSlide extends Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();
  }

  render() {
    return (
      <div>
        <div className="container-slide">
          <div id="left-side"></div>
          <div id="right-side"></div>
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
        </div>
      </div>
    );
  }
}

export default ImgSlide;
