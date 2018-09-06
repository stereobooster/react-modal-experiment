import React from "react";
import "./FullScreenOne.css";
import "./FullScreenTwo.css";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { ScrollLocky } from "react-scroll-locky";

export default ({ children }) => (
  <Dialog className="FullScreenOne FullScreenTwo">
    <ScrollLocky>{children}</ScrollLocky>
  </Dialog>
);
