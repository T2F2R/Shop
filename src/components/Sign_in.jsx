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
                localStorage.setItem("authToken", response.data.token);
                window.location.href = "/products";
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Ошибка авторизации:", error);
            alert("Не удалось выполнить вход. Проверьте данные и попробуйте снова.");
        }
    };

    const handleRegisterRedirect = () => {
        window.location.href = "/register";
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
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles["auth-input"]}
                        required
                    />
                    <button type="submit" className={styles["auth-button"]}>
                        Войти
                    </button>
                    <button
                        type="button"
                        className={styles["auth-register-button"]}
                        onClick={handleRegisterRedirect}
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Sign_in;