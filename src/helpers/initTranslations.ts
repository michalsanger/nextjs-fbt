import {
  IntlVariations,
  init,
  IntlVariationsGender,
  TranslationDict,
} from "fbt";
import enTranslations from "@/translations/en_US.json";
import csTranslations from "@/translations/cs_CZ.json";
import esTranslations from "@/translations/es_ES.json";

type SupportedLocale = "en" | "es" | "cs";

const locales = new Map<SupportedLocale, string>();
locales.set("en", "en_US");
locales.set("es", "es_ES");
locales.set("cs", "cs_CZ");

export function initTranslations(nextJsLocale: string) {
  const locale = getLocale(nextJsLocale);

  init({
    translations: getTranslations(locale),
    hooks: {
      getViewerContext: () => ({
        GENDER: IntlVariations.GENDER_UNKNOWN as IntlVariationsGender,
        locale: locales.get(locale) as string,
      }),
    },
  });
}

function getLocale(nextJsLocale: string): SupportedLocale {
  if (locales.has(nextJsLocale as any)) {
    return nextJsLocale as SupportedLocale;
  }

  return "en";
}

function getTranslations(locale: SupportedLocale): TranslationDict {
  if (locale === "cs") {
    return csTranslations;
  }
  if (locale === "es") {
    return esTranslations;
  }

  return enTranslations;
}
