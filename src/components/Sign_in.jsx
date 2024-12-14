import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import axios from "axios";
import styles from "./sign.module.css";

const Sign_in = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost/login.php", {
                username,
                password,
            });

            if (response.data.success) {
                localStorage.setItem("authToken", "your_secret_token"); // Сохранение токена
                window.location.href = "/products"; // Перенаправление на страницу продуктов
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Ошибка авторизации:", error);
        }
    };

    return (
        <>
            <Header />
            <div className={styles["auth-container"]}>
                <h1 className={styles["auth-title"]}>Вход</h1>
                <form className={styles["auth-form"]} onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles["auth-input"]}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles["auth-input"]}
                    />
                    <button type="submit" className={styles["auth-button"]}>
                        Войти
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Sign_in;
