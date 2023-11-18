import {BlueButton, ContainerLayout} from "@/entities";

export const Intro = () => {
    return (<>
        <ContainerLayout>
            <p className="text-2xl font-extralight tracking-[.25em]">КУБГУ</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
                Факультет<br/>
                компьютерных технологий<br/>
                и<br/>
                прикладной математики<br/>
            </h1>
            <br/>
            <p className="font-extralight">
                Открываем путь в IT, помогаем совершенствоваться<br/>
                в профессии и осваивать новые специальности
            </p>
            <div className="my-16 h-200px flex">
                <BlueButton href={"#feedback"} text={"КОНТАКТЫ"} className={"text-lg lg:text-2xl font-medium px-12 py-4"}/>
                <div className="hidden md:block z-0 w-[60%] h-[2rem] bg-gradient-to-r from-[#5C83E7]"></div>
            </div>
        </ContainerLayout>
    </>)
}