import React from "react";
import "./App.css";

import Component from "@reach/component-component";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ScrollLocky } from "react-scroll-locky";
import FullScreen from "mobile-safari-fullscreen";

class App extends React.Component {
  render() {
    return (
      <Component initialState={{ showDialog: false }}>
        {({ state, setState }) => (
          <div className="content">
            <form>
              <input />
            </form>

            <p>Scroll down</p>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <button onClick={() => setState({ showDialog: true })}>
              Show Dialog
            </button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {state.showDialog && (
              <FullScreen
                classNames={{ iosFix: "iosFix" }}
                isOpen={state.showDialog}
              >
                <Dialog className="fullscreen">
                  <ScrollLocky>
                    <form>
                      <input />
                    </form>
                    <button onClick={() => setState({ showDialog: false })}>
                      Close
                    </button>
                    <p>
                      imagine long list from combox, like downshift
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      ...more
                    </p>
                  </ScrollLocky>
                </Dialog>
              </FullScreen>
            )}
          </div>
        )}
      </Component>
    );
  }
}

export default App;
