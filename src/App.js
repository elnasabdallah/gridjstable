import { useEffect } from "react";
import Table from "./components/Table";
import Save from "./components/Save";
import { fetchData } from "./redux/actions/mainDataActions";
import { useDispatch } from "react-redux";
import Hello from "./components/Table2";
import Table2 from "./components/Table2";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  });
  return (
    <div className="container-fluid">
      {/* <Table /> */}
      <Save />
      <Table2 />
      <Hello />
    </div>
  );
}

export default App;
