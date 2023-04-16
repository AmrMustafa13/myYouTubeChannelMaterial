import React, { useContext } from "react";
import { CountContext } from "../contexts/count";

const ThirdParent = () => {
  const { setCount } = useContext(CountContext);

  const handleIncreament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecreament = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={handleIncreament}>+</button>
      <button onClick={handleDecreament}>-</button>
    </div>
  );
};

export default ThirdParent;
