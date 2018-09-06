import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import VersionOne from "./components/VersionOne";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <nav>
          <Link to="/">v1</Link> | <Link to="v2">v2</Link>|{" "}
          <Link to="v3">v3</Link> | <Link to="v4">v4</Link>
        </nav>
        <Router>
          <VersionOne path="/" />
          <VersionOne path="v2" />
          <VersionOne path="v3" />
          <VersionOne path="v4" />
        </Router>
      </div>
    );
  }
}

export default App;
