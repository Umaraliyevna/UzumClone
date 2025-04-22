import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store, persistedStore } from "./redux/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
