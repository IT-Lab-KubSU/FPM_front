"use client";
import DirButton from "@/modules/Directions/DirButton";
import Subtitle from "@/components/Subtitle/Subtitle";
import DirCard from "@/modules/Directions/DirCard";
import {Dispatch, useEffect, useState} from "react";
import dirImg from "../../../public/diractions.svg";
import $ from "jquery";
import {element} from "prop-types";


export default function Directions({directions}: {directions: IDirectionDTO[]}) {
    const [dirButton, setButton] = useState(0);
    const [dirCard, setCard] = useState(0);


    return (<div className="container my-8 px-12 mx-auto">
        <div className="mb-8 DirButtons flex flex-nowrap gap-8">
            {directions.map((item, index) => <>
                <DirButton text={item.buttonText} index={index} cur={dirButton} cardSet={setCard}
                           set={setButton}/>
            </>)}
        </div>

        <div className="Disclosures">
            {directions[dirButton].directions.map((item, index) => <>
                <DirCard text={item.text} index={index} subjects={item.subjects} image={item.image}
                         title={item.title}
                         cur={dirCard} set={setCard}/>
            </>)}
        </div>
    </div>)
}