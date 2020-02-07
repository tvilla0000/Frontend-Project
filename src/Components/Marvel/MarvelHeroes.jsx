import React from "react";

// import './MarvelHeroes.css';

const MarvelHeroes = props => {
  const filterMarvel = props.supes.filter(x => {
    return x.biography.publisher === "Marvel Comics";
  });
  const MHeroes = filterMarvel.map(supe => {
    return (
      <div class="card-deck" key={supe.id}>
        <img class="card-img-top" src={supe.images.xs} alt={supe.name} />
        <div class="card-body">
          <h5 class="card-title">{supe.name}</h5>
          <p class="card-text"></p>
        </div>
      </div>
    );
  });

  return <div>{MHeroes}</div>;
};

export default MarvelHeroes;
