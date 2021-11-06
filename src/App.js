import { useEffect } from "react";
import Table from "./components/Table";
import Save from "./components/Save";
import { fetchData } from "./redux/actions/mainDataActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  });
  return (
    <div className="container-fluid">
      <Table />
      <Save />
    </div>
  );
}

export default App;
