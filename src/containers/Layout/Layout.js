import React, { Component } from "react";
import Home from "../Home/Home";
import "../Layout/Layout.css";
import Navbar from "../../components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

import Register from "../Register/Register";

//import NewsContainer from "../NewsContainer/NewsContainer";
import Organisations from "../../components/Organisations/Organisations";
import Map from "../../components/Map/Map";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/organisations" component={Organisations} />
          <Route path="/register" component={Register} />
          <Route path="/map" component={Map} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
