"use client"
import {
    MouseEventHandler,
    useEffect,
    useRef,
    useState,
} from "react";
import $ from "jquery";

function Dot({active, onClick}: { active: boolean, onClick: MouseEventHandler }) {
    return <>
        <span onClick={onClick}
              className={`h-1 w-full rounded-3xl block duration-500 ${active ? "bg-[#5C83E7]" : "bg-zinc-300"}`}></span>
    </>
}

function SliderButton({text, onClick}: { text: string, onClick: MouseEventHandler }) {
    return <button onClick={onClick}
                   className={"duration-500 font-semibold rounded-md ease-in-out py-3 px-7 hover:text-white hover:bg-[#5C83E7] text-zinc-800 drop-shadow-md bg-white"}>{text}</button>
}

export default function Slider({children}: { children: React.ReactNode[]}) {
    const length = children.length;
    const OFFSET = 50;
    const NUM_OF_ELEMENTS = Math.min(3, length);
    const slider = useRef(null);
    const [currentSlide, setSlide] = useState(0);
    const [currentTouch, setTouch] = useState({currentX: 0, timestamp: 0});

    function nextSlide(step = 1) {
        setSlide((prevState) => Math.min(prevState + step, length - NUM_OF_ELEMENTS))
    }

    function prevSlide(step = 1) {
        setSlide((prevState) => Math.max(prevState - step, 0))
    }

    function swipeEnd(event: any) {
        const currentX = currentTouch.currentX;
        const currentTimestamp = currentTouch.timestamp;
        const touch = event.changedTouches[0];
        const speed = Math.abs(touch.screenX - currentX) / (event.timeStamp - currentTimestamp)
        const step = speed < 5 ? 1 : NUM_OF_ELEMENTS
        if (touch.screenX + OFFSET > currentX)
            return prevSlide(step)
        if (touch.screenX - OFFSET < currentX)
            return nextSlide(step)
    }

    function swipeStart(event: any) {
        const touch = event.touches[0];
        setTouch({
            currentX: touch.screenX,
            timestamp: event.timeStamp
        })
    }

    function scroll(event: any) {
        if (!event.shiftKey)
            return
        const delta = event.deltaY
        if (delta > 0)
            return prevSlide()
        if (delta < 0)
            return nextSlide()
    }

    useEffect(() => {
        if (!slider.current)
            return
        const outerWidth = $(slider.current).children(".slide").outerWidth(true) as number;
        const width = currentSlide * -outerWidth
        $(slider.current).css("transform", `translate(${width}px, 0)`)
    }, [currentSlide])

    return <>
        <div className={"container mx-auto h-full"}>

            <div onWheel={scroll} onTouchStart={swipeStart} onTouchEnd={swipeEnd} className={"overflow-hidden"}>
                <div ref={slider} className={"slider my-4 flex flex-nowrap duration-500 ease-in-out"}>
                    {children.map((child) => <>
                        <div className={"slide mx-2 delay-700"}>
                            {child}
                        </div>
                    </>)}
                </div>
            </div>
            <div className={"flex flex-row flex-nowrap items-center justify-center gap-2 px-4"}>
                {children.map((child, index) => <><Dot onClick={() => {
                    setSlide(Math.min(index, length - NUM_OF_ELEMENTS))
                }} active={currentSlide <= index && index < currentSlide + NUM_OF_ELEMENTS} key={index}/></>)}
                <div className={"flex gap-2 px-2"}>
                    <SliderButton text={"<"} onClick={() => prevSlide(NUM_OF_ELEMENTS)}/>
                    <SliderButton text={">"} onClick={() => nextSlide(NUM_OF_ELEMENTS)}/>
                </div>
            </div>
        </div>
    </>
}