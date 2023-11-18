import {Footer, Header} from "@/widgets";
import {Department} from "@/entities";
import {CONSTANTS} from "@/app/constants";
import {redirect} from "next/navigation";

export function generateStaticParams() {
    return CONSTANTS.departments.map(item => ({slug: item.slug}))
}

export default function Page({params}: { params: { slug: string } }) {
    const { slug } = params
    const department = CONSTANTS.departments.find(item => item.slug === slug)
    if (!department)
        redirect("/404")
    return <>
        <Header/>
        <Department department={department}/>
        <Footer/>
    </>
}
