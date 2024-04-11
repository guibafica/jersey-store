import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaAngleDown } from "react-icons/fa6";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";

import { Input } from "./Input";

export const Header: React.FC = () => {
  const t = useTranslations("header");

  const popularTeams = [
    "MAPLE LEAFS",
    "OILERS",
    "FLAMES",
    "HURRICANES",
    t("moreTeams"),
  ];

  return (
    <div className="w-full absolute top-0 flex items-start flex-col">
      <div className="w-full h-10 bg-gray-900 justify-between flex-row flex px-20 items-center">
        <div className="flex justify-between items-center gap-4 h-full">
          <button className="flex justify-center items-center border-2 border-blue-800 rounded-sm h-4/5 w-10 hover:bg-gray-500/50">
            <GiBrazilFlag color="#ffffff" size={28} />
          </button>

          <button className="flex justify-center items-center border-0 border-blue-800 rounded-sm h-4/5 w-10 hover:bg-gray-500/50">
            <GiUsaFlag color="#ffffff" size={22} />
          </button>
        </div>

        <h1 className="text-white">{t("discountMessage")}</h1>

        <div className="h-full gap-1 flex">
          <button className="h-full bg-blue-800 px-5 border-0 text-white hover:bg-blue-900">
            {t("signInButton")}
          </button>

          <button className="h-full bg-blue-800 px-5 border-0 text-white hover:bg-blue-900">
            {t("myCartButton")}
          </button>
        </div>
      </div>

      <div className="w-full h-24 bg-slate-950 justify-between flex-row flex px-20 items-center">
        <Image
          src="/hockeyStickLogo.png"
          alt="Logo hockey stick"
          width={70}
          height={70}
        />

        <Input />
      </div>

      <div className="w-full h-7 mt-1 bg-slate-950 justify-center flex-row flex items-center gap-1">
        {popularTeams.map((team, teamIndex) => (
          <button
            key={`${teamIndex} - ${team}`}
            className="h-full border-b-2 border-white px-5 text-white hover:bg-gray-900 flex items-center justify-between flex-row gap-2"
          >
            {team}
            <FaAngleDown />
          </button>
        ))}
      </div>
    </div>
  );
};
