import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4 offset-4 mt-5 d-flex gap-3">
          <Link to='/counters' className="btn btn-info">Homework 1, 2</Link>
          <Link to='/users' className="btn btn-info">Homework 3</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
