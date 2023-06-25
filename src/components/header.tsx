import Image from "next/image";
import fpmLogo from "../../public/fpm_logo.svg";
import search from "../../public/search.svg";

export default function Header() {
    return (<header
        className="container mx-auto flex my-4 w-full justify-around border-b border-gray-300 bg-white/50 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static rounded-xl lg:border lg:p-4">
        <div className="logo flex justify-start w-auto">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={fpmLogo}
                alt="FPM Logo"
                height={80}
                priority
            />
        </div>
        <nav className="flex justify-around items-center font-semibold w-3/5">
            <a href="#"><span>Абитуриентам</span></a>
            <a href="#"><span>Кафедры</span></a>
            <a href="#"><span>Наши проекты</span></a>
            <a href="#"><span>Контакты</span></a>
            <a href="#"><span>Студентам</span></a>
            <a href="#">
                <span
                    className="bg-[#5C83E7] hover:bg-[#4d72e5] text-white duration-500 h-12 rounded-2xl px-4 py-3 font-bold">ПЛАТФОРМА</span>
            </a>
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