import React from "react";
import { Component } from "react";
import "../components/Nav.scss";
import SearchBox from "./Searchbox";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div id="nav-logo">
            <h3>RoboDevs</h3>
          </div>
          <div className="nav-links">
            <div>
              <a href="#" className="nav-link">
                Home
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                Projects
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                About
              </a>
            </div>
            <div>
              <a href="#" className="nav-link">
                Enquiries
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
