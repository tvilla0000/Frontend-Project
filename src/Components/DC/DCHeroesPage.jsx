import React from "react";
import DCHeroes from "./DCHeroes";
import Nav from "../NavBar";

const DCHeroPage = props => {
  return (
    <div>
      <Nav />
      <DCHeroes supes={props.supes} />
    </div>
  );
};

export default DCHeroPage;
