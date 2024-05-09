import "server-only";

const dictionaries: { [key: string]: () => object } = {
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
};

export interface IIntroDict {
  facultyName: string;
  universityName: string;
  subtitle: string;
  contactButtonText: string;
}
export const getDictionary = async (locale: string): Promise<IIntroDict> =>
  dictionaries[locale]() as IIntroDict;
