"use client"
import BlueButton from "@/components/BlueButton/BlueButton";
import Link from "next/link";
import './Feedback.css'
import {Dispatch, SetStateAction, useMemo, useRef, useState} from "react";
import {
    Checkbox,
    Input,
    Modal, ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import Image from "next/image";

export default function Feedback() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [checkboxValue, setCheckboxValue] = useState(true)
    const [nameValue, setNameValue] = useState<string>()
    const [phoneValue, setPhoneValue] = useState<string>()
    const [emailValue, setEmailValue] = useState<string>()

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const validatePhone = (value: string) => value.match(/^[+]?[0-9]{1,2}[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i);

    const isCheckboxInvalid = useMemo(() => {
        return !checkboxValue
    }, [checkboxValue]);

    const isEmailInvalid = useMemo(() => {
        if (emailValue === undefined) return false;
        if (emailValue === "") return true;

        return !validateEmail(emailValue);
    }, [emailValue]);

    const isPhoneInvalid = useMemo(() => {
        if (phoneValue === undefined) return false;
        if (phoneValue === "") return true;

        return !validatePhone(phoneValue);
    }, [phoneValue]);

    const isNameInvalid = useMemo(() => {
        if (nameValue === undefined) return false;
        return nameValue === "";
    }, [nameValue]);


    const isDisabled = useMemo(() => {
        return !nameValue || !emailValue || !phoneValue ||
            isNameInvalid || isPhoneInvalid || isEmailInvalid || isCheckboxInvalid

    }, [isEmailInvalid, isPhoneInvalid, isNameInvalid, isCheckboxInvalid, nameValue, emailValue, phoneValue]);

    const sendApplication = () => {
        if (isDisabled)
            return

        const data = {
            phone: phoneValue,
            email: emailValue,
            name: nameValue
        }

        console.log(data)
        onOpen()
    }

    return <>
        <div id={"feedback"} className={"container my-12 mt-24 px-12 mx-auto"}>
            <div
                className={"rounded-2xl bg-gradient-to-b from-[#A5B9ECC4] to-[#ccdafdc4] grid drop-shadow-lg overflow-hidden grid-cols-1 lg:grid-cols-2"}>
                <div className={"p-12"}>
                    <div className={"mb-12"}>
                    <span className={"font-bold text-3xl text-zinc-900"}>
                        Оставить заявку
                    </span>
                    </div>
                    <div className={"grid grid-cols-1 gap-4 my-4"}>
                        <Input
                            value={nameValue}
                            type={"text"}
                            label={"Имя"}
                            name={"name"}
                            color={isNameInvalid ? "danger" : "default"}
                            errorMessage={isNameInvalid && "Введите свое имя"}
                            onValueChange={setNameValue}
                            isInvalid={isNameInvalid}
                            required={true}/>
                        <Input
                            value={phoneValue}
                            type={"phone"}
                            label={"Номер телефона"}
                            name={"phone"}
                            color={isPhoneInvalid ? "danger" : "default"}
                            errorMessage={isPhoneInvalid && "Введите правильный номер телефона"}
                            onValueChange={setPhoneValue}
                            isInvalid={isPhoneInvalid}
                            required={true}/>
                        <Input
                            value={emailValue}
                            type={"email"}
                            label={"Почта"}
                            name={"email"}
                            color={isEmailInvalid ? "danger" : "default"}
                            errorMessage={isEmailInvalid && "Введите правильный email адрес"}
                            onValueChange={setEmailValue}
                            isInvalid={isEmailInvalid}
                            required={true}/>
                        <BlueButton disabled={isDisabled}
                                    className={"py-4 px-6 w-full rounded-lg"}
                                    onClick={sendApplication}
                                    text={"Подать заявку"}
                        />
                    </div>
                    <Checkbox
                        isSelected={checkboxValue}
                        onValueChange={setCheckboxValue}
                        defaultSelected
                        size="md"
                        required={true}
                    >
                        <span className={"ml-2 text-zinc-900 md:text-md text-sm"}>
                        Я даю согласие на обработку персональных данных, согласен на получение информационных рассылок от КубГУ и соглашаюсь c
                        <Link href="" className={"font-bold"}> политикой конфиденциальности</Link>.
                    </span>
                    </Checkbox>
                </div>
                <div>
                    <div className={"w-full h-full min-h-[400px]"} style={{position: "relative", overflow: "hidden"}}><a
                        href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0"}}>Краснодар</a><a
                        href="https://yandex.ru/maps/35/krasnodar/house/stavropolskaya_ulitsa_149/Z0AYdgRhSEMGQFpvfXxweHpgYA==/?ll=39.032787%2C45.019446&utm_medium=mapframe&utm_source=maps&z=16.6"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Ставропольская
                        улица,
                        149 на карте
                        Краснодара — Яндекс Карты</a>
                        <iframe className={"w-full h-full"}
                                src="https://yandex.ru/map-widget/v1/?ll=39.032787%2C45.019446&mode=whatshere&whatshere%5Bpoint%5D=39.031161%2C45.019634&whatshere%5Bzoom%5D=17&z=16.6"
                                frameBorder="1"
                                style={{position: "relative"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Заявку отправлена успешно!</ModalHeader>
                        <ModalBody>
                            Спасибо!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={onClose}>
                                Закрыть
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}