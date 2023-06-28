"use client";
import BlueButton from "@/components/BlueButton/BlueButton";
import Image from "next/image";
import $ from "jquery";
import {useEffect} from "react";

interface IProps {
    index: number,
    title: string,
    text: string,
    subjects: string,
    img: string,
    cur: any,
    set: any,
}

export default function DirCard({index, title, subjects, text, img, set, cur}: IProps) {
    useEffect(() => {
        $(".panel").each(function () {
            const panel = $(this);
            $(this).parent().on("click", function () {
                panel.slideDown();
            })
        })
    }, []);
    return (<>
        <div onClick={(el) => {
            const closeAll = () => {
                $(".panel").each(function (i) {
                    if (i === index)
                        return
                    $(this).slideUp();
                })
            }
            closeAll();
            set(index);
        }}
             className={`bg-white px-8 py-4 w-full dark:bg-zinc-100 dark:text-zinc-800 cursor-pointer duration-700 ease-in-out rounded-3xl mb-4 text-2xl drop-shadow-md flex flex-col justify-start`}>
            <div className="flex gap-6">
                <div className="text-[#3364E2] text-4xl font-semibold">
                    {`0${index + 1}`}
                </div>
                <div className="text-2xl font-semibold leading-loose">
                    {title}
                </div>
            </div>
            <div className="hidden panel">
                <div className="flex ml-16 pb-8">
                    <div className="flex flex-col justify-center">
                        <div>
                            <div>
                                <p className="text-xl">
                                    {text}
                                </p>
                            </div>
                            <div className="mb-12">
                                <p className="text-2xl my-4 font-semibold">Предметы ЕГЭ:</p>
                                <p className="text-xl">{subjects}</p>
                            </div>
                            <BlueButton href={"#"} text={"Подробнее"} className={"py-4 px-8"}/>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={img}
                            alt="direction"
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
