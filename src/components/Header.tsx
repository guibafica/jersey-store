"use client";
import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaAngleDown } from "react-icons/fa6";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { useRouter, usePathname } from "next/navigation";

import { Input } from "./Input";

interface IHeaderProps {
  handleSearchProduct: (text: string) => void;
}

export const Header: React.FC<IHeaderProps> = ({ handleSearchProduct }) => {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "pt">("pt");

  const popularTeams = [
    "MAPLE LEAFS",
    "OILERS",
    "FLAMES",
    "HURRICANES",
    t("moreTeams"),
  ];

  const handleChangeLanguage = useCallback(
    (language: "en" | "pt") => {
      if (pathname.includes("details")) {
        router.push(`/${language}/details/${pathname.split("/details/")[1]}`);
      } else {
        router.push(`/${language}`);
      }
    },
    [router, pathname]
  );

  const handleClickOnLanguageOption = useCallback(
    (language: "en" | "pt") => {
      handleChangeLanguage(language);
      setSelectedLanguage(language);
    },
    [handleChangeLanguage]
  );

  const loadData = useCallback(() => {
    setSelectedLanguage(pathname.split("/")[1] as "pt" | "en");
  }, [pathname]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="w-full absolute top-0 flex items-start flex-col">
      <div className="w-full h-10 bg-gray-900 justify-between flex-row flex px-20 items-center  max-lg:flex-col max-lg:h-auto max-lg:py-2 max-sm:px-4">
        <div className="flex justify-between items-center gap-4 h-full max-lg:justify-start max-lg:w-full">
          <button
            onClick={() => handleClickOnLanguageOption("pt")}
            className={`flex justify-center items-center ${
              selectedLanguage === "pt"
                ? "border-2 border-blue-800"
                : "border-0"
            }  rounded-sm h-4/5 w-10 hover:bg-gray-500/50`}
          >
            <GiBrazilFlag color="#ffffff" size={28} />
          </button>

          <button
            onClick={() => handleClickOnLanguageOption("en")}
            className={`flex justify-center items-center ${
              selectedLanguage === "en"
                ? "border-2 border-blue-800"
                : "border-0"
            }  rounded-sm h-4/5 w-10 hover:bg-gray-500/50`}
          >
            <GiUsaFlag color="#ffffff" size={22} />
          </button>
        </div>

        <h1 className="text-white max-lg:-mt-2 max-lg:text-center max-sm:mt-2">
          {t("discountMessage")}
        </h1>

        <div className="h-full gap-1 flex max-lg:w-full max-lg:justify-end max-lg:mt-4 max-sm:justify-center">
          <button className="h-full bg-blue-800 px-5 border-0 text-white hover:bg-blue-900">
            {t("signInButton")}
          </button>

          <button className="h-full bg-blue-800 px-5 border-0 text-white hover:bg-blue-900">
            {t("myCartButton")}
          </button>
        </div>
      </div>

      <div className="w-full h-24 bg-slate-950 justify-between flex-row flex px-20 items-center max-sm:flex-col max-sm:h-auto max-sm:py-2 max-sm:px-4">
        <Link href="/">
          <Image
            src="/hockeyStickLogo.png"
            alt="Logo hockey stick"
            width={70}
            height={70}
            className="max-sm:hidden"
          />
        </Link>

        <Input onChange={(text) => handleSearchProduct(text)} />
      </div>

      <div className="w-full h-7 mt-1 bg-slate-950 justify-center flex-row flex items-center gap-1 max-md:hidden">
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
