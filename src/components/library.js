import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LibraryList from "./reusable/libraryList";
import CCTP from "./common/cctp";
import CDP from "./common/cdp";

export default class Library extends Component {
  state = {};

  render() {
    let subHeader = "";
    const currentLibrary = this.props.location.pathname.split("/")[2];
    currentLibrary
      ? (subHeader = (
          <h3 className="text-center">
            {currentLibrary.toUpperCase() + " Library"}
          </h3>
        ))
      : (subHeader = "");

    return (
      <div>
        <h1 className="text-center p-2">Library</h1>
        <hr />
        <React.Fragment>{subHeader}</React.Fragment>
        <Switch>
          <Route path={`/library/cdp`} component={CDP} />
          <Route path={`/library/cctp`} component={CCTP} />
          <Route path={`/library`} component={LibraryList} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}
