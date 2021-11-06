import React from "react";
import { Grid, _ } from "gridjs-react";
import { useSelector } from "react-redux";

const Table = () => {
  const { data } = useSelector((state) => state.data);

  const refinedData = [];
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
      _(<input type="text" className="form-control" />),
      _(
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
      ),
    ]);
  });
  return (
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-12">
        <Grid
          columns={["Name", "Email", "dropdown", "input", "Actions"]}
          data={refinedData}
          pagination={{
            enabled: true,
            limit: 8,
          }}
          search={true}
        />
      </div>
    </div>
  );
};

export default Table;
