import React from "react";
import { Link } from "react-router-dom";

export default function LibraryList() {
  const Libraries = [
    {
      title: "CDP Library",
      userID: "15",
      lastUpdate: "14/01/2020",
    },

    {
      title: "CCTP Library",
      userID: "1234",
      lastUpdate: "13/02/2020",
    },
  ];

  return (
    <div className="row justify-content-center">
      {Libraries.map((e) => (
        <div key={e.title} className="col-md-10" style={{ margin: "0 10px" }}>
          <div className="card mb-3 col-md-12" style={{ paddingBottom: 10 }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      last Update: {e.lastUpdate}
                    </small>
                  </p>
                </div>
              </div>
              <div
                id="listButton"
                className="col-md-4 text-center align-self-center"
              >
                <Link
                  type="button"
                  className="btn btn-dark col-md-12"
                  to={`/library/${e.title.split(" ")[0].toLowerCase()}`}
                >
                  Open
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
