import React from "react";
import DatePicker from "./DatePicker";
import FruitPicker from "./FruitPicker";

const VersionOne = () => (
  <div>
    <form>
      <div className="field">
        <label htmlFor="input1">Text input</label>{" "}
        <input type="text" id="input1" />
      </div>
    </form>
    <FruitPicker />
    <p className="spacer">Scroll down</p>
    <DatePicker />
    <p className="spacer" />
  </div>
);

export default VersionOne;
