import shopSvg from '../assets/shop.svg';
import { Link } from 'react-router-dom';


export default function BuyButton() {
    //TODO: LINK BUY BUTTON TO STRIPE
    return <>
        <Link className='buy-button' to="">
            <img src={shopSvg} id="buy" alt="buy button" />
            Buy tickets now
        </Link>
    </>


}