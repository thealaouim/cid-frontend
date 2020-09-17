import React from "react";
export default function CDPForm(props) {
  const { data, onChange } = props;
  return (
    <div className="col-md-8 card p-3">
      <div className="row mb-2">
        <h3 className="col-md-8 font-weight-normal">Section Information</h3>
        <div className="col-md-4">
          <button className="btn btn-primary float-right ml-2">Save</button>
          <button className="btn btn-primary float-right ">Preview</button>
        </div>
      </div>

      <form>
        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Code
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              name="key"
              onChange={(e) => onChange(e)}
              placeholder="Section code"
              value={data.key}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              name="title"
              placeholder="Title"
              onChange={(e) => onChange(e)}
              value={data.title}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Unit
          </label>
          <div className="col-sm-10">
            <select
              className="custom-select"
              name="unit"
              onChange={(e) => onChange(e)}
              id="inputGroupSelect01"
            >
              <option defaultValue>{data.unit}</option>
              <option value="u">U</option>
              <option value="m">m</option>
              <option value="m2">m2</option>
              <option value="m3">m3</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Unit Price
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control form-control-sm"
              name="Uprice"
              placeholder="ex: 50"
              onChange={(e) => onChange(e)}
              value={data.Uprice}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Quantity
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control form-control-sm"
              name="quantity"
              placeholder="Title"
              onChange={(e) => onChange(e)}
              value={data.quantity}
            />
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control form-control-sm"
              rows="8"
              name="description"
              placeholder="Title"
              onChange={(e) => onChange(e)}
              value={data.description}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
