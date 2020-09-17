import React from "react";
import MaterialTable from "material-table";

export default function BPUTable(props) {
  const { data, columns, onRowAdd, onRowDelete, onRowUpdate } = props;

  return (
    <div className="col-md-12">
      <MaterialTable
        options={{ padding: "dense" }}
        title="BPU"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) => onRowAdd(newData),
          onRowUpdate: (newData, oldData) => onRowUpdate(newData, oldData),
          onRowDelete: (oldData) => onRowDelete(oldData),
        }}
      />
    </div>
  );
}
