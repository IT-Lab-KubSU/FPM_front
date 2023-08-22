export default function Subtitle({text}: { text: string }) {
    return (<div className="container mx-auto flex items-center pt-8">
        <div className="bg-[#5C83E7] rounded-3xl h-4 w-4 md:h-6 md:w-6 mr-6"></div>
        <h2 className="font-bold text-2xl md:text-4xl">{text}</h2>
    </div>)
}