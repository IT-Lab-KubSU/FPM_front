import {CONSTANTS} from "@/app/constants";
import {redirect} from "next/navigation";
import {DepartmentsSlugPage} from "@/ui-pages";

export function generateStaticParams() {
    return CONSTANTS.departments.map(item => ({slug: item.slug}))
}

export default function Page({params}: { params: { slug: string } }) {
    const { slug } = params
    const department = CONSTANTS.departments.find(item => item.slug === slug)
    if (!department)
        redirect("/404")
    return <>
        <DepartmentsSlugPage department={department}/>
    </>
}
