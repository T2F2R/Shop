import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './header/Header';
import Footer from './footer/Footer';
import './products_detail.css';

const Products_detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost/get_product.php?id=${id}`);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Ошибка при получении продукта:", error);
        setError("Ошибка при загрузке продукта.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <>
    <Header />
      <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.image_url} alt={product.name} />
        <p>{product.price} руб</p>
        <p>{product.description}</p>
      </div>
    <Footer />
    </>
  );
};

export default Products_detail;