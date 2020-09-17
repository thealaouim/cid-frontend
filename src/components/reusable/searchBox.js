import React from "react";

export default function SearchBox() {
  return (
    <div className="row d-flex justify-content-center">
      <input
        className="form-control form-control-lg col-10"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
