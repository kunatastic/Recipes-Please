import React from "react";
import "./Nav.css";
import Search from "./Search";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <>
      <div className="container">
        <nav>
          <Link to="/">
            <div className="Logo">Don't Cook</div>
          </Link>
          <div>
            <Search {...props} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
