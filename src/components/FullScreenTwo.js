import React from "react";
import "./FullScreenOne.css";
import "./FullScreenTwo.css";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export default ({ children }) => (
  <Dialog className="FullScreenOne FullScreenTwo">{children}</Dialog>
);
