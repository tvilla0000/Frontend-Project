import React from "react";

const DetailPage = props => {
  const filterHero = props.supes.filter(x => {
    return x.id === parseInt(props.id);
  });
  console.log(filterHero);

  const hero = filterHero.map(supe => {
    return (
      <div key={supe.id}>
        <div className="left-side"></div>
        <div className="right-side"></div>
      </div>
    );
  });
  return <div className="main-container"></div>;
};

export default DetailPage;
