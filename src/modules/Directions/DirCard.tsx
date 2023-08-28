"use client";
import BlueButton from "@/components/BlueButton/BlueButton";
import Image from "next/image";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import ContentBox from "@/layouts/ContentBox";
import $ from "jquery";

interface IProps {
    index: number,
    card: IDirection,
    cur: number,
    set: Dispatch<SetStateAction<number>>,
}

export default function DirCard({index, card, set, cur}: IProps) {
    return (<>
        <ContentBox>
            <div onClick={() => {
                set(index)
            }}
                 className={`DirCard px-8 py-4 w-full cursor-pointer duration-700 ease-in-out mb-4 text-2xl flex flex-col justify-start`}>
                <div className="flex items-center gap-6">
                    <div className="text-[#3364E2] text-4xl font-semibold col-span-1 hidden md:block">
                        {`0${index + 1}`}
                    </div>
                    <div className={"flex flex-wrap md:flex-nowrap w-full justify-between items-center"}>
                        <div className={"text-md lg:text-2xl font-semibold w-full md:w-auto"}>
                            {card.title}
                        </div>
                        <div className={"text-md lg:text-2xl font-light"}>
                            {card.code}
                        </div>
                    </div>
                </div>
                <div className="panel w-full overflow-hidden duration-500"
                     style={{maxHeight: index === cur ? 300 : "0"}}>
                    <div className="flex pt-4 lg:pt-0 lg:ml-16 mb-8">
                        <div className="flex flex-col justify-center">
                            <div>
                                <div>
                                    <p className="text-xl">
                                        {card.text}
                                    </p>
                                </div>
                                {card.subjects ?
                                    <div className="mb-12">
                                        <p className="text-2xl my-4 font-semibold">Предметы ЕГЭ:</p>
                                        <p className="text-xl">{card.subjects}</p>
                                    </div> : <></>
                                }
                                <BlueButton href={"#"} text={"Подробнее"} className={"py-4 px-8"}/>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={card.image}
                                alt="direction"
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ContentBox>
    </>)
}
