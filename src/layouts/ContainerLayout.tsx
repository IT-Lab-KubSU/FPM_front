export default function ContainerLayout({children}: { children: React.ReactNode}) {
    return (
        <div className={'container my-8 px-12 mx-auto'}>
            {children}
        </div>
    )
}
