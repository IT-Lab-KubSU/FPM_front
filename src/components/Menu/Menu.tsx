"use client"
import {MenuIcon} from "@/components/Icon/menu.icon";
import {useRef, useState, ReactNode} from "react";
import {CloseIcon} from "@/components/Icon/close.icon";

export const Menu = ({children, className}: { children: ReactNode, className?: string }) => {
    const [isOpen, setOpen] = useState(false);
    const menuOuterRef = useRef(null);
    return <>
        <div onClick={() => setOpen(true)}>
            <MenuIcon width={50}/>
        </div>
        <div ref={menuOuterRef} id={"close-btn"}
             className={`w-full h-full fixed z-40 top-0 duration-500 left-full opacity-0 ${isOpen && "opacity-100 -translate-x-full"}`}
             onClick={(event) => {
                 if (event.target === menuOuterRef.current)
                     setOpen(false)
             }}>
            <div className={`z-50 h-full relative float-right ${className}`}>
                <div onClick={() => setOpen(false)} className={"absolute top-2 left-1 opacity-80"}>
                    <CloseIcon width={50}/>
                </div>
                {children}
            </div>
        </div>
    </>
}