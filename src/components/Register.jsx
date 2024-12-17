import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import axios from "axios";
import styles from "./sign.module.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost/register.php", {
                username,
                password,
            });

            if (response.data.success) {
                alert("Регистрация успешна! Теперь вы можете войти.");
                window.location.href = "/sign_in";
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Ошибка регистрации:", error);
        }
    };

    return (
        <>
            <Header />
            <div className={styles["auth-container"]}>
                <h1 className={styles["auth-title"]}>Регистрация</h1>
                <form className={styles["auth-form"]} onSubmit={handleRegister}>
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
                        Зарегистрироваться
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Register;