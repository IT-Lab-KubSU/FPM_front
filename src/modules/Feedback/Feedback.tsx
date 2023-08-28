"use client"
import BlueButton from "@/components/BlueButton/BlueButton";
import Link from "next/link";
import './Feedback.css'
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {Modal, ModalHandle} from "@/components/Modal/Modal";

const validatePhone = (phone: string, setF: Dispatch<SetStateAction<string>>) => {
    let start = ""

    if (phone.startsWith("+"))
        start = "+"

    phone = phone.replace(/\D/g, '')
    if (phone.length > 13)
        return
    phone = phone.replace(/(\d{1,3})(\d{3})(\d{3})(\d{4})$/g, function (a, b, c, d, e) {
        let ret = "";
        if (b != "")
            ret = b;
        if (c != "")
            ret = ret + "(" + c;
        if (d != "")
            ret = ret + ")" + d;
        if (e != "")
            ret = ret + "-" + e;
        return ret;
    })
    setF(start + phone)
}
export default function Feedback() {
    const [disabledCheckbox, setDisabled] = useState(false)
    const [phoneValue, setPhoneValue] = useState('')
    const [phoneError, setPhoneError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const modalRef = useRef<ModalHandle | null>(null);

    const openModal = () => {
        modalRef.current?.setVisible();
    };

    const sendApplication = () => {
        const phone = document.querySelector<HTMLInputElement>('#phone')
        const name = document.querySelector<HTMLInputElement>('#name')
        const email = document.querySelector<HTMLInputElement>('#email')

        if (!(phone && name && email) || disabledCheckbox)
            return

        const emailRegexp = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        const phoneRegexp = new RegExp('^[\\+]?[0-9]{1,2}[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')

        let error = false;

        if (!phoneRegexp.test(phone.value)) {
            error = true
            setPhoneError(true)
        } else
            setPhoneError(false)

        if (!emailRegexp.test(email.value)) {
            error = true
            setEmailError(true)
        } else
            setEmailError(false)

        if (!name.value) {
            error = true
            setNameError(true)
        } else
            setNameError(false)

        if (error) return
        console.log("Send application")
        openModal()
    }


    return <>
        <div id={"feedback"} className={"container my-12 mt-24 px-12 mx-auto"}>
            <div className={"rounded-2xl bg-gradient-to-b from-[#A5B9ECC4] to-[#ccdafdc4] grid drop-shadow-lg overflow-hidden grid-cols-1 lg:grid-cols-2"}>
                <div className={"p-12"}>
                    <div className={"mb-12"}>
                    <span className={"font-bold text-3xl text-zinc-900"}>
                        Оставить заявку на поступление
                    </span>
                    </div>
                    <div className={"grid grid-cols-1 gap-4 my-4"}>
                        <input
                            className={`rounded-lg drop-shadow-md py-4 px-6 w-full ${nameError ? "border-2 border-red-400 placeholder-red-600 text-red-600" : ""}`}
                            onInput={
                                (el) => {
                                    setPhoneError(false)
                                }
                            }
                            id={"name"}
                            type={"text"}
                            name={"name"}
                            placeholder={"Имя"}
                            required={true}/>
                        <input
                            className={`rounded-lg drop-shadow-md py-4 px-6 w-full ${phoneError ? "border-2 border-red-400 placeholder-red-600 text-red-600" : ""}`}
                            id={"phone"}
                            onInput={
                                (el) => {
                                    validatePhone(el.currentTarget.value, setPhoneValue)
                                    setPhoneError(false)
                                }
                            }
                            onSelect={
                                (el) => {
                                    const input = el.currentTarget as HTMLElement
                                    input.setAttribute("placeholder", "+_(___)___-____")
                                }
                            }
                            onBlur={
                                (el) => {
                                    const input = el.currentTarget as HTMLElement
                                    input.setAttribute("placeholder", "Номер телефона")
                                }
                            }
                            value={phoneValue}
                            type={"tel"}
                            name={"phone"}
                            placeholder={"Номер телефона"}
                            pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
                            required={true}/>
                        <input
                            className={`rounded-lg drop-shadow-md py-4 px-6 w-full ${emailError ? "border-2 border-red-400 placeholder-red-600 text-red-600" : ""}`}
                            onInput={(el) => {
                                setPhoneError(false)
                            }}
                            id={"email"}
                            type={"text"}
                            name={"email"}
                            placeholder={"Почта"}
                            required={true}/>
                        <BlueButton disabled={disabledCheckbox}
                                    className={"py-4 px-6 w-full rounded-lg"}
                                    onClick={sendApplication}
                                    text={"Подать заявку"}
                        />
                    </div>

                    <input onChange={
                        () => setDisabled((prevState) => !prevState)
                    }
                           type="checkbox"
                           className="custom-checkbox"
                           name="policy"
                           id="policy"
                           checked={!disabledCheckbox}
                           required={true}/>
                    <label htmlFor="policy">
                    <span className={"ml-2 text-zinc-900 md:text-md text-sm"}>
                        Я даю согласие на обработку персональных данных, согласен на получение информационных рассылок от КубГУ и соглашаюсь c
                        <Link href="" className={"font-bold"}> политикой конфиденциальности</Link>.
                    </span>
                    </label>
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
        <Modal ref={modalRef}/>
    </>
}