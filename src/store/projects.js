import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },

  reducers: {
    projectsRequested: (projects, action) => {
      projects.loading = true;
    },

    projectsReceived: (projects, action) => {
      projects.list = action.payload;
      projects.loading = false;
      projects.lastFetch = Date.now();
    },

    projectsRequestFailed: (projects, action) => {
      projects.loading = false;
    },
    // action => action handler
    projectAdded: (projects, action) => {
      projects.list.push(action.payload);
    },

    projectCompleted: (projects, action) => {
      const index = projects.list.findIndex(
        (project) => project.project_id === action.payload.project_id
      );
      projects.list[index].completion_date = new Date().toDateString();
    },

    projectUpdated: (projects, action) => {
      const index = projects.list.findIndex(
        (project) => project.project_id === action.payload.project_id
      );
      projects.list[index] = action.payload;
    },
  },
});

export const {
  projectAdded,
  projectsRequested,
  projectsReceived,
  projectsRequestFailed,
  projectCompleted,
  projectUpdated,
} = slice.actions;

export default slice.reducer;

//**** Action Creators ****//
const url = "/projects";

export const loadProjects = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.projects;
  if (lastFetch) {
    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < 10) return;
  }

  return dispatch(
    apiCallBegan({
      url,
      onStart: projectsRequested.type,
      onSuccess: projectsReceived.type,
      onFailure: projectsRequestFailed.type,
    })
  );
};

export const addProject = (project) =>
  apiCallBegan({
    url,
    method: "post",
    data: project,
    onSuccess: projectAdded.type,
  });
export const UpdateProject = (project) =>
  apiCallBegan({
    url: url + "/" + project.project_id,
    method: "put",
    data: project,
    onSuccess: projectUpdated.type,
  });

export const CompleteProject = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: { completion_date: new Date().toJSON() },
    onSuccess: projectCompleted.type,
  });

//Selectors
export const getPastProjects = createSelector(
  (state) => state.entities.projects,
  (projects) => projects.list.filter((project) => project.completion_date)
);

export const getCurrentProjects = createSelector(
  (state) => state.entities.projects,
  (projects) => projects.list.filter((project) => !project.completion_date)
);
