export default function ContentBox({children}: { children: React.ReactNode}) {
    return (
        <div className={'bg-white dark:bg-zinc-100 dark:text-zinc-800 rounded-3xl drop-shadow-md'}>
            {children}
        </div>
    )
}
