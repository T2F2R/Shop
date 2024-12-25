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
                window.location.href = "/sign_in";
                setLoading(false);
                return;
            }

            console.log("Токен: ", token);

            try {
                const response = await axios.get("http://localhost/get_products.php", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Ответ от сервера:", response.data);
                if (response.data.success) {
                    setProducts(response.data.products);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Ошибка при получении продуктов:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = async (product_id) => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            alert("Вы не авторизованы!");
            return;
        }
    
        try {
            const response = await axios.post(
                "http://localhost/add_to_cart.php",
                { product_id, quantity: 1 },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert(response.data.message);
        } catch (error) {
            console.error("Ошибка добавления в корзину:", error);
        }
    };
    
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
                            <button onClick={() => addToCart(product.product_id)}>Добавить в корзину</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Products;