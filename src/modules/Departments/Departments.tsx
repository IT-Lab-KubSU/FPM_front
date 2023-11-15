import ContainerLayout from "@/layouts/ContainerLayout";
import {IDepartmentsDT, IDirectionDTO} from "@/dto";

export const Department = ({departments}: { departments: IDepartmentsDT[]}) => {
    return <ContainerLayout>
        <div className={"flex items-center justify-center"}>
            <h1 className={"w-fit flex items-center justify-center bg-[#5C83E7] hover:bg-[#4d72e5] text-white duration-500 rounded-2xl drop-shadow-md px-8 py-2 mt-2 mb-6 font-medium text-center text-4xl"}>
                 {departments[0]['title']}
            </h1>
        </div>
    </ContainerLayout>
}