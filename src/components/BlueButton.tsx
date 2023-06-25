interface IProps {
    href: string,
    text: string,
    textSize?: string,
    px?: string,
    py?: string,
}

export default function BlueButton({href, text, textSize, px, py}: IProps) {
    let className = "bg-[#5C83E7] z-10 hover:bg-[#4d72e5] relative text-white duration-500 rounded-2xl font-semibold";
    if (textSize)
        className += ` text-${textSize}`;
    if (!px)
        px = "4";
    className += ` px-${px}`;
    if (!py)
        py = "3";
    className += ` py-${py}`;
    return (
        <a href={href}>
                <span
                    className={className}>{text}</span>
        </a>
    )
}