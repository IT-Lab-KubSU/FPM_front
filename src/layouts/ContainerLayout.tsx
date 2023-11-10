export default function ContainerLayout({children}: { children: React.ReactNode}) {
    return (
        <div className={'container py-8 px-4 lg:px-12 mx-auto'}>
            {children}
        </div>
    )
}
