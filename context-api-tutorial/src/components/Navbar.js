import React, { useContext } from "react";
import { CountContext } from "../contexts/count";

const Navbar = () => {
  const { count } = useContext(CountContext);

  return (
    <div className="navbar">
      <h1>{count}</h1>
    </div>
  );
};

export default Navbar;
