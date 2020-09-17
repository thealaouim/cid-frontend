import React from "react";
import { Link } from "react-router-dom";

export default function LastOpenedProjects(props) {
  const LastOpened = props.data;

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-10" style={{ padding: 0 }}>
        <h2>Last opened</h2>

        <div className="row">
          {LastOpened.map((e) => (
            <div key={e.project_id} className="col-md-4" style={{ padding: 5 }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{e.project_name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{e.city}</h6>
                  <p className="card-text">Last Opened: (to modify)</p>
                  <Link to={`/current-projects/${e.project_id}`}>Open</Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={`current-projects/${e.project_id}/collaborators`}>
                    Collaborators
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
