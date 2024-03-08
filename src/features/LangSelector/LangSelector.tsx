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
import { useRouter } from "next/navigation";

enum Locale {
  ru,
  en,
  cn
}

interface Language {
  slug: string;
  imgCode: string;
  localCode: string;
}

const languages: { [key: string]: Language } = {
  [Locale.ru]: {
    imgCode: "ru",
    slug: "Russian",
    localCode: "РУ",
  },
  [Locale.en]: {
    imgCode: "gb",
    slug: "English",
    localCode: "EN",
  },
  [Locale.cn]: {
    imgCode: "cn",
    slug: "Chinese",
    localCode: "中文",
  },
};

export const LangSelector = (): ReactElement => {
  const router = useRouter();
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
        disabledKeys={disabledKeys}
        aria-label={"Выбор языка"}
      >
        {Object.entries(languages).map(([key, language]) => (
          <DropdownItem
            key={key}
            onClick={() => {
              router.push("./", {scroll: true});
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
