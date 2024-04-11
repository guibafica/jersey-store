import React from "react";
import { useTranslations } from "next-intl";

import { JerseySection } from "../../components/JerseysList";
import { ProductFilter } from "../../components/ProductFilter";
import { Header } from "../../components/Header";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <h1>Lista de Camisetas</h1>

      <ProductFilter />
      <JerseySection />
    </div>
  );
}
