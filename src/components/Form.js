import React from "react";
import DatePicker from "./DatePicker";
import FruitPicker from "./FruitPicker";

export default ({ FullScreenModal, version }) => (
  <div>
    <form>
      <p>Version: {version}</p>
      <div className="field">
        <label htmlFor="input1">Text input</label>{" "}
        <input type="text" id="input1" />
      </div>
    </form>
    <FruitPicker FullScreenModal={FullScreenModal} />
    <p className="spacer">Scroll down</p>
    <DatePicker FullScreenModal={FullScreenModal} />
    <p className="spacer" />
  </div>
);
