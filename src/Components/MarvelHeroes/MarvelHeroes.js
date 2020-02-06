import React, { Component } from "react";
import API from "../../API/supeApi";
// import './MarvelHeroes.css';

class MarvelHeroes extends Component {
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
        {this.state.supes.map((supe, idx) => (
          <div key={idx}>{supe.name}</div>
        ))}
      </div>
    );
  }
}

export default MarvelHeroes;
