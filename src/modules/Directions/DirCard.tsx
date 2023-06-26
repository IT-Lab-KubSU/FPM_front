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
                 className={`bg-white p-8 w-full ${open ? "pb-12" : ""} dark:text-zinc-800 cursor-pointer duration-700 ease-in-out rounded-3xl mb-4 text-2xl shadow-2xl flex flex-col lg:flex-row justify-start`}>

                <div className="text-[#3364E2] text-4xl font-semibold">
                    {`0${index + 1}`}
                </div>
                <div className="pl-16 flex flex-col justify-between">
                    <div>
                        <p className="text-3xl font-semibold">
                            {title}
                        </p>
                        {open ? (
                            <p className="mt-4">
                                {text}
                            </p>) : ""}
                    </div>
                    {open ? (<>
                        <div className="mb-12">
                            <p className="text-3xl my-4 font-semibold">Предметы ЕГЭ:</p>
                            <p>{subjects}</p>
                        </div>
                        <BlueButton href={"#"} text={"Подробнее"} className={"py-4 px-8"}/></>) : ""}

                </div>
                <div className="flex justify-center hidden lg:block">
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
