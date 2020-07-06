import React from "react";
import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import database from "../assets/database.svg";

const SimpleList = () => (
  <ul>
    {["html5", "css3", "js"].map(function (item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);

export default [
  {
    id: 1,
    icon: <img className="service-icon" src={frontend} alt="icon" />,
    title: "front-end",
    text: `HTML | CSS | JS | React | Gatsby`,
  },
  {
    id: 2,
    icon: <img className="service-icon" src={backend} alt="icon" />,
    title: "back-end",
    text: `Node JS | Express JS | Flask`,
  },
  {
    id: 3,
    icon: <img className="service-icon" src={database} alt="icon" />,
    title: "database",
    text: `SQL-Server | MongoDB`,
  },
];
