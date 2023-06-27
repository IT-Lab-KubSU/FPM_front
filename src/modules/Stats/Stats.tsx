interface IProps {
    text: string,
    value: number | string
}

const data = [
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

const Stat = ({text, value}: IProps) => {
    return (<div className="flex flex-col justify-between self-stretch items-center">
        <span className="font-bold text-zinc-100 text-5xl h-20 drop-shadow-md">{value}</span>
        <span className="text-lg text-zinc-100 drop-shadow-md">{text}</span>
    </div>)
}

export default function Stats() {
    return (<>
        <div className="container mx-auto px-12 my-8 drop-shadow-md">
            <div
                className="flex items-center justify-between bg-gradient-to-b px-[100px] py-[45px] from-[#3B6CE8] to-[#6F94F3] rounded-3xl">
                {data.slice(0, 5).map((item) => <><Stat text={item.text} value={item.value}/></>)}
            </div>
        </div>
    </>)
}