import React, { Component } from "react";
import Nav from "../components/Nav";
import CardList from "../components/CardList";
import "../container/RoboApp.scss";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { Component } from "react";
// import { robots } from "./robots";
import SearchBox from "../components/Searchbox";

class RoboApp extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h3> Loading...</h3>;
    } else {
      return (
        <div>
          <div className="nav-container">
            <Nav />
            <SearchBox searchChange={this.onSearchChange} />
          </div>

          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default RoboApp;
