import React from "react";
import "./FullScreenOne.css";
import { ScrollLocky } from "react-scroll-locky";
import FocusLock from "react-focus-lock";

export default ({ children }) => (
  <ScrollLocky>
    <FocusLock>
      <div className="FullScreenOne">{children}</div>
    </FocusLock>
  </ScrollLocky>
);
