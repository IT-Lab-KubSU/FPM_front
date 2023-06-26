import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Subtitle from "@/components/Subtitle";
import head_im from "../../public/head_im.png"
import fpmLogo from "../../public/fpm_logo.svg";

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
