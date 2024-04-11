import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jersey Store",
  description: "Sua loja amigável de camisas de hockey",
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "pt" | "en";
  };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
