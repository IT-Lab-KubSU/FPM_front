import Image from "next/image";
import {news} from "@/app/news";
import {useRef, useState} from "react";
interface INewDTOCard {
    image1: string,
    image2: string,
    image3: string
}
export default function RetrieveNewImage({mas}: {mas: string[]}) {
    const lengthCard = mas.length;
    const [currentSlideCard, setSlideCard] = useState(0);
    function nextSlideCard(step = 1) {
        if(currentSlideCard+2+1==3)
            setSlideCard((prevState) => 0)
        else
            setSlideCard((prevState) => prevState + 1)
        console.log(currentSlideCard);
    }
    function stat(id:number){
        if(id>lengthCard-1){
            console.log('a')
            console.log((id % (lengthCard)))
            return mas[(id % (lengthCard))]
        }
        else {
            if(id<0){
                console.log('b')
                console.log(lengthCard-1-(id % (lengthCard-1)))
                return mas[lengthCard-1-(id % (lengthCard-1))]
            }
            else
                if (id < lengthCard && id >= 0) {
                    console.log('c')
                    console.log(id)
                    return mas[id];
                }
        }
    }
    function prevSlideCard(step = 1) {
        if(currentSlideCard-1==-1)
            setSlideCard((prevState) => 2)
        else
            setSlideCard((prevState) => prevState - 1)
        console.log(currentSlideCard);
    }

    return <div className={'w-full flex items-center'}>
        <Image src={stat(currentSlideCard)} alt={''} height={600} width={450} unoptimized={true}
               className={`rounded-xl drop-shadow-md max-h-[600px]`}/>
        <div className={"w-full flex flex-col justify-center items-center"}>
            <svg onClick={() => nextSlideCard(1)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5.58579L17.4142 11L16 12.4142L13 9.41421V18H11V9.41421L8 12.4142L6.58579 11L12 5.58579Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="black"/>
            </svg>
            <Image src={stat(currentSlideCard)} alt={'news[id].title'} height={80} width={120} unoptimized={true}
                   className={`rounded-xl drop-shadow-md max-h-[80px]`}></Image>
            <Image src={stat(currentSlideCard+1)} alt={''} height={80} width={120} unoptimized={true}
                   className={`rounded-xl drop-shadow-md max-h-[80px]`}></Image>
            <Image src={stat(currentSlideCard+2)} alt={''} height={80} width={120} unoptimized={true}
                   className={`rounded-xl drop-shadow-md max-h-[80px]`}></Image>
            <svg onClick={() => prevSlideCard(1)} className={"rotate-180"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5.58579L17.4142 11L16 12.4142L13 9.41421V18H11V9.41421L8 12.4142L6.58579 11L12 5.58579Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="black"/>
            </svg>
        </div>
    </div>
}
