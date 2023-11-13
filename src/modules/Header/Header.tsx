import Image from "next/image";
import fpmLogo from "../../../public/fpm_logo.svg";
import search from "../../../public/search.svg";
import Link from "next/link";
import {Menu} from "@/components/Menu/Menu";
import {CloseIcon} from "@/components/Icon/close.icon";

const NavLink = ({href, text, className}: { href: string, text: string, className?: string }) => {
    return <div className={className}>
        <Link href={href}>
            {text}
        </Link>
    </div>
}

const Links = () => {
    return <>
        <NavLink text={"Абитуриентам"} href={"/enrollee"}/>
        <NavLink text={"Кафедры"} href={"/departments"}/>
        <NavLink text={"Проекты"} href={"/projects"}/>
        <NavLink text={"Контакты"} href={"/contacts"}/>
        <NavLink text={"Студентам"} href={"/students"}/>
        <NavLink text={"ПЛАТФОРМА"} href={"/platform"}
                 className={"select-none z-10 bg-[#5C83E7] hover:bg-[#4d72e5] text-white duration-500 rounded-2xl drop-shadow-md font-medium px-4 py-3"}/>
    </>
}

export default function Header() {
    return (<header className="py-4">
        <div className={"flex lg:hidden justify-between px-4"}>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] select-none"
                src={fpmLogo}
                alt="FPM Logo"
                height={80}
                priority
            />
            <Menu className={"bg-white/90 drop-shadow-md p-6"}>
                <div className={"flex flex-col gap-8 items-center justify-between h-full py-6"}>
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] select-none"
                        src={fpmLogo}
                        alt="FPM Logo"
                        height={80}
                        priority
                    />
                    <div className={"flex flex-col gap-4 font-medium text-xl"}>
                        <Links/>
                    </div>
                    <div className={"flex flex-col gap-2 font-medium"}>
                        <div className={"hover:text-[#5C83E7] duration-500 py-3"}>
                            <a href="tel:+79612199578">+7 (861) 219-95-78</a>
                        </div>
                        <div className={"hover:text-[#5C83E7] duration-500"}>
                            <a href="tel:+79186840333">+7 (918) 684-03-33</a>
                        </div>
                    </div>
                </div>
            </Menu>
        </div>
        <div
            className={"hidden lg:flex flex-nowrap justify-between items-center z-50 relative drop-shadow-md backdrop-blur-sm mx-auto container gap-4 w-full border-b border-gray-300 bg-white/40 px-8 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border"}>
            <div className="logo flex justify-start w-auto">
                <a href="/">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] select-none"
                        src={fpmLogo}
                        alt="FPM Logo"
                        height={80}
                        priority
                    />
                </a>
            </div>
            <div className="flex items-center justify-around gap-6 text-lg xl:text-xl">
                <Links/>
            </div>
            <div className="tools grid grid-cols-2 gap-4">
                <button>
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] light:invert dark:invert select-none"
                        src={search}
                        alt="search"
                        height={28}
                        priority
                    />
                </button>
                <button className="font-bold text-lg select-none">EN</button>
            </div>
        </div>
    </header>)
}