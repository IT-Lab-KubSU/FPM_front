import BlueButton from "@/components/BlueButton/BlueButton";
import Image from "next/image";
import UseClient from "@/layouts/UseClient";

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
    const open = (index === cur);
    return (<UseClient>
        <>
            <div onClick={() => set(index)}
                 className={`bg-white px-8 py-4 w-full dark:bg-zinc-100 ${open ? "" : ""} dark:text-zinc-800 cursor-pointer duration-700 ease-in-out rounded-3xl mb-4 text-2xl drop-shadow-md flex flex-col lg:flex-row justify-start`}>

                <div className="text-[#3364E2] text-4xl font-semibold">
                    {`0${index + 1}`}
                </div>
                <div className="pl-16 flex flex-col justify-center">
                    <div>
                        <p className="text-2xl font-semibold leading-loose">
                            {title}
                        </p>
                        {open ? (
                            <p className="mt-4 text-xl">
                                {text}
                            </p>) : ""}
                    </div>
                    {open ? (<>
                        <div className="mb-12">
                            <p className="text-2xl my-4 font-semibold">Предметы ЕГЭ:</p>
                            <p className="text-xl">{subjects}</p>
                        </div>
                        <BlueButton href={"#"} text={"Подробнее"} className={"py-4 px-8"}/>
                        <br/>
                    </>) : ""}

                </div>
                <div className="flex-col justify-center items-center hidden lg:flex">
                    {open ? (<Image
                        src={img}
                        alt="direction"
                        height={300}
                    />) : ""}
                </div>
            </div>
        </>
    </UseClient>)
}
