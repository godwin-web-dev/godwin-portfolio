import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../index.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="hero container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Front-End Web Developer</title>
          <meta
            name="description"
            content="A passionate Frontend / Fullstack-Jamstack web developer and UI/UX enthusiast specialized in building stunning pixel-perfect interactive websites/applications."
          />
        </Helmet>

        <h2 className="hero__subtitle">Hi, I'm Godwin 👋</h2>
        <h1 className="hero__title">FRONT-END WEB DEVELOPER.</h1>
        <p className="hero__description">
          A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
          developer and <strong>UI/UX</strong>
          enthusiast specialized in building stunning pixel-perfect interactive
          websites/applications.
        </p>
        <Link to="/portfolio" className="text_2">
          <div id="button_p" className="ac_btn btn ">
            My Portfolio
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </div>
        </Link>
      </section>
    </HelmetProvider>
  );
};

export default Home;
