"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { TopSellers } from "@/components/TopSellers";
import { Footer } from "@/components/Footer";

export default function Home() {
  const t = useTranslations();

  const [nameFilterState, setNameFilterState] = useState("");

  return (
    <div className="flex min-h-screen max-w-full overflow-hidden flex-col items-center justify-between pt-24">
      <Header handleSearchProduct={(text) => setNameFilterState(text)} />
      <Banner />

      <TopSellers nameFilter={nameFilterState} />

      <Footer />
    </div>
  );
}
