import React from "react";
import Typist from 'react-typist';

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h2>{title}</h2>
      {/* <p>{subtitle}</p> */}
      <div className="banner-para">
        <Typist>
          <p> And I'm a Photographer </p>
          <Typist.Backspace count={13} delay={3000} />
          <text> Project Cordinator </text>
          <Typist.Backspace count={20} delay={3000} />
          <p> Civil Engineer </p>
          <Typist.Backspace count={15} delay={3000} />
          <p className="t-special"> Photographer </p>
        </Typist>
      </div>


    </div>
  );
};

export default Banner;