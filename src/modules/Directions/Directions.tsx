"use client";
import DirButton from "@/modules/Directions/DirButton";
import Subtitle from "@/components/Subtitle/Subtitle";
import DirCard from "@/modules/Directions/DirCard";
import {useEffect, useState} from "react";
import dirImg from "../../../public/diractions.svg";
import $ from "jquery";


const buttons = [
    {
        "buttonText": "Бакалавриат",
        "directions": [
            {
                "title": "Прикладная математика и информатика",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            }, {
                "title": "Математическое обеспечение и системное администрирование",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            }, {
                "title": "Фундаментальная математика",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            }, {
                "title": "Прикладная информатика",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            },
        ]
    }, {
        "buttonText": "Магистратура",
        "directions": [
            {
                "title": "Прикладная математика и информатика",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            }, {
                "title": "Фундаментальная математика",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            }
        ]
    }, {
        "buttonText": "Аспирантура",
        "directions": [
            {
                "title": "Прикладная математика и информатика",
                "subjects": "Математика, Информатика и ИКТ, Русский язык",
                "text": "Специальность, позволяющая составлять компьютерные программы, та в целом быть умным)",
                "img": dirImg,
            }
        ]
    }
]

export default function Directions() {
    const [dirButton, setButton] = useState(0);
    const [dirCard, setCard] = useState(0);

    useEffect(() => {
        console.log(dirCard)
        $(".DirCard .panel").each(function(index) {
            if (index === dirCard)
                $(this).slideDown()
            else
                $(this).slideUp()
        })
    }, [dirCard, dirButton]);

    return (<>
        <div className="container my-8 mx-auto px-12">
            <div className="mb-8 DirButtons">
                {buttons.map((item, index) => <>
                    <DirButton text={item.buttonText} index={index} cur={dirButton} cardSet={setCard}
                               set={setButton}/>
                </>)}
            </div>
            <div className="Disclosures">
                {buttons[dirButton].directions.map((item, index) => <>
                    <DirCard text={item.text} index={index} subjects={item.subjects} img={item.img}
                             title={item.title}
                             cur={dirCard} set={setCard}/>
                </>)}
            </div>
        </div>
    </>)
}