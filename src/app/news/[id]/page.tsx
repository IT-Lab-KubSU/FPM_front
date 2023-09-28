import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import {RetrieveNew} from "@/modules/RetrieveNew/RetrieveNew";

export default function Page({params}: { params: { id: number } }) {
    return <>
        <Header/>
        <RetrieveNew id={params.id}/>
        <Footer/>
    </>
}