import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { Noto_Sans } from "next/font/google";
import { CssVarsProvider } from "@mui/joy/styles";

export const metadata: Metadata = {
  metadataBase: new URL("http://clearcutoff.in"),

  title: {
    default: "Clear Cutoff",
    template: "%s | Clear Cutoff",
  },
  description:
    "Clear Cutoff helps you crack teaching exams like CTET, HTET, UPTET with focused courses and test series.",
  icons: {
    icon: [
      { url: "/icons/Logo-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/Logo-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/Logo-48x48.png",
  },

  openGraph: {
    title: "Clear Cutoff",
    description:
      "Clear Cutoff helps you crack teaching exams like CTET, HTET, UPTET with focused courses and test series.",
    url: "/",
    siteName: "Clear Cutoff",
    images: [
      {
        url: "https://www.clearcutoff.in/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clear Cutoff preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clear Cutoff",
    description:
      "Clear Cutoff helps you crack teaching exams like CTET, HTET, UPTET with focused courses and test series.",
    images: ["https://www.clearcutoff.in/icons/og-image.png"],
  },
  //   manifest: "/site.webmanifest",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans", // define CSS variable
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={notoSans.className}>
        <CssVarsProvider>{children}</CssVarsProvider>
      </body>
    </html>
  );
}
