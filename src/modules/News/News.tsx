"use client";
import {useEffect, useRef, useState} from "react";
import $ from "jquery";
import {NewsControlBtn} from "@/modules/News/NewsControlBtn";
import {NewCard} from "@/modules/News/NewCard";
import Slider from "@/components/Slider/Slider";
import ContainerLayout from "@/layouts/ContainerLayout";

export default function News({news}: { news: INewDTO[] }) {
    const NUM_OF_ELEMENTS = 3;
    const slider = useRef(null);
    const [currentNew, setNew] = useState(0);

    useEffect(() => {
        if (!slider.current)
            return
        const outerWidth = $(slider.current).children(".slide").outerWidth(true) as number;
        const width = currentNew * -outerWidth
        $(slider.current).css("transform", `translate(${width}px, 0)`)
    }, [currentNew])

    return <ContainerLayout>
        <Slider>
            {news.map((item, index) => <>
                <NewCard card={item} key={index}/>
            </>)}
        </Slider>
    </ContainerLayout>
}