import React from "react";
//import Organisations from "../Organisations/Organisations";
//import Register from "../../containers/Register/Register";
//import News from "../News/News";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import img1 from "../Navbar/download.jpeg";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <img class="navbar-brand" src={img1} alt="logo"></img>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link className="nav-link text-white ml-12" to="/organisations">
              Organisations List
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-white ml-12" to="/register">
              Register Your Organisation
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-white ml-12" to="/news">
              CoronoVirus Live Cases - INDIA
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
