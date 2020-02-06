import React, { Component } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import Slide from "./Components/ImgSlide";
import API from "./API/supeApi";

class App extends Component {
  state = {
    supes: []
  };

  async componentDidMount() {
    let supes = await API.get(`/all.json `);
    this.setState({
      supes: supes
    });
  }

  render() {
    return (
      <div>
        <Slide />
      </div>
    );
  }
}

export default App;
