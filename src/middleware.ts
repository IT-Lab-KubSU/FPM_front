import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, NextRequest } from "next/server";

import { languages } from "./language";
const locales = Object.keys(languages);

const getLocale = (request: NextRequest): string => {
  const defaultLocale = "ru-RU";
  const languages = new Negotiator({
    headers: Object.fromEntries(request.headers.entries()),
  }).languages();
  return match(languages, locales, defaultLocale);
};

const pathnameHasLocale = (pathname: string): boolean => {
  return Object.keys(languages).some((locale) =>
    pathname.startsWith(`/${locale}`),
  );
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const referer = request.headers.get("referer");

  if (pathnameHasLocale(pathname)) return;

  if (referer) {
    const url = new URL(referer);
    const refererHasLocale = pathnameHasLocale(url.pathname);
    if (refererHasLocale) {
      // extract locale and remove leading slash
      const locale = url.pathname.split("/")[1];
      const destination = new URL(`/${locale}${pathname}`, url.origin);
      return NextResponse.redirect(destination);
    }
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: ["/((?!_next).*)", "/"],
};
