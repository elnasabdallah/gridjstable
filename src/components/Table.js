import React, { useEffect, useState, useRef } from "react";
import { Grid, _ } from "gridjs-react";

import { RowSelection } from "gridjs-selection";
import { dataSet } from "../data";

const Table = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    setData(dataSet);
    const gridjsInstance = gridRef.current.getInstance();
    // gridjsInstance.on("rowSelect", (...args) =>
    //   console.log("row: " + args, args)
    // );
    const checkboxPlugin = gridjsInstance.config.plugin.get("myCheckbox");
    // checkboxPlugin.props.store.on("updated", (state) => {
    //   console.log(state);
    // });

    console.log(
      gridjsInstance.on("rowClick", (...args) =>
        console.log("row: " + args, args)
      )
    );
    if (checkboxPlugin.props.store) {
      console.log(checkboxPlugin.props.store.callbacks.updated);
    }
    // checkboxPlugin.on("rowSelect", function (state, prevState) {
    //   console.log("checkbox updated", state, prevState);
    // });
  }, [data]);

  const handleCheck = (e, id) => {
    const obj = {
      id: id,
      notes: elemRef.current[`${id}2`].value,
    };
    setFormData([...formData, obj]);
    console.log(elemRef.current[`${id}2`]);
  };
  const gridRef = useRef();
  const elemRef = useRef({});
  const refinedData = [];
  data.forEach((item) => {
    refinedData.push([
      item.name,
      item.email,
      _(
        <select
          className="form-select"
          aria-label="Default select example"
          ref={(el) => (elemRef.current[`${item.id}1`] = el)}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      ),
      _(
        <input
          type="text"
          className="form-control"
          ref={(el) => (elemRef.current[`${item.id}2`] = el)}
          defaultValue={
            elemRef.current[`${item.id}2`]
              ? elemRef.current[`${item.id}2`].value
              : ""
          }
        />
      ),
      _(
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
          onChange={(e) => handleCheck(e, item.id)}
        />
      ),
    ]);
  });

  return (
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-12">
        <Grid
          columns={[
            "Name",
            "Email",
            "dropdown",
            "input",
            {
              id: "myCheckbox",
              name: "Select",
              plugin: {
                // install the RowSelection plugin
                component: RowSelection,
                // RowSelection config
                props: {
                  // use the "email" column as the row identifier
                  id: (row) => row.cell(2).data,
                },
              },
            },
          ]}
          data={refinedData}
          pagination={{
            enabled: true,
            limit: 8,
          }}
          search={true}
          ref={gridRef}
        />
      </div>
    </div>
  );
};

export default Table;
