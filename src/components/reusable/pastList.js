import React from "react";
import { Link } from "react-router-dom";

export default function PastList(props) {
  const data = props.data;
  return (
    <div className="row justify-content-center">
      {data.map((item) => (
        <div
          key={item.project_id}
          className="col-md-10"
          style={{ margin: "0 10px" }}
        >
          <div className="card mb-3 col-md-12" style={{ paddingBottom: 10 }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.project_name}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Completion date {item.completion_date}
                    </small>
                  </p>
                </div>
              </div>
              <div
                id="listButton"
                className="col-md-4 text-center align-self-center"
              >
                <Link
                  to={`/past-projects/${item.project_id}`}
                  type="button"
                  className="btn btn-dark col-md-12"
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
