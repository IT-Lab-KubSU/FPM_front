"use client"
import {MenuIcon} from "@/shared/icons/menu.icon";
import {useRef, useState, ReactNode, MouseEvent} from "react";
import {CloseIcon} from "@/shared/icons/close.icon";

export const Menu = ({children, className}: { children: ReactNode, className?: string }) => {
    const [isOpen, setOpen] = useState(false);
    const menuOuterRef = useRef(null);
    const handleClose = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (event.target === menuOuterRef.current)
            setOpen(false)
    }

    return <>
        <div onClick={() => setOpen(true)}>
            <MenuIcon width={50}/>
        </div>
        <div ref={menuOuterRef} id={"close-btn"}
             className={`w-full h-full fixed z-40 top-0 duration-500 left-full opacity-0 ${isOpen && "opacity-100 -translate-x-full"}`}
             onClick={handleClose}>
            <div className={`z-50 h-full relative float-right ${className}`}>
                <div onClick={() => setOpen(false)} className={"absolute top-2 left-1 opacity-80"}>
                    <CloseIcon width={50}/>
                </div>
                {children}
            </div>
        </div>
    </>
}