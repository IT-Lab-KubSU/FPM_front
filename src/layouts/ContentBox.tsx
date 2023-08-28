export default function ContentBox({children, className}: { children: React.ReactNode, className?:string}) {
    return (
        <div className={'bg-white dark:bg-zinc-100 dark:text-zinc-800 rounded-3xl drop-shadow-md ' + className}>
            {children}
        </div>
    )
}
