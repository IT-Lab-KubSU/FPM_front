import Teachers from "@/modules/Teachers/Teachers";
import Slider from "@/components/Slider/Slider";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import {RetrieveNew} from "@/modules/RetrieveNew/RetrieveNew";


export default function Page() {
    return <>
        <Header/>
        <RetrieveNew id={1}/>
        <Footer/>
    </>
}
