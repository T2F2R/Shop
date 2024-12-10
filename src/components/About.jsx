import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
    return(
        <>
        <div>
          <ul>
            <Link to={`/`}>
              <li>
                Главная
              </li>
            </Link>
            <Link to={`/products`}>
              <li>
                Товары
              </li>
            </Link>
            <Link to={`/about`}>
              <li>
                О нас
              </li>
            </Link>
          </ul>
        </div>
        <div>
            <p>Это курсовой проект по теме "Магазин инструментов" студента МиВЛГУ Короткова Арсения Михайловича группы ПИН-122.</p>
        </div>
        <div>
            © 2024 Все права защищены
        </div>
        </>
    );
}

export default About;