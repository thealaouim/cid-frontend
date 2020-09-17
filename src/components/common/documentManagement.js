import { Component } from "react";

export default class DocumentManagement extends Component {
  //*****  reusable functions for CDP and CCTP ****//

  handleDragEnter = (info) => {
    console.log(info);
  };
  handleDrop = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };

    const data = [...this.state.data];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.push(dragObj);
      });
    } else if (
      (info.node.children || []).length > 0 && // Has children
      info.node.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      data,
    });
  };
  handleSelect = (info, e) => {
    const selected = e.node;
    this.setState({ section: selected });
  };
  //event was e in input of original
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      section: {
        ...prevState.section,
        [name]: value,
      },
    }));
  };

  handleAdd = () => {
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    //new object
    const addKey = this.state.section.key;
    const data = [...this.state.data];
    const item = this.state.section;

    let CDPObj = {
      title: "New",
      key: item.key + `-${item.children.length + 1}`,
      unit: "U",
      Uprice: 0,
      quantity: 0,
      description: "",
      children: [],
    };
    let CCTPObj = {
      title: "New",
      key: item.key + `-${item.children.length + 1}`,
      description: "",
      children: [],
    };
    let newObj = {};
    this.state.currentDocument === "cdp"
      ? (newObj = CDPObj)
      : (newObj = CCTPObj);

    // insert the new section
    if (addKey === 0) {
      data.push(newObj);
    } else {
      loop(data, addKey, (item) => {
        item.children = item.children || [];
        // where to insert
        item.children.push(newObj);
      });
    }
    this.setState({
      data,
    });
  };

  handleDelete = () => {
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };

    const delKey = this.state.section.key;
    const data = [...this.state.data];

    // Find dragObject

    loop(data, delKey, (item, index, arr) => {
      arr.splice(index, 1);
    });

    this.setState({ data });
  };
  ///*****end of reusable functions for CDP and CCTP***///

  //*****reusable functions for BPU */
  columns = [
    {
      title: "Code",
      field: "key",
      width: "10%",
      type: "string",
      sorting: false,
      editable: "onAdd",
    },
    {
      title: "Title",
      field: "title",
      width: "50%",
      type: "string",
      sorting: false,
    },
    {
      title: "Unit",
      field: "unit",
      width: "10%",
      lookup: { U: "U", m: "m", m2: "m2", m3: "m3", kg: "kg" },
      sorting: false,
    },
    {
      title: "Unit price",
      field: "Uprice",
      width: "15%",
      type: "numeric",
      sorting: false,
    },

    {
      title: "Quantity",
      field: "quantity",
      type: "numeric",
      width: "15%",
      sorting: false,
    },
  ];
  async onRowAdd(newData) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        const data = [...this.state.data];
        data.push(newData);
        this.setState({ data: data });
      }, 600);
    });
  }
  async onRowUpdate(newData, oldData) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          const data = [...this.state.data];
          data[data.indexOf(oldData)] = newData;
          this.setState({ data: data });
        }
      }, 600);
    });
  }

  async onRowDelete(oldData) {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        const data = [...this.state.data];
        data.splice(data.indexOf(oldData), 1);
        this.setState({ data: data });
      }, 600);
    });
  }
}
