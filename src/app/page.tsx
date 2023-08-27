import Header from "@/modules/Header/Header";
import Intro from "@/modules/Intro/Intro";
import Subtitle from "@/components/Subtitle/Subtitle";
import Directions from "@/modules/Directions/Directions";
import News from "@/modules/News/News";
import Footer from "@/modules/Footer/Footer";
import Stats from "@/modules/Stats/Stats";
import Partners from "@/modules/Partners/Partners";
import SubtitleLayout from "@/layouts/SubtitleLayout"
import SnakeText from "@/components/SnakeText/SnakeText";
import Teachers from "@/modules/Teachers/Teachers";
import {teachers} from "@/app/teachers";
import {partners} from "@/app/partners";
import {stats} from "@/app/stats";
import {news} from "@/app/news";
import {directions} from "@/app/directions";
import Feedback from "@/modules/Feedback/Feedback";
import AboutUs from "@/modules/AboutUs/AboutUs";



export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>

            <SubtitleLayout text={"Учеба на ФКТиПМ"}>
                <Stats stats={stats}/>
            </SubtitleLayout>


            <SnakeText text={"мы обучаем специалистов"} mainText={"100лет "}/>

            <SubtitleLayout text={"Направления подготовки"}>
                <Directions directions={directions}/>
            </SubtitleLayout>

            <SubtitleLayout text={"О факультете"}>
                <AboutUs/>
            </SubtitleLayout>

            <SubtitleLayout text={"Новости"}>
                <News news={news}/>
            </SubtitleLayout>

            {/*<Subtitle text={"Образовательные программы обучения"}/>*/}
            {/*<SubtitleLayout text={"Ведущие преподаватели"}>*/}
            {/*    <Teachers teachers={teachers}/>*/}
            {/*</SubtitleLayout>*/}

            {/*<Subtitle text={"Образовательные программы обучения"}/>*/}
            {/*<Subtitle text={"Образовательные программы обучения"}/>*/}

            <Partners partners={partners}/>
            <Feedback/>
            <Footer/>
        </>
    )
}
