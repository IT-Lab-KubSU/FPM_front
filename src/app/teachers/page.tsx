import Teachers from "@/modules/Teachers/Teachers";
import Slider from "@/components/Slider/Slider";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import {teachers} from "@/app/teachers";
import Stats from "@/modules/Stats/Stats";
import {stats} from "@/app/stats";
import SubtitleLayout from "@/layouts/SubtitleLayout";


export default function Page() {
    return <>
        <Header/>
        <SubtitleLayout text={"КИТ"}>
            <Teachers teachers={teachers}/>
        </SubtitleLayout>
        <SubtitleLayout text={"КММ"}>
            <Teachers teachers={teachers}/>
        </SubtitleLayout>
        <Footer/>
    </>
}
