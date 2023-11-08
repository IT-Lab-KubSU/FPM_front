"use client";
import Image from "next/image";
import {useEffect} from "react";
import Sphere from "@/components/Sphere/Sphere";
import ContainerLayout from "@/layouts/ContainerLayout";
import {IPartnerDTO} from "@/dto";

const Partner = ({addClassContainer, addClassPartner, title, image}: IPartnerDTO) => {
    return (
        <div className={`partner-container ${addClassContainer}`}>
            <div
                className={`partner h-full bg-zinc-50/40 backdrop-blur-sm drop-shadow-md p-4 rounded-3xl flex items-center gap-1.5 ${addClassPartner}`}>
                <Image src={image} alt={title} width={35} height={35} unoptimized={true}/>
                <span className="font-medium text-sm text-zinc-800">{title}</span>
            </div>
        </div>)
}

export default function Partners({partners}: { partners: IPartnerDTO[] }) {
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
    return <ContainerLayout>
        <div className="select-none relative my-48 mx-auto">
            <div className="flex justify-around gap-2">
                {partners.slice(0, 4).map((item, index) =>
                    <><Partner title={item.title} image={item.image} key={index}/></>
                )}
            </div>
            <div className={"z-0 absolute w-full"}>
                <Sphere addClass={"mx-auto"} size={350} bgColor={"rgb(57,57,200)"} opacity={.2}/>
            </div>
            <h2 className="relative text-center text-4xl md:text5xl lg:text-6xl font-extrabold my-8" style={{zIndex: 2}}>
                Наши партнеры
            </h2>
            <div className="flex justify-around gap-2">
                {partners.slice(4, 8).map((item, index) =>
                    <><Partner title={item.title} image={item.image} key={index + 4}/></>
                )}
            </div>
        </div>
    </ContainerLayout>
}