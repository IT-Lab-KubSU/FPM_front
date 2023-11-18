import cn from 'classnames'

interface IProps {
    bgColor?: string
    size: number
    opacity?: number
    pulse?: boolean
    className?: string
}

export const Sphere = ({className, bgColor, pulse, size, opacity}: IProps) => {
    return (<div
        className={cn('blur-3xl rounded-3xl bg-red-800', pulse ? "animate-pulse" : "", className)}
        style={{
            height: size,
            width: size,
            backgroundColor: bgColor ? bgColor : "#c54646",
            opacity: opacity ? opacity : .1,
        }}>

    </div>)
}