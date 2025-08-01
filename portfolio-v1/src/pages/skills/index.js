import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-section",
        pin: true,
        start: "50% 50%",
        end: "300% 50%",
        scrub: true,
      },
    });

    const skills = [
      "animation",
      "logo",
      "social",
      "seo",
      "adobe",
      "reels",
      "html",
      "digital",
      "webflow",
      "figma",
      "javascript",
      "wordpress",
      "css",
    ];

    skills.forEach((skill, index) => {
      tl.to(`#${skill}`, {
        opacity: 1,
        filter: "blur(0px)",
        delay: index === 0 ? 0 : -0.3,
      });
    });

    return () => {
      // Cleanup Lenis and GSAP instances on component unmount
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Container>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Skills</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div id="main-gc">
          <div className="main-section d-flex">
            <div className="skills d-flex">
              <h2 id="figma">Figma</h2>
              <h2 id="adobe">Adobe XD</h2>
              <h2 id="html">HTML</h2>
              <h2 id="css">CSS</h2>
              <h2 id="javascript">JavaScript</h2>
              <h2 id="webflow">WebFlow</h2>
              <h2 id="wordpress">Wordpress</h2>
              <h2 id="seo">SEO</h2>
              <h2 id="digital">Digital Marketing</h2>
              <h2 id="logo">Logo & Branding</h2>
              <h2 id="animation">Animation and 3D</h2>
              <h2 id="social">Social Media Design</h2>
              <h2 id="reels">Reels for Instagram</h2>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Skills;
