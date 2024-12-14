import './brands.css'
import interskol from '../../img/interskol.png'
import metabo from '../../img/Metabo.png'
import bosh from '../../img/bosh.png'

const Brands = () => {
    return (<section className="brands">
        <div className="container">
            <ul className="brands__list">
                <li><a href="#!"><img src={interskol} alt="" /></a></li>
                <li><a href="#!"><img src={metabo} alt="" /></a></li>
                <li><a href="#!"><img src={bosh} alt="" /></a></li>
            </ul>
        </div>
    </section>);
}

export default Brands;