import "date-fns";
import React, { useEffect } from "react";
import { CompleteProject, UpdateProject } from "../../store/projects";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch } from "react-redux";

export default function InfoForm(props) {
  const projectList = props.project;
  const project_info = projectList || {};
  const dispatch = useDispatch();

  //functions
  const [project, setProject_info] = React.useState(project_info);
  useEffect(() => {
    setProject_info(project_info);
  }, [projectList]);

  const handleChange = (e) => {
    const target = e.target;
    if (target) {
      const value = target.value;
      const name = target.name;

      setProject_info({
        ...project,
        [name]: value,
      });
    } else {
      setProject_info({
        ...project,
        deadline: e.toJSON(),
      });
    }
  };
  const handleSave = async () => {
    await dispatch(UpdateProject(project));
  };

  const handleComplete = async () => {
    await dispatch(CompleteProject(props.project_id));
    window.location = "/";
  };

  return (
    <div className="card row col-12 p-4">
      <form className="col-12">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Title"
              name="project_name"
              value={project.project_name}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Code</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Code"
              name="project_code"
              value={project.project_code}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">City</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="City"
              name="city"
              value={project.city}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Country</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Country"
              name="country"
              value={project.country}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Client name</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Client name"
              name="client_name"
              value={project.client_name}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Client Address</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              placeholder="Client address"
              name="client_address"
              value={project.client_address}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Deadline</label>
          <div className="col-sm-10">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                name="deadline"
                value={project.deadline}
                onChange={(e) => handleChange(e)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>

        <div className="form-group row d-flex flex-row-reverse">
          <button
            className="btn btn-dark p-2 m-2"
            onClick={() => handleComplete()}
          >
            Complete project
          </button>
          <button
            className="btn btn-primary p-2 m-2"
            onClick={() => handleSave()}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
