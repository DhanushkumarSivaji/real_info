import React from "react";
import Routes from "./components/routing/routes";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./components/utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
