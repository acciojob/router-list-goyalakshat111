import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/items/1">Item 1</Link>
        </li>
        <li>
          <Link to="/items/2">Item 2</Link>
        </li>
        <li>
          <Link to="/items/3">Item 3</Link>
        </li>
      </ul>
    </>
  );
};

export default List;
