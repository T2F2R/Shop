import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./cart.css";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                window.location.href = "/sign_in";
                return;
            }

            try {
                const response = await axios.get("http://localhost/get_cart.php", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Ответ от сервера:", response.data);
                if (response.data.success) {
                    setCartItems(response.data.products || []);
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error("Ошибка при получении корзины:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    const handleRemoveItem = async (productId) => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            window.location.href = "/sign_in";
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost/remove_from_cart.php",
                { product_id: productId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("Ответ от сервера при удалении:", response.data);
            if (response.data.success) {
                setCartItems((prevItems) =>
                    prevItems.filter((item) => item.product_id !== productId)
                );
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Ошибка при удалении товара из корзины:", error);
        }
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }
    
    return (
        <>
            <Header />
            <div className="cart-container">
                <h1>Корзина</h1>
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li className="cart-item" key={item.product_id}>
                            <div>
                                <h2>{item.name}</h2>
                                <p>Количество: {item.quantity}</p>
                                <p>Цена: {item.price} руб</p>
                            </div>
                            <button onClick={() => handleRemoveItem(item.product_id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Cart;