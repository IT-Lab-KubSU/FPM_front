import Header from "@/modules/Header/Header";
import Intro from "@/modules/Intro/Intro";
import Subtitle from "@/components/Subtitle/Subtitle";
import Directions from "@/modules/Directions/Directions";
import News from "@/modules/News/News";
import Footer from "@/modules/Footer/Footer";
import Stats from "@/modules/Stats/Stats";
import Partners from "@/modules/Partners/Partners";
import SubtitleLayout from "@/layouts/SubtitleLayout"
import SnakeText from "@/components/SnakeText/SnakeText";
import Link from "next/link";
import Teachers from "@/modules/Teachers/Teachers";


const teachers: ITeacherDTO[] = [
    {
        id: "29257",
        slug: "String",
        name: "Харченко Анна Владимировна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img_9045.jpg?itok=oBcIUEXR",
        jobTitle: "Доцент",
        department: "Кафедра информационных технологий",
        disciplines: [
            "Интерпретируемые языки программирования",
            "Машинное обучение",
            "Методы программирования; Основы программирования",
            "Приложение нейросетевых алгоритмов"
        ]
    },
    {
        id: "29258",
        slug: "String",
        name: "Сеидова Наталья Михайловна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img-1777-foto.jpg?itok=QARmlyVn",
        jobTitle: "Доцент",
        department: "Кафедра прикладной математики",
        disciplines: [
            "Математические модели финансовых операций",
            "Математический анализ",
            "Математическое и информационное обеспечение инвестиционной деятельности",
            "Методы оптимизации"
        ]
    },
    {
        id: "29257",
        slug: "String",
        name: "Харченко Анна Владимировна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img_9045.jpg?itok=oBcIUEXR",
        jobTitle: "Доцент",
        department: "Кафедра информационных технологий",
        disciplines: [
            "Интерпретируемые языки программирования",
            "Машинное обучение",
            "Методы программирования; Основы программирования",
            "Приложение нейросетевых алгоритмов"
        ]
    },
    {
        id: "29258",
        slug: "String",
        name: "Сеидова Наталья Михайловна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img-1777-foto.jpg?itok=QARmlyVn",
        jobTitle: "Доцент",
        department: "Кафедра прикладной математики",
        disciplines: [
            "Математические модели финансовых операций",
            "Математический анализ",
            "Математическое и информационное обеспечение инвестиционной деятельности",
            "Методы оптимизации"
        ]
    },
    {
        id: "29257",
        slug: "String",
        name: "Харченко Анна Владимировна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img_9045.jpg?itok=oBcIUEXR",
        jobTitle: "Доцент",
        department: "Кафедра информационных технологий",
        disciplines: [
            "Интерпретируемые языки программирования",
            "Машинное обучение",
            "Методы программирования; Основы программирования",
            "Приложение нейросетевых алгоритмов"
        ]
    },
    {
        id: "29258",
        slug: "String",
        name: "Сеидова Наталья Михайловна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img-1777-foto.jpg?itok=QARmlyVn",
        jobTitle: "Доцент",
        department: "Кафедра прикладной математики",
        disciplines: [
            "Математические модели финансовых операций",
            "Математический анализ",
            "Математическое и информационное обеспечение инвестиционной деятельности",
            "Методы оптимизации"
        ]
    },
    {
        id: "29257",
        slug: "String",
        name: "Харченко Анна Владимировна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img_9045.jpg?itok=oBcIUEXR",
        jobTitle: "Доцент",
        department: "Кафедра информационных технологий",
        disciplines: [
            "Интерпретируемые языки программирования",
            "Машинное обучение",
            "Методы программирования; Основы программирования",
            "Приложение нейросетевых алгоритмов"
        ]
    },
    {
        id: "29258",
        slug: "String",
        name: "Сеидова Наталья Михайловна",
        avatar: "https://www.kubsu.ru/sites/default/files/styles/medium/public/user_pics/img-1777-foto.jpg?itok=QARmlyVn",
        jobTitle: "Доцент",
        department: "Кафедра прикладной математики",
        disciplines: [
            "Математические модели финансовых операций",
            "Математический анализ",
            "Математическое и информационное обеспечение инвестиционной деятельности",
            "Методы оптимизации"
        ]
    }
]

const stats = [
    {
        "text": "Направления",
        "value": 4
    }, {
        "text": "Студентов",
        "value": 1200
    }, {
        "text": "Направления",
        "value": 21215
    }, {
        "text": "Направления",
        "value": 4
    }, {
        "text": "Направления",
        "value": 4
    }
]
const news = [
    {
        "title": "1)Это могла быть новость, но сотрудники деканата халявят1)Это могла быть новость, но сотрудники деканата халявят1)Это могла быть новость, но сотрудники деканата халявят",
        "image": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "2)Это могла быть новость, но сотрудники деканата халявят",
        "image": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "3)Это могла быть новость, но сотрудники деканата халявят",
        "image": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "4)Это могла быть новость, но сотрудники деканата халявят",
        "image": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "5)Это могла быть новость, но сотрудники деканата халявят",
        "image": "next.svg",
        "date": "15 марта,2023"
    }, {
        "title": "6)Это могла быть новость, но сотрудники деканата халявят",
        "image": "fpm_logo.svg",
        "date": "15 марта,2023"
    }, {
        "title": "7)Это могла быть новость, но сотрудники деканата халявят",
        "image": "vercel.svg",
        "date": "15 марта,2023"
    }, {
        "title": "8)Это могла быть новость, но сотрудники деканата халявят",
        "image": "vercel.svg",
        "date": "15 марта,2023"
    }
]
export default function Home() {
    return (
        <>
            <Header/>

            <Intro/>

            <SubtitleLayout text={"Учеба на ФКТиПМ"}>
                <Stats stats={stats}/>
            </SubtitleLayout>


            <SnakeText text={"мы обучаем специалистов"} mainText={"100лет "}/>

            <SubtitleLayout text={"Направления подготовки"}>
                <Directions/>
            </SubtitleLayout>

            <SubtitleLayout text={"Новости"}>
                <News news={news}/>
            </SubtitleLayout>

            <Subtitle text={"Образовательные программы обучения"}/>
            <SubtitleLayout text={"Ведущие преподаватели"}>
                <Teachers teachers={teachers}/>
            </SubtitleLayout>

            <Subtitle text={"Образовательные программы обучения"}/>
            <Subtitle text={"Образовательные программы обучения"}/>

            <Partners/>
            <Footer/>
        </>
    )
}
