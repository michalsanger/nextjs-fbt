import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { initTranslations } from "@/helpers/initTranslations";

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "en" } = useRouter();
  initTranslations(locale);

  return <Component {...pageProps} />;
}
