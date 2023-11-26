"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface IPartnerDTO {
    title: string
    image: string
}

const Partner = ({title, image}: IPartnerDTO) => {
    return (
        <div className={"flex select-none gap-4 items-center justify-center mx-6 py-14"}>
            <Image src={image} alt={title} width={60} height={60} unoptimized={true}/>
            <span className="font-medium text-md text-zinc-800">{title}</span>
        </div>)
}

export const Partners = ({partners}: { partners: IPartnerDTO[] }) => {
    return <Marquee autoFill={true}>
        {partners.map((item, index) =>
            <Partner title={item.title} image={item.image} key={index}/>
        )}
    </Marquee>

}