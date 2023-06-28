import Header from "@/modules/Header/Header";
import Intro from "@/modules/Intro/Intro";
import Subtitle from "@/components/Subtitle/Subtitle";
import Directions from "@/modules/Directions/Directions";
import News from "@/components/News/News";
import Footer from "@/modules/Footer/Footer";
import Stats from "@/modules/Stats/Stats";
import Partners from "@/modules/Partners/Partners";

export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>
            <Subtitle text={"Учеба на ФКТиПМ"}/>
            <Stats/>
            <Directions/>
            <News/>
            <Subtitle text={"Образовательные программы обучения"}/>
            <Subtitle text={"Образовательные программы обучения"}/>
            <Subtitle text={"Образовательные программы обучения"}/>
            <Partners/>
            <Footer/>
        </>
    )
}
