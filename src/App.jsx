import { useDispatch } from "react-redux";
import { decremented, incremented } from "./features/counter-slice";

import ComponentA from "./ComponentA";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button onClick={() => dispatch(incremented())}>
        increment count
      </button>
      <button onClick={() => dispatch(decremented())}>
        decremented count
      </button>
      <ComponentA />
    </div>
  );
}

export default App;
