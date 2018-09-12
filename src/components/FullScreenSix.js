import React from "react";
import "./FullScreenOne.css";
import { ScrollLocky } from "react-scroll-locky";
import FocusLock from "react-focus-lock";
import posed from "react-pose";

const Box = posed.div({
  zoomedIn: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true,
    opacity: 1
  },
  zoomedOut: {
    position: "static",
    width: "auto",
    height: "auto",
    flip: true,
    opacity: 0
  }
});

export default ({ children, show }) => (
  <Box pose={show ? "zoomedIn" : "zoomedOut"}>
    {show ? (
      <ScrollLocky>
        <FocusLock>
          <div className="FullScreenOne">{children}</div>
        </FocusLock>
      </ScrollLocky>
    ) : null}
  </Box>
);
