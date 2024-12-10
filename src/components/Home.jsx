import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const images = [
        "https://img.freepik.com/premium-photo/black-electrical-drill-white-background_722820-3157.jpg?w=1060",
        "https://avatars.mds.yandex.net/get-mpic/5326769/img_id2995602635910105012.jpeg/orig",
        "https://omsk.wadoo.ru/upload/iblock/c6b/c6bb1e343bcfd8d9bfde82d393bfe9b2.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <>
            <div className="navigation">
                <Link to="/">
                    <div>Главная</div>
                </Link>
                <Link to="/products">
                    <div>Товары</div>
                </Link>
                <Link to="/about">
                    <div>О нас</div>
                </Link>
            </div>
            <div className="image-carousel">
                <img src={images[currentImageIndex]} alt={`Drill ${currentImageIndex + 1}`} />
            </div>
            <div className="footer">
                © 2024 Все права защищены
            </div>
        </>
    );
}

export default Home;