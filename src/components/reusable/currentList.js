import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function CurrentList(props) {
  const { data } = props;

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
                    Creation date: :{" "}
                    <Moment format="YYYY/MM/DD">{item.creation_date}</Moment>
                  </p>
                  <p className="card-text">Owner: (to modify)</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated:{" "}
                      <Moment fromNow ago>
                        {item.last_edit_date}
                      </Moment>{" "}
                      ago
                    </small>
                  </p>
                </div>
              </div>
              <div
                id="listButton"
                className="col-md-4 text-center align-self-center"
              >
                <Link
                  to={`/current-projects/${item.project_id}`}
                  type="button"
                  className="btn btn-primary col-md-12"
                >
                  Open
                </Link>
                <hr />
                <Link
                  to={`/current-projects/${item.project_id}/collaborators`}
                  type="button"
                  className="btn btn-primary col-md-12"
                >
                  Collaborators
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
