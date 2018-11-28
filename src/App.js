import React, { Component } from 'react';

import { Provider } from "redux-zero/react";
import store from "./redux/store";

import CounterClass from './CounterClass';
import CounterFunc from './CounterFunc';

const borda = {"border": "solid", "padding": "10px", "margin": "10px"}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>

          <div style={borda}>
            Testando redux
          </div>

          <div style={borda}>
            <CounterClass />
          </div>

          <div style={borda}>
            <CounterFunc />
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
