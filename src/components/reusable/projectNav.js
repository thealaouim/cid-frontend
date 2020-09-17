import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectNav(props) {
  const { id, pageType, currentDocument } = props;
  const projectNav = ["cdp", "bpu", "cctp", "collaborators", "project-info"];
  let style = "";
  pageType === "current-projects" ? (style = "primary") : (style = "dark");

  return (
    <div className="d-flex justify-content-center">
      <div className="row col-md-10">
        <h2 className="col-md-9">project id:{id}</h2>
        <div className="col-md-3">
          <div className="dropdown">
            <button
              className={`btn btn-outline-${style} dropdown-toggle col-12`}
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {currentDocument && currentDocument.toUpperCase()}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {projectNav.map((section) => (
                <NavLink
                  key={section}
                  className="dropdown-item"
                  to={`/${pageType}/${id}/${section}`}
                >
                  {section.toUpperCase()}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
