import React from "react";
import Component from "@reach/component-component";
import InfiniteCalendar from "@blacklane/react-infinite-calendar";
import "@blacklane/react-infinite-calendar/styles.css";
import WindowSize from "@reach/window-size";

const DatePicker = ({ FullScreenModal }) => (
  <Component initialState={{ showDialog: false, value: new Date() }}>
    {({ state, setState }) => (
      <div>
        <div className="field">
          <button onClick={() => setState({ showDialog: true })}>
            Select date
          </button>{" "}
          {`${state.value.getDate()}.${state.value.getMonth()}.${state.value.getFullYear()}`}
        </div>
        {state.showDialog && (
          <FullScreenModal show={state.showDialog}>
            <button
              onClick={() => setState({ showDialog: false })}
              className="close"
            >
              Close
            </button>
            <WindowSize>
              {size => (
                <InfiniteCalendar
                  displayOptions={{
                    showHeader: false,
                    showWeekdays: true,
                    showTodayHelper: false,
                    showOverlay: false
                  }}
                  min={new Date()} // Minimum month to render
                  minDate={new Date()} // Minimum selectable date
                  selected={state.value}
                  locale={{
                    weekStartsOn: 1
                  }}
                  width={size.width}
                  height={size.height - 30 - 50}
                  onSelect={value => setState({ showDialog: false, value })}
                  tabIndex={-1}
                />
              )}
            </WindowSize>
          </FullScreenModal>
        )}
      </div>
    )}
  </Component>
);

export default DatePicker;
