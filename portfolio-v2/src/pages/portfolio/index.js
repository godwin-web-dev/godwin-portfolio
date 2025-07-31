import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, projectsList } from "../../content_option"; // Import projectsList
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const title = "Projects";

  return (
    <HelmetProvider>
      <Helmet title={`${title} | ${meta.siteTitle}`} />

      <section className="segment">
        <div className="container">
          <div className="project-preview">
            {projectsList.map((project) => (
              <div className="card anchored large" key={project.name}>
                <div>
                  <time>{project.date}</time>
                  <a
                    className="card-header"
                    style={{
                      padding: "0",
                      marginBottom: "0",
                      color: "var(--text-color)",
                      backgroundColor: "transparent",
                      borderBottom: "none",
                    }}
                    href={
                      project.url ||
                      `https://github.com/username/${project.slug}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                  <p>{project.tagline}</p>
                </div>
                <div className="links anchored">
                  {project.url && (
                    <a
                      className="button small flex"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo <FaExternalLinkAlt />
                    </a>
                  )}
                  <a
                    className="button small flex"
                    href={`https://github.com/username/${project.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Portfolio;
