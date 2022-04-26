import { Component } from "react";

// Components
import Header from "./Components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Listing from "./Pages/Listing";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { Main } from "./CommonStyles";

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

            <Route path="/not-found" element={<>Not Found</>} />

            <Route path="/*" element={<Navigate to="/not-found" replace={true} />} />
          </Routes>
        </Main>
      </>
    );
  }
}

export default App;
