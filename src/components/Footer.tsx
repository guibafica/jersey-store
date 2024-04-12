import React from "react";
import { useTranslations } from "next-intl";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer: React.FC = () => {
  const t = useTranslations("footer");

  const topTeamsOptions = [
    t("topTeamsMapleLeafs"),
    t("topTeamsOilers"),
    t("topTeamsPenguins"),
  ];
  const supportOptions = [
    t("supportHelp"),
    t("supportContact"),
    t("supportFAQ"),
  ];

  return (
    <div className="w-full flex items-start flex-col mt-20">
      <div className="w-full bg-black px-20 pt-6 pb-16 max-sm:px-4">
        <div className="flex-row flex justify-between items-start max-md:flex-col max-md:items-center max-md:gap-8">
          <div className="flex flex-col justify-start items-start w-1/5 max-md:w-full max-md:justify-center max-md:items-center">
            <h1 className="text-white font-semibold text-2xl">
              {t("newsLetter")}
            </h1>

            <h1 className="text-white text-xs mt-3">{t("newsLetterText")}</h1>

            <button className="py-2 px-4 rounded-sm bg-white font-semibold hover:bg-gray-200 mt-8">
              {t("newsLetterButton")}
            </button>
          </div>

          <div className="flex flex-col justify-start items-start w-1/4 max-md:w-full max-md:justify-center max-md:items-center">
            <h1 className="text-white font-semibold text-2xl mb-4">
              {t("topTeamsTitle")}
            </h1>

            {topTeamsOptions.map((team, teamIndex) => (
              <button
                key={`${teamIndex} - ${team}`}
                className="w-full text-left font-light text-white hover:text-gray-300 hover:font-normal max-md:text-center"
              >
                {team}
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-start items-start w-1/4 max-md:w-full max-md:justify-center max-md:items-center">
            <h1 className="text-white font-semibold text-2xl mb-4">
              {t("supportTitle")}
            </h1>

            {supportOptions.map((option, optionIndex) => (
              <button
                key={`${optionIndex} - ${option}`}
                className="w-full text-left font-light text-white hover:text-gray-300 hover:font-normal max-md:text-center"
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-start items-start w-1/4 max-md:w-full max-md:justify-center max-md:items-center">
            <div className="w-full flex flex-row justify-start items-start gap-4">
              <FaInstagram color="#ffff" size={24} className="cursor-pointer" />
              <FaFacebook color="#ffff" size={24} className="cursor-pointer" />
              <FaTwitter color="#ffff" size={24} className="cursor-pointer" />
            </div>

            <h1 className="text-slate-300 mt-4 font-light text-xs">
              Aliquip nisi cupidatat occaecat irure proident et cupidatat veniam
              veniam. Aliqua magna voluptate elit laborum reprehenderit irure
              minim dolore ipsum quis ad. Excepteur exercitation fugiat magna
              proident minim nulla amet irure labore cupidatat dolore sint magna
              dolor.
            </h1>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 mt-14 flex flex-row items-center justify-between pt-4 max-md:w-full max-md:justify-center max-md:flex-col">
          <h1 className="text-white font-light text-xs">
            Copyright 2024 | Powered by Bafica
          </h1>

          <h1 className="text-white font-light text-xs cursor-pointer hover:text-gray-200">
            {t("privacyPolicy")}
          </h1>
        </div>
      </div>
    </div>
  );
};
