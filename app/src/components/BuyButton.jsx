import shopSvg from '../assets/shop.svg';
import { Link } from 'react-router-dom';


export default function BuyButton() {

    return <>
        <Link className='buy-btn' to="/some-buy-page">
            <img src={shopSvg} id="buy" alt="buy button" />
            Buy tickets now
        </Link>
    </>


}