import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Brands from './brands/Brands';
import Promo from './promo/Promo';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <>
        <Header />
        <Promo />
        <Brands />
        <Footer />
        </>
    );
}

export default Home;