import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Products_detail from './components/Products_detail';
import About from './components/About';
import Sign_in from './components/Sign_in';
import Register from './components/Register';
import ProtectedRoute from './ProtectedRoute';
import './styles/common.css'
import './styles/reset.css'

const App = () => {
    return (
      <>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Главная страница */}
              <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} /> {/* Страница со списком товаров */}
              <Route path="/products/:id" element={<Products_detail />} /> {/* Страница детали товара */}
              <Route path='/about' element={<About />} /> {/* Страница о нас */}
              <Route path='/sign_in' element={<Sign_in />} /> {/* Страница авторизации */}
              <Route path="/register" element={<Register />} /> {/* Страница регистрации */}
            </Routes>
          </div>
        </Router>
      </>
    );
};

export default App;
