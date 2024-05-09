import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const headers = { "accept-language": "ru,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const locales = ["ru-RU", "en-US", "zh-CN"];
const defaultLocale = "ru-RU";

match(languages, locales, defaultLocale);
