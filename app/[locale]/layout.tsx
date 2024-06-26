import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dai Phan - Porfolio",
  description: "I'm a Frontend developer with 2 experiences",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        >
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ff000d]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
