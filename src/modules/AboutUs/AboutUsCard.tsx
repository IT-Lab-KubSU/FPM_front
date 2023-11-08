export default function AboutUsCard({text, title}: {title: string, text: string}) {
    return <div className={"p-6 bg-gradient-to-b from-[#A5B9ECC4] to-[#b6c3e3c4] rounded-3xl shadow-md"}>
        <div className={"pb-4 font-semibold text-xl"}>{title}</div>
        <div className={"text-lg"}>{text}</div>
    </div>
}