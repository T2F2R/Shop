import './promo.css'
import promoImg from '../../img/header-img.jpeg';

const Promo = () => {
    return (
		<section className="promo">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span class="highlight">
								<span>СКИДКИ</span>
							</span>
							ДО   
							<span class="highlight highlight--yellow">
								<span>70%</span>
							</span>
						</div>
						<div className="promo__desc">
							Только качественные бренды!
						</div>
						<div className="promo__btn-wrapper">
							<a href="#!" className="promo__btn">
								Купить 
							</a>
						</div>
					</div>
					<div className="promo__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Promo;