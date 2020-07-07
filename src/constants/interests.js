import React from "react";
import music from "../assets/music.png";
import coding from "../assets/coding.png";
import games from "../assets/games.png";

export default [
  {
    id: 1,
    icon: <img className="interests-icon" src={music} alt="icon" />,
    title: "Music",
    text: `It speaks, when words fail!`,
  },
  {
    id: 2,
    icon: <img className="interests-icon" src={coding} alt="icon" />,
    title: "Coding Challenges",
    text: `Always fun to solve.`,
  },
  {
    id: 3,
    icon: <img className="interests-icon" src={games} alt="icon" />,
    title: "Games",
    text: `Cool distraction from work`,
  },
];
