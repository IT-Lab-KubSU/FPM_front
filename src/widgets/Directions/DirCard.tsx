"use client";
import Image from "next/image";
import {BlueButton} from "@/entities";

export interface IDirection {
    title: string,
    subjects: string[],
    text: string,
    forms: string[],
    code: string,
    image: string
}

interface IProps {
    card: IDirection,
}

export const DirCard = ({card}: IProps) => {
    return (<>
        <div
            className={`DirCard px-8 py-4 w-full cursor-pointer duration-700 ease-in-out mb-4 text-2xl flex flex-col text-zinc-800 justify-start`}>
            <div className="flex">
                <div>
                    <div>
                        <p className="text-xl">
                            {card.text}
                        </p>
                    </div>
                    {card.subjects ?
                        <div className="mb-12">
                            <p className="text-2xl my-4 font-semibold">Предметы ЕГЭ:</p>
                            <p className="text-xl">{card.subjects.join(",")}</p>
                        </div> : <></>
                    }
                    <BlueButton href={"#"} text={"Подробнее"} className={"py-4 px-8 text-xl font-medium"}/>
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
    </>)
}
