import {IStatsDTO} from "@/dto";

const Stat = ({text, value}: IStatsDTO) => {
    return (<div className="flex flex-col justify-between self-stretch items-center">
        <span className="font-bold text-zinc-100 text-5xl h-20 drop-shadow-md">{value}</span>
        <span className="text-lg text-zinc-100 drop-shadow-md">{text}</span>
    </div>)
}

export default function Stats({stats}: { stats: IStatsDTO[] }) {
    return <>
        <div className={"py-10"}>
            <div className="container mx-auto px-12 drop-shadow-md">
                <div key={"1"}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-28 bg-gradient-to-b px-[100px] py-[45px] from-[#3B6CE8] to-[#6F94F3] rounded-3xl">
                    {stats.slice(0, 4).map(
                        (item, index) => <Stat text={item.text} value={item.value} key={index}/>
                    )}
                </div>
            </div>
        </div>
    </>
}