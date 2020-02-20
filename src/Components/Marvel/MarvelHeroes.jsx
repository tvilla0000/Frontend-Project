import React from "react";
import "./MHeroes.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { render } from "react-dom";
import VisibilitySensor from "react-visibility-sensor";

const MarvelHeroes = props => {
  const filterMarvel = props.supes.filter(x => {
    return x.biography.publisher === "Marvel Comics";
  });

  const MHeroes = filterMarvel.map(supe => {
    return (
      <div key={supe.id} className="M-supe-card" id={supe.name}>
        <img src={supe.images.lg} alt={supe.name} className="M-supe-img" />
        <h1>{supe.name}</h1>
        <div className="line"></div>
        <p id="drop-in">
          Full Name:{" "}
          <span style={{ color: "red" }}>"{supe.biography.fullName}"</span>
        </p>
        <p id="drop-in">
          First Appearance:{" "}
          <span style={{ color: "limeGreen" }}>
            "{supe.biography.firstAppearance}"
          </span>
        </p>
        <ul className="prgbar-list">
          <li className="prgbar">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible
                    ? supe.powerstats.intelligence
                    : 0;
                  return (
                    <CircularProgressbar
                      value={percentage}
                      text={`INT:  ${percentage}`}
                      className="prgbar"
                      styles={buildStyles({
                        pathColor: "#89ff00",
                        trailColor: "rgb(40, 40, 40)",
                        strokeWidth: 100,
                        textColor: "#89ff00"
                      })}
                    />
                  );
                }}
              </VisibilitySensor>
            </div>
          </li>
          <li className="prgbar">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? supe.powerstats.speed : 0;
                  return (
                    <CircularProgressbar
                      value={percentage}
                      text={`SPD:  ${percentage}`}
                      className="prgbar"
                      styles={buildStyles({
                        pathColor: "#e91e63",
                        trailColor: "rgb(40, 40, 40)",
                        strokeWidth: 100,
                        textColor: "#e91e63"
                      })}
                    />
                  );
                }}
              </VisibilitySensor>
            </div>
          </li>
          <li className="prgbar">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? supe.powerstats.strength : 0;
                  return (
                    <CircularProgressbar
                      value={percentage}
                      text={`STR:  ${percentage}`}
                      className="prgbar"
                      styles={buildStyles({
                        pathColor: "#00bcd4",
                        trailColor: "rgb(40, 40, 40)",
                        strokeWidth: 100,
                        textColor: "#00bcd4"
                      })}
                    />
                  );
                }}
              </VisibilitySensor>
            </div>
          </li>
        </ul>

        {/* <div> */}

        {/* <ul className="prgbar-list">
            <li>
              <CircularProgressbar
                value={supe.powerstats.intelligence}
                className="prgbar"
                text="Intelligence"
              />
            </li>
            <li>
              <CircularProgressbarWithChildren
                value={supe.powerstats.strength}
                className="prgbar"
              ></CircularProgressbarWithChildren>
            </li>
            <li>
              <CircularProgressbar
                value={supe.powerstats.speed}
                className="prgbar"
                text="SPD"
              />
            </li>
          </ul> */}
        {/* </div> */}
      </div>
    );
  });

  return <div className="container-M-supes">{MHeroes}</div>;
};

export default MarvelHeroes;
