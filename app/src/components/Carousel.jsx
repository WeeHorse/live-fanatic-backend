import CarouselCard from "./CarouselCard";
import {useEffect, useState} from "react";
import leftArrow from "../assets/chevron_left.svg";
import rightArrow from "../assets/chevron_right.svg";

export default function Carousel(props) {

    const items = props['items'], max = items.length - 1

    const [index, setIndex] = useState(0)

    const [item, setItem] = useState(items[0])


    function incrementIndex() {
        if (index >= max) {
            setIndex(0)
            return 0
        } else {
            setIndex(index + 1)
            return index + 1
        }
    }

    const decrementIndex = () => {
        if (index === 0) setIndex(max)
        else setIndex(index - 1)
    }

    useEffect(() => {
        setItem(items[index])
        console.log(index)
    }, [index])

    if (!item) return <></>

    return <div className={'carousel'}>
        <a className={'scroll-button'} onClick={decrementIndex} href={'#slide-' + index}>
            <img src={leftArrow} alt="<-"/>
        </a>
        {items.map((item, itemIndex) => {
            return <a className={'index'} onClick={() => {
                setIndex(itemIndex)
            }} href={'#slide-' + itemIndex}>{itemIndex}</a>
        })}
        <div className="slides">
            {items.map((item, itemIndex) =>
                <CarouselCard image={item["image"]} type={props['type']} id={itemIndex} itemId={item.id}/>
            )}
        </div>
        <a className={'scroll-button'} onClick={incrementIndex} href={'#slide-' + index}>
            <img src={rightArrow} alt=""/>
        </a>
    </div>
}