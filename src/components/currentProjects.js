import React, { Component } from "react";
import CurrentList from "./reusable/currentList";
import { loadProjects, getCurrentProjects } from "../store/projects";
import { connect } from "react-redux";

class CurrentProjects extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center p-2">Current Projects</h1>
        <CurrentList data={this.props.projects} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ projects: getCurrentProjects(state) });
const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
  getCurrentProjects: () => dispatch(getCurrentProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProjects);
