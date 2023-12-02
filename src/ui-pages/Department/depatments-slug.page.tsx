import {Footer, Header} from "@/widgets";
import {SubtitleLayout} from "@/entities";
import {DepartmentChair, DepartmentTitle, DepartmentTask, DepartmentDirections} from "@/features";

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

export const DepartmentsSlugPage = ({department}: { department: IDepartmentDTO })=> {
    return <>
        <Header/>
        <DepartmentTitle department={department}/>
        <SubtitleLayout text={"Заведующий кафедрой"}>
            <DepartmentChair department={department.chair[0]}/>
        </SubtitleLayout>
        <SubtitleLayout text={"Задачка от кафедры"}>
            <DepartmentTask department={department.task}/>
        </SubtitleLayout>
        <DepartmentDirections department={department}/>
        <Footer/>
    </>
}
