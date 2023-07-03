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

export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>

            <SubtitleLayout text={"Учеба на ФКТиПМ"}>
                <Stats/>
            </SubtitleLayout>

            <SnakeText text={"мы обучаем специалистов"} mainText={"100лет "}/>

            <SubtitleLayout text={"Направления подготовки"}>
                <Directions/>
            </SubtitleLayout>

            <SubtitleLayout text={"Новости"}>
                <News/>
            </SubtitleLayout>

            <Subtitle text={"Образовательные программы обучения"}/>
            <Subtitle text={"Образовательные программы обучения"}/>
            <Subtitle text={"Образовательные программы обучения"}/>

            <Partners/>
            <Footer/>
        </>
    )
}
