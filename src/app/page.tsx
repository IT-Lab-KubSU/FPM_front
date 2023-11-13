import Header from "@/modules/Header/Header";
import Intro from "@/modules/Intro/Intro";
import Directions from "@/modules/Directions/Directions";
import News from "@/modules/News/News";
import Footer from "@/modules/Footer/Footer";
import Stats from "@/modules/Stats/Stats";
import Partners from "@/modules/Partners/Partners";
import SubtitleLayout from "@/layouts/SubtitleLayout"
import SnakeText from "@/components/SnakeText/SnakeText";
import {CONSTANTS} from "@/app/constants";
import Feedback from "@/modules/Feedback/Feedback";
import AboutUs from "@/modules/AboutUs/AboutUs";
import {Menu} from "@/components/Menu/Menu";


export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>

            <Stats stats={CONSTANTS.stats}/>

            <SnakeText text={" мы выпускаем квалифицированных специалистов"} mainText={"50лет"}/>

            <SubtitleLayout text={"Направления подготовки"}>
                <Directions directions={CONSTANTS.directions}/>
            </SubtitleLayout>

            <SubtitleLayout text={"О факультете"}>
                <AboutUs/>
            </SubtitleLayout>

            <SubtitleLayout text={"Новости"}>
                <News news={CONSTANTS.news}/>
            </SubtitleLayout>

            {/*<Subtitle text={"Образовательные программы обучения"}/>*/}
            {/*<SubtitleLayout text={"Ведущие преподаватели"}>*/}
            {/*    <Teachers teachers={teachers}/>*/}
            {/*</SubtitleLayout>*/}

            {/*<Subtitle text={"Образовательные программы обучения"}/>*/}
            {/*<Subtitle text={"Образовательные программы обучения"}/>*/}

            <Feedback/>
            <Partners partners={CONSTANTS.partners}/>
            <Footer/>
        </>
    )
}
