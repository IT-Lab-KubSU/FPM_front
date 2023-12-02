import Image from "next/image";
import {ContainerLayout} from "@/entities";
import css from './departmentTitle.module.css'
import cn from 'classnames'

interface IDepartmentDTO{
    slug: string,
    title: string,
    text: string,
    image: string[],
    advantages: string[],
    task: ITask[],
    chair: IChair[]
}
interface ITask{
    name: string,
    description: string,
    answer: string
}
interface IChair{
    name: string,
    description: string,
    img: string
}

export const DepartmentTitle = ({department}: { department: IDepartmentDTO}) => {
    return <ContainerLayout>
        <div className={"flex items-center justify-center"}>
            <h1 className={cn(css.title_depart, "hover:bg-[#4d72e5] px-3 py-4 sm:px-6 sm:py-4 md:text-2xl")}>
                 {department.title}
            </h1>
        </div>
        <Image src={`${department.image}`} alt={department.title} height={950} width={1600} unoptimized={true}
               className={`rounded-xl drop-shadow-md max-h-[850px] max-w-[100%] my-8`}/>
        <div className={"text-sm text-justify sm:text-base lg:text-lg"}>
            {department.text}
        </div>

    </ContainerLayout>
}