import {Link} from "react-router-dom";

export default function CarouselCard(params) {
    const image = params['image']
    const type = params['type']
    const id = params['id']
    return <div className={'carousel-card'}>
        <Link to={type+id} id={id}>
            <img src={image} alt=" image"/>
        </Link>
        <Link to={type}><button>Click me!</button></Link>
    </div>

}