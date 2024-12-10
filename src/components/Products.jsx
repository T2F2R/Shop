import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost/get_products.php');
                setProducts(response.data);
            } catch (error) {
                console.error("Ошибка при получении продуктов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

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
            <div>
                <h1>Список продуктов</h1>
                <ul className="product-list"> {/* Apply the product-list class */}
                    {products.map((product) => (
                        <li key={product.product_id}>
                            <Link to={`/products/${product.product_id}`}>
                                <h2>{product.name}</h2>
                                <img src={product.image_url} alt={product.name} /> {/* Added alt text */}
                                <h2>{product.price} руб</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                © 2024 Все права защищены
            </div>
        </>
    );
};

export default Products;