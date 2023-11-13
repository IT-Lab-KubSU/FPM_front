"use client";
import DirCard from "@/modules/Directions/DirCard";
import ContainerLayout from "@/layouts/ContainerLayout";
import {Accordion, AccordionItem, Tab, Tabs} from "@nextui-org/react";
import {IDirectionDTO} from "@/dto";


export default function Directions({directions}: { directions: IDirectionDTO[] }) {
    return (<ContainerLayout>
        <Tabs size={"lg"}
              className={"pb-4 font-semibold"}
              color={"primary"}
              variant={"light"}
              aria-label={"Направления"}
              radius={"lg"}
        >
            {directions.map(({buttonText}, index) => <Tab key={index} title={buttonText}>
                <Accordion variant="splitted" className={"px-0"}>
                    {directions[index].directions.map((item, index) =>
                            <AccordionItem
                                startContent={<div
                                    className="text-[#3364E2] text-2xl font-semibold col-span-1">
                                    {`0${index + 1}`}
                                </div>}
                                key={index}
                                indicator={<div className={"text-md lg:text-xl font-light"}>
                                    {item.code}
                                </div>}
                                disableIndicatorAnimation={true}
                                title={<span className={"text-md md:text-lg break-all lg:text-xl text-zinc-800"}>
                        {item.title}
                    </span>}
                                aria-label={item.title}>
                                <DirCard
                                    card={item}
                                    key={index}
                                />
                            </AccordionItem>
                    )}
                </Accordion>
            </Tab>)}
        </Tabs>
    </ContainerLayout>)
}