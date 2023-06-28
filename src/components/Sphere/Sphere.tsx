interface IProps {
    bgColor?: string
    size: number
    opacity?: number
    pulse?: boolean
    addClass?: string
}

export default function Sphere({addClass, bgColor, pulse, size, opacity}: IProps) {
    return (<div
        className={`z-0 absolute ${pulse ? "animate-pulse" : ""} blur-3xl rounded-3xl bg-red-800 ${addClass}`}
        style={{
            height: size,
            width: size,
            backgroundColor: bgColor ? bgColor : "#c54646",
            opacity: opacity ? opacity : .1,
        }}>

    </div>)
}