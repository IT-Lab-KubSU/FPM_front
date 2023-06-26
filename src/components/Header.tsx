import Image from "next/image";
import fpmLogo from "../../public/fpm_logo.svg";
import head_im from "../../public/head_im.png"
import search from "../../public/search.svg";
import BlueButton from "@/components/BlueButton";
import './logo.css'

export default function Header() {
    return (<header
        className="z-50 h-20 relative backdrop-blur-sm container mx-auto flex my-4 w-full justify-between border-b border-gray-300 bg-white/40 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border lg:pl-8 lg:pr-8 lg:p-4">
        <div className="logo flex justify-start w-auto">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={fpmLogo}
                alt="FPM Logo"
                height={80}
                priority
            />
        </div>
        <nav className="flex justify-around items-center font-semibold w-3/5 text-l">
            <a href="#" className="p-2"><span>Абитуриентам</span></a>
            <a href="#" className="p-2"><span>Кафедры</span></a>
            <a href="#" className="p-2"><span>Наши проекты</span></a>
            <a href="#" className="p-2"><span>Контакты</span></a>
            <a href="#" className="p-2"><span>Студентам</span></a>
            <BlueButton href={"#"} text={"ПЛАТФОРМА"}/>
        </nav>
        <div className="tools flex justify-end w-auto">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] light:invert mx-8 dark:invert"
                src={search}
                alt="search"
                height={24}
                priority
            />
            <button className="font-bold text-l">EN</button>
        </div>
    </header>)
}