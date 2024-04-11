import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Banner: React.FC = () => {
  const t = useTranslations("banner");

  return (
    <div className="w-screen mt-8">
      <div className="w-full px-20 pt-16">
        <div className="border-b border-slate-900 pb-2">
          <h1 className="text-2xl text-slate-900 font-medium">{t("season")}</h1>
        </div>
      </div>

      <div className="w-full px-20 mt-4 flex items-center justify-center flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Maple leafs banner"
          src="/banner1.jpg"
          className="w-full h-80 object-cover"
        />
      </div>
    </div>
  );
};
