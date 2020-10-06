import React from "react";
import Title from "./Title";
import interests from "../constants/interests";

const Interests = () => {
  return (
    <section className="section bg-grey">
      <Title title="Leisure" />
      <div className="section-center services-center">
        {interests.map((interest) => {
          const { id, icon, title, text } = interest;

          return (
            <article key={id} className="interests">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Interests;
