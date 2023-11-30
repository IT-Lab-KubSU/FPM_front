import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {useState} from "react";
import {Selection} from "@react-types/shared/src/selection";

const languages = ["РУ", "EN"];

export const LangSelector = () => {
    const disabledKeys = ["EN"];
    const [lang, setLang] = useState<Selection>(new Set(languages[0]));
    return <Dropdown>
        <DropdownTrigger>
            <div className="font-bold text-lg select-none">{lang}</div>
        </DropdownTrigger>
        <DropdownMenu
            variant={"flat"}
            color={"primary"}
            disallowEmptySelection={true}
            disabledKeys={disabledKeys}
            selectionMode={"single"}
            aria-label={"Выбор языка"}
            onSelectionChange={setLang}
            selectedKeys={lang}>
            {languages.map((language, index) =>
                <DropdownItem key={language}>
                    <span className="font-bold text-lg select-none" key={index}>{language}</span>
                </DropdownItem>
            )}
        </DropdownMenu>
    </Dropdown>
}