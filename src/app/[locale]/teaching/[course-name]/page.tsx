import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Image from "next/image";
import Header from "@/components/layout/headers/Header";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterWrap from "@/components/layout/FooterWrap";
import MainContainer from "@/components/global/main-container";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("IndexPage");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MainContainer maxWidth="max-w-[1200px]" padding="p-0">
          <FeaturesSection />
        </MainContainer>
      </main>
      <FooterWrap />
    </div>
  );
}
