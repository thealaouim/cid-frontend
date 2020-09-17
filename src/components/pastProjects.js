import React, { Component } from "react";
import { getPastProjects, loadProjects } from "../store/projects";
import { connect } from "react-redux";

import PastList from "./reusable/pastList";

class PastProjects extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center p-2">Past Projects</h1>
        <PastList data={this.props.pastProjects} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  pastProjects: getPastProjects(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
  getPastProjects: () => dispatch(getPastProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PastProjects);
