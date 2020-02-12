import React from "react";
import MHeroes from "./MarvelHeroes";
import Nav from "../NavBar";

const MHeroPage = props => {
  return (
    <div>
      <Nav />
      <MHeroes supes={props.supes} />
    </div>
  );
};

export default MHeroPage;
