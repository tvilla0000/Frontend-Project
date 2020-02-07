import React, { Component } from "react";
import "./App.css";
import Slide from "./Components/ImgSlide";
import API from "./API/supeApi";
import { Route, Switch } from "react-router-dom";
import MHeroes from "./Components/Marvel/MarvelHeroes";

class App extends Component {
  state = {
    supes: []
  };

  async componentDidMount() {
    let supes = await API.get(`/all.json `);
    this.setState({
      supes: supes.data
    });
    console.log(this.state.supes);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Slide />} />

          <Route
            exact
            path="/marvelheroes"
            render={() => <MHeroes supes={this.state.supes} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
