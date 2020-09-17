import React, { Component } from "react";
import SearchBox from "./reusable/searchBox";
import LastOpenedProjects from "./reusable/lastOpenedProjects";
import { loadProjects, getCurrentProjects } from "../store/projects";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.loadProjects();
  }
  render() {
    return (
      <div>
        <h1 className="text-center p-2">HomePage</h1>
        <hr />
        <SearchBox />
        <hr />
        <LastOpenedProjects data={this.props.projects} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ projects: getCurrentProjects(state) });
const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(loadProjects()),
  getCurrentProjects: () => dispatch(getCurrentProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
