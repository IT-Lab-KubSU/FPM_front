"use client";
import {useEffect} from "react";
import {log} from "util";

interface IProps {
    text: string
    mainText?: string
}


export default function SnakeText({text, mainText}: IProps) {
    useEffect(() => {
        const snakes = document.querySelectorAll<HTMLElement>(".snake");
        snakes.forEach((snake) => {
            const path = snake.querySelector<HTMLElement>("textPath");
            document.addEventListener("scroll", (event) => {
                path?.setAttribute("startOffset", `${snake.getBoundingClientRect().y - window.scrollY}`);
            });
        })
    }, [])
    return (<>
        <svg className="snake" viewBox="0 0 1920 509" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="text-curve" fill="none"
                  d="M1 369.502C1 369.502 214.5 135 524 135C833.5 135 1067 390.289 1369.5 373C1672 355.71 1764.5 135 2245.5 135">
            </path>
            <text y="40" letter-spacing="-0.02em" fill="#2B2D33"
                  font-family="ES Build, Matter, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;"
                  font-size="124">
                <textPath href="#text-curve" font-weight="900" startOffset="90.4064516129032">
                    <tspan fill="#498CE9">{mainText}</tspan>
                    {text}
                </textPath>
            </text>
        </svg>
    </>)
}