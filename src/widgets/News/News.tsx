"use client";
import {useEffect, useRef, useState} from "react";
import $ from "jquery";
import {NewCard, INewDTO} from "./NewCard";
import {Slider} from "@/features";
import {ContainerLayout} from "@/entities/layouts/ContainerLayout";
import {SubtitleLayout} from "@/entities";

export const News = ({news}: { news: INewDTO[] }) => {
    const slider = useRef(null);
    const [currentNew, setNew] = useState(0);

    useEffect(() => {
        if (!slider.current)
            return
        const outerWidth = $(slider.current).children(".slide").outerWidth(true) as number;
        const width = currentNew * -outerWidth
        $(slider.current).css("transform", `translate(${width}px, 0)`)
    }, [currentNew])

    return <SubtitleLayout text={"Новости"}>
        <ContainerLayout>
            <Slider>
                {news.map((item, index) => <NewCard card={item} key={index}/>)}
            </Slider>
        </ContainerLayout>
    </SubtitleLayout>
}