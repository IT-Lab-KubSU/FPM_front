"use client";
import {useEffect, useState} from "react";
import $ from "jquery";
import Subtitle from "@/components/Subtitle/Subtitle";
import Image from "next/image";

interface INewProps {
    index: number,
    item: any,
    currentNew: number
}

interface IControlBtnProps {
    right?: boolean,
    onClick: any
}

const a = [
    {
        "title": "1)Это могла быть новость, но сотрудники деканата халявят1)Это могла быть новость, но сотрудники деканата халявят1)Это могла быть новость, но сотрудники деканата халявят",
        "img": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "2)Это могла быть новость, но сотрудники деканата халявят",
        "img": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "3)Это могла быть новость, но сотрудники деканата халявят",
        "img": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "4)Это могла быть новость, но сотрудники деканата халявят",
        "img": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "5)Это могла быть новость, но сотрудники деканата халявят",
        "img": "next.svg",
        "date": "15 марта,2023"
    }, {
        "title": "6)Это могла быть новость, но сотрудники деканата халявят",
        "img": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "7)Это могла быть новость, но сотрудники деканата халявят",
        "img": "vercel.svg",
        "date": "15 марта,2023"
    }, {
        "title": "8)Это могла быть новость, но сотрудники деканата халявят",
        "img": "vercel.svg",
        "date": "15 марта,2023"
    }
]

const NewCard = ({index, item, currentNew}: INewProps) => {
    return (<div className={`basis-1/3 relative`}>
        <div
            className={`${(index === 1) ? `rotated ${(currentNew % 2) ? "mt-[-4rem] bottom-20" : "mt-[-4rem] bottom-20"}` : ""} flex flex-col justify-between bg-white w-full dark:bg-zinc-100  dark:text-zinc-800 h-[100%] p-8 rounded-xl drop-shadow-md duration-700`}>
            <div className="newCard">
                <Image src={item.img} alt={item.title} height={150} width={200}
                       className={`rounded-xl drop-shadow-md max-h-[150px]`}/>
                <br/>
                <p className="line-clamp-4">{item.title}</p>
            </div>
            <div className="bottom-4 text-zinc-800 absolute newCard">
                {item.date}
            </div>
            <a href="#"
               className={`absolute duration-500 bottom-4 right-4 bg-[#5C83E7] z-10 hover:bg-[#4d72e5] hover:scale-110 h-12 w-12 rounded-[50%] flex justify-center items-center`}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.447 2.04983C17.447 1.33937 16.8711 0.763436 16.1606 0.763437L4.58312 0.763437C3.87267 0.763437 3.29673 1.33937 3.29673 2.04983C3.29673 2.76028 3.87267 3.33622 4.58312 3.33622L14.8742 3.33622L14.8742 13.6273C14.8742 14.3378 15.4502 14.9137 16.1606 14.9137C16.8711 14.9137 17.447 14.3378 17.447 13.6273L17.447 2.04983ZM2.49116 17.5385L17.0702 2.95944L15.251 1.14021L0.671928 15.7193L2.49116 17.5385Z"
                        fill="white"/>
                </svg>
            </a>
        </div>
    </div>)
}
const ControlBtn = ({right, onClick}: IControlBtnProps) => {
    return (<button
        className={`h-16 w-16 p-4 rounded-[50%] bg-[#5C83E7] z-10 hover:bg-[#4d72e5] hover:scale-110 duration-300 flex justify-center items-center ${right ? "" : "rotate-180"}`}
        onClick={onClick}
    >
        <svg width="43" height="20" viewBox="0 0 43 20" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M41.2927 9.23833C41.795 9.7407 41.795 10.5552 41.2927 11.0576L33.1061 19.2441C32.6038 19.7465 31.7893 19.7465 31.2869 19.2441C30.7845 18.7417 30.7845 17.9272 31.2869 17.4249L38.5638 10.1479L31.2869 2.87103C30.7845 2.36867 30.7845 1.55417 31.2869 1.0518C31.7893 0.549437 32.6038 0.549437 33.1061 1.0518L41.2927 9.23833ZM0.0761719 8.86156L40.383 8.86156V11.4343L0.0761719 11.4343L0.0761719 8.86156Z"/>
        </svg>
    </button>)
}

const rotateNew = (x: number) => {
    const el = document.querySelector(".rotated") as HTMLElement;
    if (x % 2)
        $(el).css("transform", "rotate(12deg)");
    else
        $(el).css("transform", "rotate(-12deg)");
}

export default function News() {
    const NUM_OF_ELS = 3;
    const [currentNew, setNew] = useState(0);

    useEffect(() => {
        rotateNew(currentNew);
    }, [currentNew])
    //px-12
    return (<>
        <div className="container mt-16 mb-8 mx-auto flex px-12">
            <div className="text-l font-medium flex gap-16 h-96">
                {a.slice(currentNew, currentNew + NUM_OF_ELS).map((item, index) => <>
                    <NewCard index={index} item={item} currentNew={currentNew}/>
                </>)}
            </div>
            <div className="ml-12 flex flex-col gap-5 justify-center text-center">
                <h2 className="font-bold text-4xl mb-12">
                    Новости Факультета
                </h2>
                <div className="flex justify-center items-center gap-5">
                    <ControlBtn onClick={() => {
                        if (currentNew - 1 < 0)
                            return
                        $(".newCard").fadeOut(() => {
                            rotateNew(currentNew - 1);
                            setNew(Math.max(currentNew - 1, 0));
                        }).fadeIn();
                    }}/>
                    <ControlBtn right={true} onClick={() => {
                        if (currentNew + 1 > a.length - NUM_OF_ELS)
                            return
                        $(".newCard").fadeOut(() => {
                            rotateNew(currentNew + 1);
                            setNew(Math.min(currentNew + 1, a.length - NUM_OF_ELS));
                        }).fadeIn();
                    }}/>
                </div>
            </div>
        </div>
    </>)
}