import React from "react";
import Component from "@reach/component-component";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ScrollLocky } from "react-scroll-locky";
import FullScreen from "mobile-safari-fullscreen";
import InfiniteCalendar from "@blacklane/react-infinite-calendar";
import "@blacklane/react-infinite-calendar/styles.css";
import WindowSize from "@reach/window-size";

const DatePicker = () => (
  <Component initialState={{ showDialog: false, value: new Date() }}>
    {({ state, setState }) => (
      <div>
        <div className="field">
          <button onClick={() => setState({ showDialog: true })}>
            Select date
          </button>{" "}
          {`${state.value.getDate()}.${state.value.getMonth()}.${state.value.getFullYear()}`}
          {/* <input
            type="text"
            readOnly
            value="Select date"
            onClick={() => setState({ showDialog: true })}
            onKeyDown={e => {
              if (
                e.key !== "Tab" &&
                e.key !== "Shift" &&
                e.key !== "Alt" &&
                e.key !== "Meta" &&
                e.key !== "CapsLock"
              )
                setState({ showDialog: true });
            }}
          /> */}
        </div>
        {state.showDialog && (
          <FullScreen
            classNames={{ iosFix: "iosFix" }}
            isOpen={state.showDialog}
          >
            <Dialog className="fullscreen">
              <ScrollLocky>
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
              </ScrollLocky>
            </Dialog>
          </FullScreen>
        )}
      </div>
    )}
  </Component>
);

export default DatePicker;
