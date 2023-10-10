import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";

export default function Page({ params }: { params: { slug: string } }) {
    return <>
        <Header/>
        <Footer/>
    </>
}