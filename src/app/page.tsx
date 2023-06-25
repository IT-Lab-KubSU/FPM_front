import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Subtitle from "@/components/Subtitle";

export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>
            <Subtitle text={"Учеба на ФКТиПМ"}/>
            <Subtitle text={"Направления подготовки"}/>
            <Subtitle text={"Образовательные программы обучения"}/>
        </>
    )
}
