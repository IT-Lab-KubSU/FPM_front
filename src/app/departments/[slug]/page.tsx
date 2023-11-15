import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
// import {Department} from "@/modules/Departments/Departments";
// import {CONSTANTS} from "@/app/constants";

export default function Page({ params }: { params: { slug: string } }) {
    return <>
        <Header/>
        {/*{params}*/}
        {/*<Department departments={CONSTANTS.department[`${params}`]}/>*/}
        <Footer/>
    </>
}