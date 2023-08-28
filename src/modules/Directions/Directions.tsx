"use client";
import DirButton from "@/modules/Directions/DirButton";
import DirCard from "@/modules/Directions/DirCard";
import {useState} from "react";
import ContainerLayout from "@/layouts/ContainerLayout";


export default function Directions({directions}: { directions: IDirectionDTO[] }) {
    const [dirButton, setButton] = useState(0);
    const [dirCard, setCard] = useState(0);


    return (<ContainerLayout>
        <div className="mb-8 DirButtons flex flex-wrap gap-2 lg:gap-8">
            {directions.map((item, index) => <>
                <DirButton text={item.buttonText} index={index} cur={dirButton} cardSet={setCard}
                           set={setButton} key={index}/>
            </>)}
        </div>

        <div className="Disclosures">
            {directions[dirButton].directions.map((item, index) => <>
                <DirCard
                    card={item}
                    index={index}
                    cur={dirCard}
                    set={setCard}
                    key={index}
                />
            </>)}
        </div>
    </ContainerLayout>)
}