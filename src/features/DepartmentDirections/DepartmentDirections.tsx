'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {ContainerLayout} from "@/entities";

interface IDepartmentDTO{
    slug: string,
    title: string,
    text: string,
    image: string[],
    advantages: string[],
    task: ITask[],
    chair: IChair[]
}
interface ITask{
    name: string,
    description: string,
    answer: string
}
interface IChair{
    name: string,
    description: string,
    img: string
}

const names = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8', 'Name9', 'Name10'];


const Window = ({ name, size, opacity, y }: { name: string, size: string, opacity: number, y: number }) => {
    const windowVariants = {
        initial: { opacity: 0, y: -200 },
        animate: { opacity, y},
        exit: { opacity: 0, y: -200 },
    };
    const style = {
        width: size,
        backgroundColor: 'blue',
    };


    return (
        <motion.div
            className="window"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={windowVariants}
            style={style}
        >
            {name}
        </motion.div>
    );
};

export const DepartmentDirections = ({department}: {department: IDepartmentDTO}) => {
    const [windows, setWindows] = useState<string[]>(names.slice(0, 3));
    const[window_now, setWindows_now] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextNames = names.slice(window_now, window_now + 3);
            setWindows_now((prevWindows_now)=>(prevWindows_now+1));
            if (window_now+3>names.length-1){
                setWindows_now(0);
            }
            if (nextNames.length === 0) {
                clearInterval(interval);
                return;
            }

            setWindows((prevWindows) => [...prevWindows.slice(3), ...nextNames]);
        }, 5000);

        return () => clearInterval(interval);
    }, [windows]);

    return (
        <ContainerLayout>
        <div className={"h-[300px]"}>
            <AnimatePresence>
                {windows.map((name, index) => (
                    <Window
                        key={name}
                        name={name}
                        opacity={1 - index * 0.3}
                        size={`${200-index*50}px`}
                        y={index * 100}
                    />
                ))}
            </AnimatePresence>
        </div>
        </ContainerLayout>
    );
}
