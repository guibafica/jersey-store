import React, { useState, useCallback } from "react";
import { useTranslations } from "next-intl";

import { JerseySection } from "./JerseysList";

interface ITopSellersProps {
  filters: {
    nameFilter?: string;
  };
}

const allSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

export const TopSellers: React.FC<ITopSellersProps> = ({ filters }) => {
  const t = useTranslations("topSellers");

  const [startPriceFilterState, setStartPriceFilterState] = useState<number>();
  const [endPriceFilterState, setEndPriceFilterState] = useState<number>();
  const [sizeFilterState, setSizeFilterState] = useState<string>();
  const [colorFilterState, setColorFilterState] = useState<string>();

  const allColors = [
    { value: "black", label: t("BlackOption") },
    { value: "blue", label: t("BlueOption") },
    { value: "green", label: t("GreenOption") },
    { value: "orange", label: t("OrangeOption") },
    { value: "red", label: t("RedOption") },
    { value: "white", label: t("WhiteOption") },
  ];

  return (
    <div className="w-screen mt-8 px-20 max-sm:px-4">
      <div className="w-full flex items-center justify-center relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-px bg-slate-900"></div>

        <h1 className="text-2xl text-slate-900 font-normal relative z-10 px-4 bg-white">
          {t("title")}
        </h1>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-px bg-slate-900"></div>
      </div>

      <div className="w-full flex flex-row justify-end mb-4 max-md:flex-col max-md:items-end max-md:gap-4">
        <h1 className="font-medium">{t("filtersTitle")}</h1>

        <div className="ml-4 max-md:flex max-md:items-end max-md:w-full max-md:flex-col">
          <h1>{t("priceFilterTitle")}</h1>

          <div>
            <input
              type="number"
              placeholder="$ 00.00"
              min={0}
              onChange={(e) => setStartPriceFilterState(Number(e.target.value))}
              className="px-2 py-1 h-9 w-28 border-2 border-gray-300 rounded-sm"
            />

            <input
              type="number"
              placeholder="$ 00.00"
              min={0}
              onChange={(e) => setEndPriceFilterState(Number(e.target.value))}
              className="px-2 py-1 h-9 w-28 border-2 border-gray-300 rounded-sm ml-1"
            />
          </div>
        </div>

        <div className="ml-4 max-md:flex max-md:items-end max-md:w-full max-md:flex-col">
          <h1>{t("sizeFilterTitle")}</h1>

          <div>
            <select
              name="sizeOption"
              id="sizeOption"
              onChange={(e) => setSizeFilterState(e.target.value || undefined)}
              className="px-2 py-1 h-9 w-28 border-2 border-gray-300 rounded-sm bg-white"
            >
              <option value={undefined} label={t("sizeLabelOption")} />

              {allSizes.map((size, sizeIndex) => (
                <option
                  key={`${sizeIndex} - ${size}`}
                  value={size}
                  label={size}
                />
              ))}
            </select>
          </div>
        </div>

        <div className="ml-4 max-md:flex max-md:items-end max-md:w-full max-md:flex-col">
          <h1>{t("colorFilterTitle")}</h1>

          <div>
            <select
              name="colorOption"
              id="colorOption"
              onChange={(e) => setColorFilterState(e.target.value || undefined)}
              className="px-2 py-1 h-9 w-28 border-2 border-gray-300 rounded-sm bg-white"
            >
              <option value={undefined} label={t("sizeLabelOption")} />

              {allColors.map((color, colorsIndex) => (
                <option
                  key={`${colorsIndex} - ${color}`}
                  value={color.value}
                  label={color.label}
                />
              ))}
            </select>
          </div>
        </div>

        <div className="ml-8">
          <button
            className="text-red-600 p-2 hover:text-red-700"
            onClick={() => window.location.reload()}
          >
            {t("cleanFilter")}
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <JerseySection
          filterOptions={{
            nameFilter: filters?.nameFilter || undefined,
            colorFilter: colorFilterState,
            priceStartFilter: startPriceFilterState,
            priceEndFilter: endPriceFilterState,
            sizeFilter: sizeFilterState,
          }}
        />
      </div>
    </div>
  );
};
