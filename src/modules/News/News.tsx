"use client";
import {useEffect, useRef, useState} from "react";
import $ from "jquery";
import {NewCard} from "@/modules/News/NewCard";
import Slider from "@/components/Slider/Slider";
import ContainerLayout from "@/layouts/ContainerLayout";
import {INewDTO} from "@/dto";

export default function News({news}: { news: INewDTO[] }) {
    const slider = useRef(null);
    const [currentNew, setNew] = useState(0);

    useEffect(() => {
        if (!slider.current)
            return
        const outerWidth = $(slider.current).children(".slide").outerWidth(true) as number;
        const width = currentNew * -outerWidth
        $(slider.current).css("transform", `translate(${width}px, 0)`)
    }, [currentNew])

    return <>
        <ContainerLayout>
            <Slider>
                {news.map((item) => <>
                    <NewCard card={item} key={item.title}/>
                </>)}
            </Slider>
        </ContainerLayout>
    </>
}