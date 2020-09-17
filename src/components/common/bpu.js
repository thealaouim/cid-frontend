import React from "react";
import DocumentManagement from "./documentManagement";
import BPUTable from "../reusable/bpuTable";

export default class BPU extends DocumentManagement {
  //data: content of the tree structure
  state = {
    data: [
      {
        title: "1-workflow",
        key: 1,
        unit: "m",
        Uprice: 34,
        quantity: 1200,
        description: "amazing workflow description",
      },
      {
        title: "grounds",
        key: 1.1,
        unit: "m2",
        Uprice: 12,
        quantity: 1300,
        description: "amazing grounds description",
      },
      {
        title: "step 2 of project",
        key: 2,
        unit: "kg",
        Uprice: 3,
        quantity: 30,
        description: "amazing step 2",
      },
      {
        title: "2.1 section",
        key: 2.1,
        unit: "kg",
        Uprice: 3,
        quantity: 30,
        description: "amazing section",
      },
    ],
  };

  constructor() {
    super();
    this.onRowAdd = this.onRowAdd.bind(this);
    this.onRowUpdate = this.onRowUpdate.bind(this);
    this.onRowDelete = this.onRowDelete.bind(this);
  }

  render() {
    return (
      <div>
        <div className="row col-md-10 mx-auto">
          <BPUTable
            columns={this.columns}
            data={this.state.data}
            onRowAdd={this.onRowAdd}
            onRowUpdate={this.onRowUpdate}
            onRowDelete={this.onRowDelete}
          />
        </div>
      </div>
    );
  }
}
