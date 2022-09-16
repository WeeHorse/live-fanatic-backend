import CarouselCard from "./CarouselCard";
import {useEffect, useState} from "react";

export default function Carousel(props) {
    const [index, setIndex] = useState(0)
    const items = props['items']
    const max = items.length - 1
    const [item, setItem] = useState(items[0])
    const incrementIndex = () => {
        console.log('current index:'+index)
        if (index >= max) setIndex(0)
        else setIndex(index + 1)
    }
    const decrementIndex = () => {
        console.log('current index:'+index)
        if (index === 0) setIndex(max)
        else setIndex(index - 1)
    }
    useEffect(() => {
        setItem(items[index])

        console.log('new index:'+index)
    }, [index])
    if (!item) return <></>
    return <>
        <CarouselCard image={item["image"]} type={props['type']} id={item.id}/>
        <button onClick={incrementIndex}>Next Item!</button>
        <button onClick={decrementIndex}>Previous Item!</button>
    </>

}