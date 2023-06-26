"use client";
import {useState} from "react";

export default function News() {
    const NUM_OF_ELS = 2;
    const a = [1, 2, 3, 4, 5];
    const [cur, set] = useState(0);
    return (<>
        {a.slice(cur, cur + NUM_OF_ELS).map((item) => <><span>{item}</span></>)}
        <br/>
        <button className="mr-8 h-24 w-24 rounded-[50%] drop-shadow-md bg-zinc-400 flex justify-center items-center" onClick={() => {
            set(Math.max(cur - 1, 0));
        }}>
            <svg width="43" height="20" viewBox="0 0 43 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25568 9.23833C0.753319 9.7407 0.753319 10.5552 1.25568 11.0576L9.44221 19.2441C9.94458 19.7465 10.7591 19.7465 11.2614 19.2441C11.7638 18.7417 11.7638 17.9272 11.2614 17.4249L3.98453 10.1479L11.2614 2.87103C11.7638 2.36867 11.7638 1.55417 11.2614 1.0518C10.7591 0.549437 9.94458 0.549437 9.44221 1.0518L1.25568 9.23833ZM42.4722 8.86156L2.1653 8.86156V11.4343L42.4722 11.4343V8.86156Z"/>
            </svg>
        </button>
        <button className="mr-8 h-24 w-24 border-2 border-zinc-950 rounded-[50%]" onClick={() => {
            set(Math.min(cur + 1, a.length - NUM_OF_ELS));
        }}>
            <svg width="43" height="20" viewBox="0 0 43 20" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25568 9.23833C0.753319 9.7407 0.753319 10.5552 1.25568 11.0576L9.44221 19.2441C9.94458 19.7465 10.7591 19.7465 11.2614 19.2441C11.7638 18.7417 11.7638 17.9272 11.2614 17.4249L3.98453 10.1479L11.2614 2.87103C11.7638 2.36867 11.7638 1.55417 11.2614 1.0518C10.7591 0.549437 9.94458 0.549437 9.44221 1.0518L1.25568 9.23833ZM42.4722 8.86156L2.1653 8.86156V11.4343L42.4722 11.4343V8.86156Z"/>
            </svg>
        </button>
    </>)
}