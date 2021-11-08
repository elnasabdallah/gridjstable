import React from "react";
import { Grid } from "gridjs-react";

const GridJs = ({ refinedData }) => {
  return (
    <Grid
      columns={["Name", "Email", "dropdown", "input", "Actions"]}
      data={refinedData}
      pagination={{
        enabled: true,
        limit: 8,
      }}
      search={true}
    />
  );
};
function equalProps(pre, next) {
  return pre.refinedData.length === next.refinedData.length;
}
const MemTable = React.memo(GridJs, equalProps);

export default MemTable;
