import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React Router
import { BrowserRouter } from "react-router-dom";

// Apollo & Redux
import { ApolloProvider } from "@apollo/client";
import client from "./Apollo";

// Redux
import store from "./Redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);
