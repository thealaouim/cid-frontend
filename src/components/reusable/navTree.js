import React from "react";
import { Tree } from "antd";
export default function NavTree(props) {
  const {
    expandedKeys,
    onDragEnter,
    onDrop,
    onSelect,
    data,
    onAdd,
    onDelete,
  } = props;

  return (
    <div className="col-md-4 pr-2 ">
      <div className="card p-3">
        <h3 className="text-center mb-2 font-weight-normal">Sections</h3>
        <Tree
          className="draggable-tree overflow-auto card"
          style={{ height: "450px" }}
          defaultExpandedKeys={expandedKeys}
          draggable
          blockNode
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          onSelect={onSelect}
          treeData={data}
        />
        <div className="d-flex flex-row-reverse pt-2">
          <button className="btn btn-primary btn-sm" onClick={onAdd}>
            Add
          </button>
          <button className="btn btn-danger mr-3 btn-sm" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
