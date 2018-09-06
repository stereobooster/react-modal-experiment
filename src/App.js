import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Form from "./components/Form";
import FullScreenOne from "./components/FullScreenOne";
import FullScreenTwo from "./components/FullScreenTwo";
import FullScreenThree from "./components/FullScreenThree";
import FullScreenFour from "./components/FullScreenFour";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <nav>
          <Link to="/">v1</Link> | <Link to="v2">v2</Link>|{" "}
          <Link to="v3">v3</Link> | <Link to="v4">v4</Link>
        </nav>
        <Router>
          <Form path="/" FullScreenModal={FullScreenOne} version="v1" />
          <Form path="v2" FullScreenModal={FullScreenTwo} version="v2" />
          <Form path="v3" FullScreenModal={FullScreenThree} version="v3" />
          <Form path="v4" FullScreenModal={FullScreenFour} version="v4" />
        </Router>
      </div>
    );
  }
}

export default App;
