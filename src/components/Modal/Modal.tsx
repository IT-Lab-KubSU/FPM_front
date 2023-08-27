import Image from "next/image";
import ContentBox from "@/layouts/ContentBox";
import {forwardRef, useImperativeHandle, useState} from "react";

type ModalHandle = {
    setVisible: () => void;
};

// eslint-disable-next-line react/display-name
export const Modal = forwardRef<ModalHandle>((props, ref) => {
    const [closed, setClosed] = useState(true);

    useImperativeHandle(ref, () => ({
        setVisible: () => {
            setClosed(false);
        }
    }));

    return closed ? <></> :
        <div className={"w-full h-full fixed left-0 top-0 z-50 bg-zinc-400 bg-opacity-80 backdrop-blur-md"}>
            <div className={"flex items-center justify-center h-full w-full"}>
                <ContentBox>
                    <div className={"px-12 py-8"}>
                        <Image
                            className={"mx-auto select-none"}
                            src={"data:image/png;base64,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"}
                            alt={"success"}
                            width={120}
                            height={120}
                        />
                        <div className={"mt-8"}>
                            Заявка успешно отправлена!
                        </div>
                    </div>
                </ContentBox>
            </div>
            <div className={"absolute right-0 top-0 opacity-70 cursor-pointer p-16 select-none"} onClick={() => setClosed(true)}>
                <Image
                    className={"mx-auto"}
                    src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmElEQVR4nO3dTW7bMBRF4beZOHNzoKw5XlfcTFJzBywEiECQJgjjiNTjfecAAgp00N58NesfGDIjIiIiIiIiIiIiIiIiIiK6v0czu5jZdbvWX58C739W2r+Y2c3Myofrtv2eeovy/mRmfz8ZV69sZk+mW1Le/904iZFR97eOm3pk1P0/HTflyKj77x031cio+387boqRUffvNc71yKj7H794nbfHyBleJy7b33Xv/Tcvb4ZcOoybBXnphFuv9Wd7eH86DnR3XHU8lj+7Xs1B184jPSKnAbjr9WIOeh4w1NNxvXQ+lt9f68/28E6dnmR5RF4G4rp5krV2NrO3gchPwsdycfAPORxyio6rjJzA1UVO4OoiJ3B1kRO4usgJXF3kBK4ucgJXFzmBq4ucwNVFTuDqIidwdZETuLrICVzdz1jz4D/L7adCyo/kAi7IhUcuj+TCsRzruM78n6uLnMHVfSRncHWRM7i6yBlcXeQMri5yBlcXOYOri5zB1UXO4I5t5Ed+xeH3k6UbjVtA1sctIOvjFpD1cQvI+rgFZH3cArI+bgFZH7eArI9bQNbHLSDr4xaQ9XELyP/HV1eEO+KLYGcHX10N0ZHf8juDrItbA1kYtwayMG4NZGHcGsjCuDWQhXFrIAvj1kAWxq2BLIxbA1kYtwayMG4NZGHcWnhkZVyLjtzr/sGecEPf2u4SBPcI5BD3D/aEO/q4DnH/YG+4I5Hl7x/sFXfUcS19/2DvuL2R3TzJ6nFczYIbav9eI12OayjE/t+OdD2uoRD77x05xbiGQuz/6cipxjUUYn/ryCnHNRRi/3cjpx7XUIj9yxevk28K4xoKsf+0vXF+3a71HZoHi9Mp+H4iIiIiIiIiIiIiIiIiIrJ9+weBV+8D20g8eQAAAABJRU5ErkJggg=="}
                    alt={"success"}
                    width={70}
                    height={70}
                />
            </div>
        </div>
})