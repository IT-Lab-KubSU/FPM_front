import Subtitle from "@/components/Subtitle/Subtitle";
import ContainerLayout from "@/layouts/ContainerLayout";

export default function SubtitleLayout({children, text}: { children: React.ReactNode, text: string }) {
    return (
        <>
            <Subtitle text={text}/>
            {children}
        </>
    )
}
