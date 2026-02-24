import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Header from "@/components/layout/headers/Header";
import FooterWrap from "@/components/layout/FooterWrap";
import LandingPage from "@/components/pages/LandingPage";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("IndexPage");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <LandingPage />
      <FooterWrap />
    </div>
  );
}
