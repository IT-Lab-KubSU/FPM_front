"use client"
import Image from "next/image";
import { ContainerLayout } from "@/entities";
import {useState} from "react";
import cn from "classnames";
import css from './departmentChair.module.css'
interface IChair{
    name: string,
    description: string,
    img: string
}
export const DepartmentChair = ({department}: { department: IChair}) => {
    const [buttonStyle, setButtonStyle] = useState(1);
    const handleButtonClick = () => {
        setButtonStyle(prevStyle=>(prevStyle === 0? 1 : 0));
    };
    return <ContainerLayout>
        <div className={"flex flex-col lg:flex-row bg-gradient-to-b items-center lg:items-start rounded-2xl drop-shadow-md"}>
        <Image src={department.img}
               alt={'Заведующий кафедрой информационных технологий'} height={950} width={1600} unoptimized={true}
               className={`rounded-xl w-auto drop-shadow-md max-w-[90%] lg:mr-6 h-auto lg:max-w-[30%]`}/>
            <div className={"flex flex-col items-center lg:items-start"}>
                <div className={cn(css.department_chair_name, "text-l md:text-3xl text-center my-2 lg:mt-0 md:text-start")}>
                    {department.name}
                </div>
                <div className={""}>
                    <div className={`${buttonStyle? 'line-clamp-[8]': 'line-clamp-none'} text-sm md:text-xl overflow-hidden text-justify`}>
                        {department.description}
                    </div>
                </div>
                <a onClick={handleButtonClick} className={cn(css.department_chair_podr,"text-center md:text-start text-sm md:text-xl")}>
                    {buttonStyle? 'Подробнее': 'Свернуть'}
                </a>
            </div>
    </div>
    </ContainerLayout>
}