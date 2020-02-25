import React from "react";
import { Link } from "react-router-dom";
import "./DCHeroes.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const DCHeroes = props => {
  const filterDC = props.supes.filter(x => {
    return x.biography.publisher === "DC Comics";
  });

  console.log(filterDC);

  const DCHeroes = filterDC.map(supe => {
    return (
      <Link to={`/dcheroes/${supe.id}`} key={supe.id}>
        <div key={supe.id} className="DC-supe-card" id={supe.name}>
          <img src={supe.images.lg} alt={supe.name} className="DC-supe-img" />
          <h1>{supe.name}</h1>
          <div className="line"></div>
          <p id="drop-in">
            Full Name:
            <span style={{ color: "red" }}>"{supe.biography.fullName}"</span>
          </p>
          <p id="drop-in">
            First Appearance:
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
        </div>
      </Link>
    );
  });

  return <div className="container-DC-supes">{DCHeroes}</div>;
};

export default DCHeroes;
