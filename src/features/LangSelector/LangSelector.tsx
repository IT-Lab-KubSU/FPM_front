"use client";

import { useLanguage } from "@/hooks";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ReactElement, useMemo } from "react";

interface Language {
  slug: string;
  imgCode: string;
  localCode: string;
}

const languages: { [key: string]: Language } = {
  ru: {
    imgCode: "ru",
    slug: "Russian",
    localCode: "РУ",
  },
  en: {
    imgCode: "gb",
    slug: "English",
    localCode: "EN",
  },
  cn: {
    imgCode: "cn",
    slug: "Chinese",
    localCode: "中文",
  },
} as const;

export const LangSelector = (): ReactElement => {
  const [lang, setLang] = useLanguage();

  const currentLanguage = useMemo(() => {
    return languages[lang] ?? languages["ru"];
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
        aria-label={"Выбор языка"}
      >
        {Object.entries(languages).map(([key, language]) => (
          <DropdownItem
            key={key}
            onClick={() => {
              setLang(key);
            }}
            startContent={
              <Avatar
                alt={language.slug}
                className={"w-7 h-7"}
                src={`https://flagcdn.com/${language.imgCode}.svg`}
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
