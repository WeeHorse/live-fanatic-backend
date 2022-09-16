import Carousel from "./Carousel.jsx";
import useFetch from "../hooks/useFetch.jsx";

export default function HomePage() {

    const {
        data: concerts
    } = useFetch('data/concert_details')

    if (!concerts) return <></>

    const onlineConcerts = concerts.filter(concert => concert['name'] === 'ONLINE')
    const offlineConcerts = concerts.filter(concert => concert['name'] !== 'ONLINE')

    return (
        <>
            <h1>Homepage</h1>
            <Carousel items={onlineConcerts} type={'/event/'}/>
            <Carousel items={offlineConcerts} type={'/event/'}/>
        </>
    );
}
