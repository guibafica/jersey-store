import React from "react";
import { useTranslations } from "next-intl";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { TopSellers } from "../../components/TopSellers";
import { Footer } from "../../components/Footer";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen max-w-full overflow-hidden flex-col items-center justify-between pt-24">
      <Header />
      {/* <Banner />

      <TopSellers />

      <Footer /> */}
    </div>
  );
}
