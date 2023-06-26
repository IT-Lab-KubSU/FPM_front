import Header from "@/modules/Header/Header";
import Intro from "@/modules/Intro/Intro";
import Subtitle from "@/components/Subtitle/Subtitle";
import Directions from "@/modules/Directions/Directions";

export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>
            <Subtitle text={"Учеба на ФКТиПМ"}/>
            <Directions/>
            <Subtitle text={"Образовательные программы обучения"}/>
        </>
    )
}
