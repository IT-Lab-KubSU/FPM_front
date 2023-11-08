export default function Subtitle({text}: { text: string }) {
    return (<div className="container mx-auto flex items-center">
        <div>
            <div className="bg-[#5C83E7] rounded-3xl h-3 w-3 md:h-6 md:w-6 mr-6"></div>
        </div>
        <h2 className="font-bold text-xl md:text-3xl">{text}</h2>
    </div>)
}