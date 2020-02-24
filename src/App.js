import React, { Component } from "react";
import "./App.css";
import Slide from "./Components/ImgSlide";
import API from "./API/supeApi";
import { Route, Switch } from "react-router-dom";
import MHeroesPage from "./Components/Marvel/MHeroPage";
import DetailPage from "./Components/Pages/DetailPage";

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
            render={() => <MHeroesPage supes={this.state.supes} />}
          />
          <Route
            exact
            path="/marvelheroes/:id"
            render={({ match }) => (
              <DetailPage id={match.params.id} supes={this.state.supes} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
