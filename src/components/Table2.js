import React, { useEffect, useState } from "react";
import { _ } from "gridjs-react";
import { Grid } from "gridjs";
import { RowSelection } from "gridjs-selection";
import { useSelector, useDispatch } from "react-redux";

import { fetchData } from "../redux/actions/mainDataActions";
export const refinedData = [];
const Table2 = () => {
  const [state, setstate] = useState([]);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData);
    grid.on("ready", () => {
      // find the plugin with the give plugin ID
      const checkboxPlugin = grid.config.plugin.get("myCheckbox");

      // subscribe to the store events
      checkboxPlugin.props.store.on("updated", function (state, prevState) {
        console.log("checkbox updated", state, prevState);
        setstate(state);
      });
    });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // subscribe to the store events
    console.log(state);
  };
  data.forEach((item) => {
    refinedData.push([
      item.name,
      item.email,
      _(
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      ),
      _(
        <input type="text" className="form-control" defaultValue={item.name} />
      ),
      _(
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckChecked"
        />
      ),
    ]);
  });

  const grid = new Grid({
    columns: [
      {
        name: "Name",
        formatter: (cell) => `Name: ${cell}`,
      },
      "Email",
      "phone",
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
    ],
    sort: true,
    data: refinedData,
  });

  useEffect(() => {
    grid.render(document.getElementById("wrapper"));
  }, []);
  return (
    <>
      <div id="wrapper" />{" "}
      <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </>
  );
};

export default Table2;

// const ExampleComponent = () => {
//   const grid = new Grid({
//     search: {
//       enabled: true,
//       placeholder: "Search...",
//     },
//     sort: true,
//     pagination: {
//       enabled: true,
//       limit: 5,
//       summary: false,
//     },
//     columns: ["Id", "Tag", "Name"],
//     data: [],
//   });

//   useEffect(() => {
//     grid.render(document.getElementById("wrapper"));
//   }, []);

//   return <div id="wrapper" />;
// };
// export default ExampleComponent;
