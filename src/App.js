// React
import { Component } from "react";

// Components
import { Main } from "./CommonStyles";
import Header from "./Components/Header";
import Listing from "./Pages/Listing";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

// React Router
import { Routes, Route, Navigate } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<Listing />} />

            <Route path="/category/:category" element={<Listing />} />

            <Route path="/product/:id" element={<Product />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/not-found" element={<NotFound />} />

            <Route path="/*" element={<Navigate to="/not-found" replace={true} />} />
          </Routes>
        </Main>
      </>
    );
  }
}

export default App;
