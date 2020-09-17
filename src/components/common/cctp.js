import React from "react";
import NavTree from "../reusable/navTree";
import CCTPForm from "../reusable/cctpForm";
import DocumentManagement from "./documentManagement";

export default class CCTP extends DocumentManagement {
  state = {
    data: [
      {
        title: "1-workflow",
        key: 1,
        unit: "m",
        Uprice: 34,
        quantity: 1200,
        description: "amazing workflow description",

        children: [
          {
            title: "grounds",
            key: 1.1,
            unit: "m2",
            Uprice: 12,
            quantity: 1300,
            description: "amazing grounds description",
            children: [],
          },
        ],
      },
      {
        title: "step 2 of project",
        key: 2,
        unit: "kg",
        Uprice: 3,
        quantity: 30,
        description: "amazing step 2",
        children: [
          {
            title: "2.1 section",
            key: 2.1,
            unit: "kg",
            Uprice: 3,
            quantity: 30,
            description: "amazing section",
            children: [],
          },
        ],
      },
    ],
    expandedKeys: ["0-0", "0-0-0", "0-0-0-0"],
    section: {
      title: "",
      key: 0,
      description: "",
    },
  };
  render() {
    return (
      <div className="row col-md-10 mx-auto">
        <NavTree
          expandedKeys={this.state.expandedKeys}
          onDragEnter={this.handleDragEnter}
          onDrop={this.handleDrop}
          onSelect={this.handleSelect}
          data={this.state.data}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
        />
        <CCTPForm data={this.state.section} onChange={this.handleChange} />
      </div>
    );
  }
}
