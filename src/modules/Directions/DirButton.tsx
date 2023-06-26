interface IProps {
    text: string,
    index: number,
    set: any,
    cardSet: any,
    cur: any
}

export default function DirButton({text, index, cur, set, cardSet}: IProps) {
    return (<button onClick={() => {set(index); cardSet(0)}} className={`${(index === cur)? "dark:bg-[#5C83E7] dark:text-white bg-zinc-300 text-zinc-700":"bg-white"} dark:text-zinc-800  duration-700 ease-in-out mr-8 py-3 px-8 text-xl font-semibold rounded-3xl shadow-2xl`}>
        {text}
    </button>)
}