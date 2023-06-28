import Subtitle from "@/components/Subtitle/Subtitle";

export default function UseClient({children, text}: { children: React.ReactNode, text: string }) {
    return (
        <>
            <Subtitle text={text}/>
            {children}
        </>
    )
}
