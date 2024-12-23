import './header.css'
import { Link } from "react-router-dom";
import logoImg from "../../img/icon.svg";


function Header () {
    return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logoImg} alt="Logo" width="40px" />
                        <span>Инструменты</span>
					</div>
					<nav className="header__nav">
                        <ul>
                            <li>
                                <Link to = {"/"}>Главная</Link>
                            </li>
                            <li>
                                <Link to = {"/products"}>Каталог</Link>
                            </li>
                            <li>
                                <Link to = {"/cart"}>Корзина</Link>
                            </li>
                            <li>
                                <Link to = {"/sign_in"} className='header__nav-btn'>Войти</Link>
                            </li>
                        </ul>
                    </nav>
				</div>
			</div>
		</header>
	);
}

export default Header;