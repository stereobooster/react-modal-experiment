import React from "react";
import Component from "@reach/component-component";
import Downshift from "downshift";
import "./FruitPicker.css";
import fruits from "./fruits";

const stateReducer = (state, changes) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.blurInput:
      return {
        ...changes,
        inputValue: state.inputValue
      };
    default:
      return changes;
  }
};

export default ({ FullScreenModal }) => (
  <Component initialState={{ showDialog: false, value: "" }}>
    {({ state, setState }) => (
      <div>
        <div className="field">
          <button onClick={() => setState({ showDialog: true })}>
            Select fruit
          </button>{" "}
          {state.value}
        </div>
        {state.showDialog && (
          <FullScreenModal show={state.showDialog}>
            <button
              onClick={() => setState({ showDialog: false })}
              className="close"
              tabIndex={2}
            >
              Close
            </button>
            <Downshift
              onChange={({ value }) => setState({ showDialog: false, value })}
              itemToString={item => (item ? item.value : "")}
              stateReducer={stateReducer}
              selectedItem={{ value: state.value }}
            >
              {({
                getInputProps,
                getItemProps,
                getMenuProps,
                inputValue,
                highlightedIndex,
                selectedItem
              }) => (
                <div>
                  <input
                    {...getInputProps()}
                    placeholder="type a fruit"
                    className="fruitInput"
                    tabIndex={1}
                  />
                  <ul {...getMenuProps()} className="fruitList">
                    {inputValue
                      ? fruits
                          .filter(item =>
                            item.value.includes(inputValue.toLowerCase())
                          )
                          .map((item, index) => (
                            <li
                              className="fruitItem"
                              {...getItemProps({
                                key: item.value,
                                index,
                                item,
                                style: {
                                  backgroundColor:
                                    highlightedIndex === index
                                      ? "lightgray"
                                      : "white",
                                  fontWeight:
                                    selectedItem === item ? "bold" : "normal"
                                }
                              })}
                            >
                              {item.value}
                            </li>
                          ))
                      : null}
                  </ul>
                </div>
              )}
            </Downshift>
          </FullScreenModal>
        )}
      </div>
    )}
  </Component>
);
