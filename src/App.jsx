import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Products_detail from './components/Products_detail';
import About from './components/About';
import './App.css'

const App = () => {
    return (
      <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Главная страница */}
              <Route path="/products" element={<Products />} /> {/* Страница со списком товаров */}
              <Route path="/products/:id" element={<Products_detail />} /> {/* Страница детали товара */}
              <Route path='/about' element={<About />} /> {/* Страница о нас */}
            </Routes>
          </div>
        </Router>
      </>
    );
};

export default App;
