import ContainerLayout from "@/layouts/ContainerLayout";

export const RetrieveNew = ({id}: { id: number }) => {
    return <ContainerLayout>
        <div className={"grid grid-cols-1 lg:grid-cols-3"}>
            <div className={"col-span-1 order-2 lg:order-1"}>
                <div className={"bg-amber-200"}>
                    <div>News</div>
                    <div className={""}></div>
                </div>
            </div>
            <div className={"col-span-2 order-1 lg:order-2"}>
                <div className={"bg-amber-200"}>

                </div>
            </div>
        </div>
    </ContainerLayout>
}