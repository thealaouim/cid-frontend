import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompleteProject, loadProjects } from "../../store/projects";
import InfoForm from "../reusable/infoForm";

export default function ProjectInfo(props) {
  const project_id = props.match.params.id;

  //Getting the specific project info
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjects());
  }, []);
  const projects = useSelector((state) => state.entities.projects.list);

  const projectList = projects.filter(
    (project) => project.project_id == project_id
  );

  const project_info = projectList[0];

  return (
    <Fragment>
      <div>Project Info</div>
      <div className="row col-md-10 mx-auto">
        <InfoForm project={project_info} project_id={project_id} />
      </div>
    </Fragment>
  );
}
