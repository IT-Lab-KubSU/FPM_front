import {Subtitle} from "@/entities";
import {ReactNode} from "react";

export const SubtitleLayout = ({children, text}: { children: ReactNode, text: string }) => {
    return (
        <>
            <Subtitle text={text}/>
            {children}
        </>
    )
}
