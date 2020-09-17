import React from "react";
export default function NewProjectForm(props) {
  const { project_name, city, country, project_code } = props.formData;
  const { onChange } = props;
  return (
    <div className="justify-content-center row ">
      <form className="col-10">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Project name"
            name="project_name"
            value={project_name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Country"
            name="country"
            value={country}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Project code"
            name="project_code"
            value={project_code}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group text-center">
          <label htmlFor="formGroupExampleInput ">Create project using:</label>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  BPU
                </label>
              </div>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Similar CDP
                </label>
              </div>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="radio"
                    aria-label="Radio button for following text input"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with radio button"
                defaultValue="Empty project"
              />
            </div>
          </div>
        </div>
        <hr />

        <button
          type="button"
          className="btn btn-primary col-md-12"
          onClick={props.onSubmit}
        >
          Create project
        </button>
      </form>
    </div>
  );
}
