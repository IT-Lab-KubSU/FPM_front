"use client";
import Image from "next/image";
import {useEffect} from "react";
import Sphere from "@/components/Sphere/Sphere";
import {easing} from "jquery";

interface IPartnerProps {
    title: string
    image: string
    addClassContainer?: string
    addClassPartner?: string
}

const data = [
    {
        "title": "ТИНЬКОФФ",
        "image": "https://acdn.tinkoff.ru/static/documents/d6400f9d-63bb-4076-b887-7aa967baf8a9.svg"
    }, {
        "title": "ПРОДОКТОРОВ",
        "image": "https://prodoctorov.ru/static/img/PD_big2.png"
    }, {
        "title": "ГАЗПРОМ",
        "image": "https://companieslogo.com/img/orig/GAZP.ME-56a2073a.png?t=1593293052"
    }, {
        "title": "РОСНЕФТЬ",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Rosneft_201x_logo.svg/2560px-Rosneft_201x_logo.svg.png"
    }, {
        "title": "ГАЗПРОМ",
        "image": "https://companieslogo.com/img/orig/GAZP.ME-56a2073a.png?t=1593293052"
    }, {
        "title": "МТС",
        "image": "https://moskva.mts.ru/upload/images/logo/new/mts_logo_cmyk.png"
    }, {
        "title": "МТС",
        "image": "https://moskva.mts.ru/upload/images/logo/new/mts_logo_cmyk.png"
    }, {
        "title": "CarXTechnologies",
        "image": "https://companieslogo.com/img/orig/GAZP.ME-56a2073a.png?t=1593293052"
    }
]

const Partner = ({addClassContainer, addClassPartner, title, image}: IPartnerProps) => {
    return (
        <div className={`partner-container ${addClassContainer}`}>
            <div
                className={`partner bg-zinc-50/40 px-6 backdrop-blur-sm drop-shadow-md py-4 rounded-3xl flex items-center ${addClassPartner}`}>
                <Image src={image} alt={title} width={40} height={40} unoptimized={true}/>
                <span className="ml-4 font-semibold text-zinc-800">{title}</span>
            </div>
        </div>)
}

export default function Partners() {
    useEffect(() => {
        document.querySelectorAll<HTMLElement>(".partner-container").forEach((el) => {
            const x = Math.floor(Math.random() * 40 - 20);
            const y = Math.floor(Math.random() * 40 - 20);

            const z = Math.floor(Math.random() * 4 + 1);
            el.style.zIndex = `${z}`;

            el.animate([
                // keyframes
                {transform: `translate3D(${x}px, ${y}px, 0)`},
                {transform: `translate3D(${-x}px, ${-y}px, 0)`},
                {transform: `translate3D(${x}px, ${y}px, 0)`},
            ], {
                // timing options
                duration: 12000,
                easing: "linear",
                iterations: Infinity
            });
        });
        document.querySelectorAll<HTMLElement>(".partner").forEach((el) => {
            const startDeg = Math.floor(Math.random() * 120 - 60) / Math.floor(el.getBoundingClientRect().width / 100) + 1;
            const deg = Math.floor(Math.random() * 5 + 2);

            console.log(Math.floor(el.getBoundingClientRect().width / 100))
            el.animate([
                // keyframes
                {transform: `rotate(${deg + startDeg}deg)`},
                {transform: `rotate(${-deg + startDeg}deg)`},
                {transform: `rotate(${deg + startDeg}deg)`},
            ], {
                // timing options
                duration: 10000,
                easing: "cubic-bezier(0.55, 0.06, 0.54, 0.89)",
                iterations: Infinity
            });
        });
    }, [])
    return (<>
        <div className="container mx-auto relative max-w-[1240px] my-32">
            <div className="flex justify-between mt-8 mb-2 lg:px-[5rem]">
                {data.slice(0, 4).map((item) =>
                    <><Partner title={item.title} image={item.image}/></>
                )}
            </div>
            <Sphere addClass={"left-[40%] top-[-1rem]"} size={350} bgColor={"rgb(227,57,57)"} opacity={.2}/>
            <h2 className="relative text-center text-7xl font-extrabold" style={{zIndex: 2}}>
                Наши партнеры
            </h2>
            <div className="flex justify-between mb-8 mt-2 lg:px-[5rem]">
                {data.slice(4, 8).map((item) =>
                    <><Partner title={item.title} image={item.image}/></>
                )}
            </div>
        </div>
    </>)
}