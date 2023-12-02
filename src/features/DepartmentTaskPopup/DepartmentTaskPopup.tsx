"use client"
import {
    Chip,
    Modal,
    ModalContent,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";

export const DepartmentTaskPopup = (department: {department: string}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return <>
        <div onClick={onOpen} className={"cursor-pointer px-2"}>
            <Chip size={"lg"} radius={"md"} classNames={{
                base: "bg-fpmPrimary text-white md:text-xl mt-2 p-4 md:p-6"
            }}>Ответ</Chip>
        </div>
        <Modal isOpen={isOpen}
               onOpenChange={() => {
                   onOpenChange()
               }
               }
               onClose={() => {
                   onOpenChange();
               }}
               backdrop={"blur"}
               classNames={{
                   header: "block py-10 px-5 shadow-inner",
                   body: "p-2 pb-3 duration-500 items-center",
                   closeButton: "hidden"
               }}>
            <ModalContent>
                <ModalHeader>
                    <div>
                        {department.department}
                    </div>
                </ModalHeader>
            </ModalContent>
        </Modal>
    </>
}