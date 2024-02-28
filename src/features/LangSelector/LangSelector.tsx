"use client";
import { ReactElement, useMemo, useState } from "react";

import { Selection } from "@react-types/shared/src/selection";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

interface Language {
  slug: string;
  localCode: string;
}

const languages: { [key: string]: Language } = {
  ru: {
    slug: "Russian",
    localCode: "РУ",
  },
  gb: {
    slug: "English",
    localCode: "EN",
  },
  cn: {
    slug: "Chinese",
    localCode: "中文",
  },
};

export const LangSelector = (): ReactElement => {
  // toDo(Set disabled keys or remove)
  const disabledKeys = [""];
  const [lang, setLang] = useState<Selection>(
    new Set([Object.keys(languages)[0]]),
  );

  const currentLanguage = useMemo(() => {
    const key = Array.from(lang)[0].toString();
    return languages[key];
  }, [lang]);

  return (
    <Dropdown
      backdrop={"blur"}
      classNames={{
        content: "min-w-[150px]",
      }}
    >
      <DropdownTrigger>
        <div className="font-bold text-lg select-none">
          {currentLanguage.localCode}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        variant={"flat"}
        color={"primary"}
        disallowEmptySelection
        disabledKeys={disabledKeys}
        selectionMode={"single"}
        aria-label={"Выбор языка"}
        onSelectionChange={setLang}
        selectedKeys={lang}
      >
        {Object.entries(languages).map(([key, language]) => (
          <DropdownItem
            key={key}
            startContent={
              <Avatar
                alt={language.slug}
                className={"w-7 h-7"}
                src={`https://flagcdn.com/${key}.svg`}
              />
            }
          >
            <span className={"font-bold text-lg select-none px-1"} key={key}>
              {language.localCode}
            </span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
