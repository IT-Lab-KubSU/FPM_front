"use client";
import Image from "next/image";
import {useEffect, useRef} from "react";
import {ContainerLayout, Subtitle} from "@/entities";
import {Sphere} from "@/shared";
import Marquee from "react-fast-marquee";

interface IPartnerDTO {
    title: string
    image: string
    className?: string
}

const Partner = ({className, title, image}: IPartnerDTO) => {
    const partnerContainer = useRef<HTMLDivElement>(null);
    const partner = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (window.innerWidth < 1024)
            return
        if (partnerContainer !== null) {
            const el = partnerContainer.current as HTMLDivElement;
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
        }
        if (partner !== null) {
            const el = partner.current as HTMLDivElement;
            const startDeg = Math.floor(Math.random() * 120 - 60) / Math.floor(el.getBoundingClientRect().width / 100) + 1;
            const deg = Math.floor(Math.random() * 5 + 2);

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
        }
    }, [partner, partnerContainer])
    return (
        <div className={className} ref={partnerContainer}>
            <div
                ref={partner}
                className={`partner h-full bg-zinc-50/40 backdrop-blur-sm drop-shadow-md p-4 rounded-3xl flex items-center gap-1.5`}>
                <Image src={image} alt={title} width={35} height={35} unoptimized={true}/>
                <span className="font-medium text-sm text-zinc-800">{title}</span>
            </div>
        </div>)
}

export const Partners = ({partners}: { partners: IPartnerDTO[] }) => {
    return <>
        <div className={"md:hidden"}>
            <Subtitle text={"Наши партнеры"}/>
        </div>
        <ContainerLayout>
            <div className="grid select-none relative lg:my-48 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {partners.slice(0, 4).map((item, index) =>
                        <Partner className={"md:flex"} title={item.title} image={item.image} key={index}/>
                    )}
                </div>
                <h2 className="hidden relative text-center text-4xl md:text5xl lg:text-6xl font-extrabold my-8 lg:block"
                    style={{zIndex: 2}}>
                    Наши партнеры
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {partners.slice(4, 8).map((item, index) =>
                        <Partner className={"md:flex"} title={item.title} image={item.image} key={index + 4}/>
                    )}
                </div>

                <div className={"z-0 absolute w-full"}>
                    <Sphere className={"mx-auto"} size={350} bgColor={"rgb(57,57,200)"} opacity={.15}/>
                </div>
            </div>
        </ContainerLayout>
    </>
}