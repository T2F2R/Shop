import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                // Если токен отсутствует, перенаправляем на страницу входа
                window.location.href = "/sign_in";
                return;
            }

            try {
                const response = await axios.get("http://localhost/get_products.php", {
                    headers: {
                        Authorization: token, // Отправка токена в заголовке
                    },
                });
                setProducts(response.data);
            } catch (error) {
                console.error("Ошибка при получении продуктов:", error);
                if (error.response && error.response.status === 401) {
                    // Если сервер вернул 401, перенаправляем на вход
                    window.location.href = "/login";
                }
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
            <Header />
            <div>
                <ul className="product-list">
                    {products.map((product) => (
                        <li key={product.product_id}>
                            <Link to={`/products/${product.product_id}`}>
                                <h2>{product.name}</h2>
                                <img src={product.image_url} alt={product.name} />
                                <h2>{product.price} руб</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Products;