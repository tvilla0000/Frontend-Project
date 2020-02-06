import React, { Component } from "react";
import Routes from './config/routes';
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
    console.log(this.state.supes.data);
  }

  render() {
    return (
      <div>
      {console.log(this.state.supes.data)}
        <Routes supes={this.state.supes} />
      </div>
    );
  }
}

export default App;
