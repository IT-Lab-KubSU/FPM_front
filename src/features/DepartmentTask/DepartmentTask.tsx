'use client'
import {ContainerLayout} from "@/entities";
import {DepartmentTaskPopup} from "@/features";
interface ITask {
    name: string,
    description: string,
    answer: string
}
const genrateRandomNumber = (min: number, max: number) => {
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const DepartmentTask = ({department}: {department: ITask[]}) => {
    const a = genrateRandomNumber(0, department.length-1)
    return <ContainerLayout>
            <div className={"text-sm md:text-xl text-justify p-8 flex flex-col bg-gradient-to-b items-center from-[#A5B9ECC4] to-[#b6c3e3c4] rounded-2xl drop-shadow-md"}>
                <div className={"pb-4 font-semibold"}>{department[a].name}</div>
                <div>{department[a].description}</div>
                <DepartmentTaskPopup department={department[a].answer}/>
            </div>
    </ContainerLayout>
}