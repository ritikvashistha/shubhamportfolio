import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import AboutMe from '../Components/AboutMe/AboutMe';
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          id="app"
          title="Hello, I'm Shubham Sharma"
          subtitle="And I am a Photographer"
        >
          <Link to="/hotels/rooms" className="btn-primary">
            View More
          </Link>
        </Banner>
      </Hero>

      <AboutMe />
    </>
  );
};

export default home;
