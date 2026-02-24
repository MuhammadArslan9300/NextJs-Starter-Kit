// components/Header.tsx
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../shared/LanguageSwitcher";
import ContinueFreeButton from "@/components/ui/buttons/ContinueFreeButton";
import MainAppLogo from "@/components/icons/main-app-logo";
import NavLink from "@/components/ui/NavLink";
import NavbarMenu from "@/components/ui/NavLink";

export default function Header() {
  const t = useTranslations();
  const items = [
    { label: "Pricing", href: "#features" },
    { label: "Success Stories", href: "#pricing" },
    { label: "FAQs", href: "#contact" },
  ];
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 h-[64px] ">
      <nav className="container mx-auto px-4 flex h-full items-center max-w-7xl justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          <MainAppLogo width={200} height={50} />
        </Link>
        <NavbarMenu items={items} />

        <div className="flex items-center space-x-4 gap-4">
          <div className="md:block hidden">
            <ContinueFreeButton text="Continue for FREE" />
          </div>
          <LanguageSwitcher /> {/* Integrated here */}
        </div>
      </nav>
    </header>
  );
}
