import Image from "next/image";
import {ITeacherDTO} from "@/dto";

interface IProps {
    teacher: ITeacherDTO
}

export default function TeacherCard({teacher}: IProps) {
    return <div className={"w-[400px] p-2"}>
        <div className={"bg-white rounded-2xl p-4 h-full"}>
            <div>
                <Image
                    src={teacher.avatar}
                    alt={teacher.slug}
                    unoptimized={true}
                    height={150}
                    width={150}
                />
            </div>
            <div>
                <div className={"font-semibold leading-7 md:leading-10 text-lg md:text-xl lg:text-2xl"}>{teacher.name}</div>
                <div className={"font-semibold leading-loose text-sm md:text-md lg:text-lg"}>{teacher.jobTitle}</div>
                <div>
                    {teacher.disciplines.map((discipline) => <>
                        <div className={"leading-6"}>-{discipline}</div>
                    </>)}
                </div>
            </div>
        </div>
    </div>
}