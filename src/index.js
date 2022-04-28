import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS
import "./index.css";

// App Component
import App from "./App";

// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./Apollo";

// Redux
import store from "./Redux/store";
import { Provider } from "react-redux";

// React Router
import { BrowserRouter } from "react-router-dom";

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
