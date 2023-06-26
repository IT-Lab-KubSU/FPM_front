interface IProps {
    text: string
}

export default function Subtitle({text}: IProps) {
    return (<div className="container mx-auto flex items-center">
        <div className="bg-[#5C83E7] rounded-3xl h-6 w-6 mr-6"></div>
        <h2 className="font-bold text-4xl">{text}</h2>
    </div>)
}