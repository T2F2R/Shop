import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Products_detail from './components/Products_detail';
import Sign_in from './components/Sign_in';
import Register from './components/Register';
import Cart from './components/Cart';
import './styles/common.css'
import './styles/reset.css'

const App = () => {
    return (
      <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Главная страница */}
              <Route path="/products" element={<Products />} /> {/* Страница со списком товаров */}
              <Route path="/products/:id" element={<Products_detail />} /> {/* Страница детали товара */}
              <Route path='/sign_in' element={<Sign_in />} /> {/* Страница авторизации */}
              <Route path="/register" element={<Register />} /> {/* Страница регистрации */}
              <Route path="/cart" element={<Cart />} /> {/* Страница регистрации */}
            </Routes>
          </div>
        </Router>
      </>
    );
};

export default App;