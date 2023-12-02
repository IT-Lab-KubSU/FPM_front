import {ContainerLayout} from "../layouts";
import AboutUsCard from "@/widgets/AboutUs/AboutUsCard";

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

export const DepartmentFeatures = ({department}: { department: IDepartmentDTO}) => {
    return <ContainerLayout>
        <div className={"text-zinc-800 w-full text-xl grid grid-cols-1 gap-4 lg:grid-cols-2"}>
            <AboutUsCard
                title={"Добро пожаловать на факультет компьютерных технологий и прикладной математики!"}
                text={department.advantages[0]}
            />
            <AboutUsCard
                title={"Что делает наш факультет настолько особенным?"}
                text={department.advantages[1]}
            />
            <AboutUsCard
                title={"Особый подход к обучению"}
                text={department.advantages[2]}
            />
            <AboutUsCard
                title={"Поддержка учащихся"}
                text={department.advantages[3]}
            />
        </div>
    </ContainerLayout>
}