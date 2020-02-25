import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./imgSlide.css";
import dc from "../assets/images/dc.jpg";
import marvel from "../assets/images/marvel.jpg";

class ImgSlide extends Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();
  }

  render() {
    return (
      <div>
        <div className="container-slide">
          <div className="slide slide1">
            <Link to={"/dcheroes"}>
              <img className="dcImage" src={dc} />
            </Link>
          </div>
          <div className="slide slide2">
            <Link to={"/marvelheroes"}>
              <img className="marvelImage" src={marvel} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgSlide;
