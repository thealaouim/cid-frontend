import React, { Component } from "react";
import NewProjectForm from "./reusable/newProjectForm";
import { addProject } from "../store/projects";
import { connect } from "react-redux";

class NewProject extends Component {
  state = {
    project_name: "",
    city: "",
    country: "",
    project_code: "",
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  addProject = () => {
    this.props.addProject(this.state);
    window.location = "/current-projects";
  };

  render() {
    return (
      <div>
        <h1 className="text-center p-2">New Project</h1>
        <hr />
        <NewProjectForm
          formData={this.state}
          onChange={this.handleChange}
          onSubmit={this.addProject}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
