import React from "react";
import { useTranslations } from "next-intl";

import { JerseySection } from "./JerseysList";

interface ITopSellersProps {
  nameFilter: string;
}

export const TopSellers: React.FC<ITopSellersProps> = ({ nameFilter }) => {
  const t = useTranslations("topSellers");

  return (
    <div className="w-screen mt-8 px-20 max-sm:px-4">
      <div className="w-full flex items-center justify-center relative mb-4">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-px bg-slate-900"></div>

        <h1 className="text-2xl text-slate-900 font-normal relative z-10 px-4 bg-white">
          {t("title")}
        </h1>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-px bg-slate-900"></div>
      </div>

      <div className="w-full flex items-center justify-center">
        <JerseySection nameFilter={nameFilter} />
      </div>
    </div>
  );
};
