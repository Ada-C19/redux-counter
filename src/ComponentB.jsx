import { useSelector } from "react-redux";

const ComponentB = () => {
  const value = useSelector((state) => state.counter.value);
  return (
    <h2>Count is {value}</h2>
  )
}

export default ComponentB;