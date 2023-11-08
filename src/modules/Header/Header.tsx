import Image from "next/image";
import fpmLogo from "../../../public/fpm_logo.svg";
import search from "../../../public/search.svg";
import Link from "next/link";

const NavLink = ({href, text, className}: { href: string, text: string, className?: string }) => {
    return <div className={className}>
        <Link href={href}>
            {text}
        </Link>
    </div>
}
export default function Header() {
    return (<header className="py-4">
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
                <NavLink text={"Абитуриентам"} href={"#"}/>
                <NavLink text={"Кафедры"} href={"#"}/>
                <NavLink text={"Проекты"} href={"#"}/>
                <NavLink text={"Контакты"} href={"#"}/>
                <NavLink text={"Студентам"} href={"#"}/>
                <NavLink text={"ПЛАТФОРМА"} href={"#"}
                         className={"select-none z-10 bg-[#5C83E7] hover:bg-[#4d72e5] text-white duration-500 rounded-2xl drop-shadow-md font-medium px-4 py-3"}/>
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