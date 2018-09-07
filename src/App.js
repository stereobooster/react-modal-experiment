import React from "react";
import "./App.css";
import { Router, Link, Redirect } from "@reach/router";
import Form from "./components/Form";
import FullScreenOne from "./components/FullScreenOne";
import FullScreenTwo from "./components/FullScreenTwo";
import FullScreenThree from "./components/FullScreenThree";
import FullScreenFour from "./components/FullScreenFour";

const path = "react-modal-experiment";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <nav>
          <Link to={path}>v1</Link> | <Link to={`${path}/v2`}>v2</Link>|{" "}
          <Link to={`${path}/v3`}>v3</Link> | <Link to={`${path}/v4`}>v4</Link>
        </nav>
        <Router>
          <Redirect from="/" to={path} />
          <Redirect from={`${path}/v1`} to={path} />
          <Form path={path} FullScreenModal={FullScreenOne} version="v1" />
          <Form
            path={`${path}/v2`}
            FullScreenModal={FullScreenTwo}
            version="v2"
          />
          <Form
            path={`${path}/v3`}
            FullScreenModal={FullScreenThree}
            version="v3"
          />
          <Form
            path={`${path}/v4`}
            FullScreenModal={FullScreenFour}
            version="v4"
          />
        </Router>
      </div>
    );
  }
}

export default App;
