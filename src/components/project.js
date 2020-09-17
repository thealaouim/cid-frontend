import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CCTP from "./common/cctp";
import CDP from "./common/cdp";
import BPU from "./common/bpu";
import Collaborators from "./common/collaborators";
import ProjectInfo from "./common/projectInfo";
import ProjectNav from "./reusable/projectNav";

export default class Project extends Component {
  render() {
    const id = this.props.match.params.id;
    const pageType = this.props.match.path.split("/")[1];
    const currentDocument = this.props.location.pathname.split("/")[3];
    const title = pageType.replace("-", " ");
    return (
      <div>
        <h1 className="text-capitalize text-center p-2">{title}</h1>
        <hr />
        <ProjectNav
          id={id}
          pageType={pageType}
          currentDocument={currentDocument}
        />

        <Switch>
          <Route path={`/${pageType}/:id/cdp`} component={CDP} />
          <Route path={`/${pageType}/:id/cctp`} component={CCTP} />
          <Route path={`/${pageType}/:id/bpu`} component={BPU} />
          <Route
            path={`/${pageType}/:id/collaborators`}
            component={Collaborators}
          />
          <Route
            path={`/${pageType}/:id/project-info`}
            component={ProjectInfo}
          />
          <Redirect
            from={`/${pageType}/:id`}
            exact
            to={`/${pageType}/${id}/cdp`}
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}
