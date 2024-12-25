import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './header/Header';
import Footer from './footer/Footer';
import './products_detail.css';

const Products_detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [author, setAuthor] = useState('');

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

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost/get_reviews.php?id=${id}`);
        if (response.data.success) {
          setReviews(response.data.reviews);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Ошибка при получении отзывов:", error);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  const handleAddReview = async () => {
    try {
      const response = await axios.post('http://localhost/add_review.php', {
        product_id: id,
        author,
        review_text: reviewText,
      });
      if (response.data.success) {
        setReviews((prev) => [
          ...prev,
          { author, review_text: reviewText, created_at: new Date().toISOString() },
        ]);
        setReviewText('');
        setAuthor('');
        alert('Отзыв добавлен');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Ошибка добавления отзыва:", error);
    }
  };

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

        <div className="reviews">
          <h2>Отзывы</h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.author}</strong> ({new Date(review.created_at).toLocaleString()}):</p>
                <p>{review.review_text}</p>
              </div>
            ))
          ) : (
            <p>Отзывов пока нет.</p>
          )}

          <div className="add-review">
            <h3>Добавить отзыв</h3>
            <input
              type="text"
              placeholder="Ваше имя"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              placeholder="Ваш отзыв"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button onClick={handleAddReview}>Добавить</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products_detail;