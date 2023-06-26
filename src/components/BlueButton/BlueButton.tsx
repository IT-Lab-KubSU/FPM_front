interface IProps {
    href: string,
    text: string,
    className?: string
}

export default function BlueButton({href, text, className}: IProps) {
    return (
        <a href={href}>
            <span
                className={`bg-[#5C83E7] z-10 hover:bg-[#4d72e5] relative text-white duration-500 rounded-2xl font-semibold
                 ${className}`}>{text}</span>
        </a>
    )
}