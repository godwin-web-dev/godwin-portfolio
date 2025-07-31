import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header" id="portfolio">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <section id="projects" class="project">
          <div class="project-item-container">
            <div class="project-box">
              <a
                href="https://im-iphone15.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/iphone-15-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://im-iphone15.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3> iPhone 15 Landing Page </h3>
                <h5>React.js &nbsp; Tailwind CSS &nbsp; ThreeJS GSAP </h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://www.olufemivictor.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://www.olufemivictor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3>Folio for Machine Learning Engineer</h3>
                <h5>
                  Next.js &nbsp; Tailwind CSS &nbsp; Typescript GSAP Framer
                  Motion
                </h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://shop-context.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/Learn-Context-by-Building-a-Shopping-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://shop-context.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3> Minimal Ecommerce shop </h3>
                <h5>React.js &nbsp; Styled components &nbsp; Context API </h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://weirdos-nft.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/The-Weirdos-NFT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://weirdos-nft.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3> Weirdos NFT </h3>
                <h5>React.js &nbsp; Styled components &nbsp; GSAP</h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://lofi-playlist.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/react-music-player"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://lofi-playlist.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3> Lofi Music App </h3>
                <h5>React.js &nbsp; SCSS</h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://fisayofosudo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/fisayo-fosudo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://fisayofosudo.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3> Fisayo Fosudo </h3>
                <h5>HTML/SCSS &nbsp; JS &nbsp; GSAP</h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://israelmitolu.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/premier-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://israelmitolu.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3> israelmitolu </h3>
                <h5>HTML/SCSS &nbsp; JS &nbsp; GSAP</h5>
              </div>
            </div>

            <div class="project-box">
              <a
                href="https://digitaly.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-box__absolute-link"
              ></a>
              <div class="project-box__link">
                <a
                  href="https://github.com/israelmitolu/Digitaly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://digitaly.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="open-outline"></ion-icon>
                </a>
              </div>
              <div class="project-box__content">
                <h3>Digitaly</h3>
                <h5>React.js &nbsp; Tailwind CSS &nbsp; Framer motion</h5>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;
