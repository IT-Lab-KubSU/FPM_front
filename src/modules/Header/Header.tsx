import Image from "next/image";
import fpmLogo from "../../../public/fpm_logo.svg";
import search from "../../../public/search.svg";
import BlueButton from "@/components/BlueButton/BlueButton";


export default function Header() {
    return (<header
        className="z-50 relative backdrop-blur-sm container mx-auto flex my-4 w-full justify-around border-b border-gray-300 bg-white/40 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border lg:p-4">
        <div className="logo flex justify-start w-auto">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={fpmLogo}
                alt="FPM Logo"
                height={80}
                priority
            />
        </div>
        <nav className="flex justify-around items-center font-semibold w-3/5 text-xl">
            <a href="#" className="p-3"><span>Абитуриентам</span></a>
            <a href="#" className="p-3"><span>Кафедры</span></a>
            <a href="#" className="p-3"><span>Наши проекты</span></a>
            <a href="#" className="p-3"><span>Контакты</span></a>
            <a href="#" className="p-3"><span>Студентам</span></a>
            <BlueButton href={"#"} text={"ПЛАТФОРМА"} className={"px-4 py-3"}/>
        </nav>
        <div className="tools flex justify-end w-auto">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] light:invert mx-8 dark:invert"
                src={search}
                alt="search"
                height={28}
                priority
            />
            <button className="font-bold text-lg">EN</button>
        </div>
    </header>)
}