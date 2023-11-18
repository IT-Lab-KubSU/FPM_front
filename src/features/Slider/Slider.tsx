"use client"
import {
    MouseEventHandler, ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import $ from "jquery";
import css from './slider.module.scss'
import cn from 'classnames'

function Dot({active, onClick}: { active: boolean, onClick: MouseEventHandler }) {
    return <>
        <span onClick={onClick}
              className={`h-1 w-full rounded-3xl block duration-500 ${active ? "bg-[#5C83E7]" : "bg-zinc-300"}`}></span>
    </>
}

function SliderButton({text, onClick, className}: { text: string, onClick: MouseEventHandler, className?: string}) {
    return <button onClick={onClick}
                   className={"duration-500 font-semibold rounded-md ease-in-out py-3 px-7 hover:text-white hover:bg-[#5C83E7] text-zinc-800 drop-shadow-md bg-white " + className}>{text}</button>
}

export const Slider = ({children}: { children: ReactNode[] }) => {
    const length = children.length;
    // const OFFSET = 50;
    const slider = useRef(null);
    const [numOfElements, setNumOfElements] = useState(Math.min(3, length));
    const [currentSlide, setSlide] = useState(0);
    // const [currentTouch, setTouch] = useState({currentX: 0, timestamp: 0});

    function nextSlide(step = 1) {
        setSlide((prevState) => Math.min(prevState + step, length - numOfElements))
    }

    function prevSlide(step = 1) {
        setSlide((prevState) => Math.max(prevState - step, 0))
    }

    // function swipeEnd(event: any) {
    //     const currentX = currentTouch.currentX;
    //     const currentTimestamp = currentTouch.timestamp;
    //     const touch = event.changedTouches[0];
    //     const speed = Math.abs(touch.screenX - currentX) / (event.timeStamp - currentTimestamp)
    //     const step = speed < 5 ? 1 : numOfElements
    //     if (touch.screenX + OFFSET > currentX)
    //         return prevSlide(step)
    //     if (touch.screenX - OFFSET < currentX)
    //         return nextSlide(step)
    // }
    //
    // function swipeStart(event: any) {
    //     const touch = event.touches[0];
    //     setTouch({
    //         currentX: touch.screenX,
    //         timestamp: event.timeStamp
    //     })
    // }
    //
    // function scroll(event: any) {
    //     if (!event.shiftKey)
    //         return
    //     const delta = event.deltaY
    //     if (delta > 0)
    //         return prevSlide()
    //     if (delta < 0)
    //         return nextSlide()
    // }

    useEffect(() => {
        if (!slider.current)
            return
        const sliderWidth = $(slider.current).outerWidth(true) as number;
        const outerWidth = $(slider.current).children(".slide").outerWidth(true) as number;
        setNumOfElements(Math.floor(sliderWidth / outerWidth))
        const width = currentSlide * -outerWidth
        $(slider.current).css("transform", `translate(${width}px, 0)`)
    }, [currentSlide])

    return <>
        <div className={"container mx-auto h-full"}>
            <div className={cn("slider-box relative my-4", css.sliderBox)}>
                <div className={"overflow-hidden"}>
                    <div ref={slider} className={"slider flex flex-nowrap duration-500 ease-in-out"}>
                        {children.map((child, index) => <>
                            <div className={"slide mx-2 delay-700"} key={index}>
                                {child}
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
            <div className={"grid grid-cols-5 lg:grid-cols-10 xl:grid-cols-12 items-center justify-center gap-2 px-4"}>
                <div className={"order-2 lg:order-1 flex flex-row gap-2 col-span-3 lg:col-span-8 xl:col-span-10"}>
                    {children.map((child, index) => <><Dot onClick={() => {
                        setSlide(Math.min(index, length - numOfElements))
                    }} active={currentSlide <= index && index < currentSlide + numOfElements} key={index}/></>)}
                </div>
                <SliderButton className={"order-1 lg:order-2"} key={"0"} text={"<"} onClick={() => prevSlide(numOfElements)}/>
                <SliderButton className={"order-3 lg:order-3"} key={"1"} text={">"} onClick={() => nextSlide(numOfElements)}/>
            </div>
        </div>
    </>
}