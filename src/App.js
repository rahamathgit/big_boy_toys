import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Collections from "./Pages/Collections";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import bike_banner from "./Components/Assets/banner_bike.jpg";
import car_banner from "./Components/Assets/banner_car.jpg";
import kid_banner from "./Components/Assets/banner_kid.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Collections/>}/>
          <Route path="/bikes" element={<ShopCategory banner={bike_banner} category="bike"/>}/>
          <Route path="/cars" element={<ShopCategory banner={car_banner} category="car"/>}/>
          <Route path="/kidstoys" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="Product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;