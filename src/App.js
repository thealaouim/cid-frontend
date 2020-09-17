import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Home from "./components/home";
import CurrentProjects from "./components/currentProjects";
import NewProject from "./components/newProject";
import PastProjects from "./components/pastProjects";
import Library from "./components/library";
import Project from "./components/project";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/current-projects/:id" component={Project} />
          <Route path="/past-projects/:id" component={Project} />
          <Route path="/library" component={Library} />
          <Route
            path="/past-projects"
            render={(props) => <PastProjects {...props} />}
          />
          <Route
            path="/new-project"
            render={(props) => <NewProject {...props} />}
          />
          <Route
            path="/current-projects"
            render={(props) => <CurrentProjects {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
