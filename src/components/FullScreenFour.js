import React from "react";
import "./FullScreenOne.css";
import "./FullScreenTwo.css";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { ScrollLocky } from "react-scroll-locky";

import FullScreen from "mobile-safari-fullscreen";

export default ({ children, show }) => (
  <FullScreen classNames={{ iosFix: "iosFix" }} isOpen={show}>
    <Dialog className="FullScreenOne FullScreenTwo">
      <ScrollLocky>{children}</ScrollLocky>
    </Dialog>
  </FullScreen>
);
