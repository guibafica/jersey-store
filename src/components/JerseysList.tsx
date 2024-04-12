/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface IJerseySectionProps {
  filterOptions: {
    nameFilter?: string;
    priceStartFilter?: number;
    priceEndFilter?: number;
    sizeFilter?: string;
    colorFilter?: string;
  };
}

export const JerseySection: React.FC<IJerseySectionProps> = ({
  filterOptions,
}) => {
  const t = useTranslations("jerseysList");
  const pathname = usePathname();

  const jerseys = [
    {
      id: 1,
      name: "Toronto Maple Leafs",
      price: 98.99,
      sizes: ["S", "M", "L", "XL"],
      colors: [t("blueColor"), t("whiteColor"), t("blackColor")],
      colorsForFilter: ["blue", "white", "black"],
      image: "/jerseyMapleLeafsPNG.png",
    },
    {
      id: 2,
      name: "Oilers",
      price: 129.99,
      sizes: ["S", "M", "L"],
      colors: [t("orangeColor"), t("blueColor")],
      colorsForFilter: ["orange", "blue"],
      image: "/jerseyOilersPNG.png",
    },
    {
      id: 3,
      name: "kraken",
      price: 200.0,
      sizes: ["M", "L"],
      colors: [t("whiteColor"), t("blueColor")],
      colorsForFilter: ["blue", "white"],
      image: "/jerseyKrakenPNG.webp",
    },
    {
      id: 4,
      name: "Penguins",
      price: 68.9,
      sizes: ["S", "M", "L", "XL"],
      colors: [t("blackColor")],
      colorsForFilter: ["black"],
      image: "/jerseyPenguins.png",
    },
    {
      id: 5,
      name: "Devils",
      price: 81.94,
      sizes: ["S", "M", "XL"],
      colors: [t("whiteColor"), t("redColor")],
      colorsForFilter: ["white", "red"],
      image: "/jerseyDevilsPNG.png",
    },
  ];

  const [jerseysData, setJerseysData] = useState(jerseys);

  const applyNameFilter = useCallback(
    (text: string) => {
      if (text === undefined || text.length < 3) {
        setJerseysData(jerseys);

        return;
      }

      const filteredJerseysList = jerseys.filter((jersey) =>
        jersey.name.toLocaleLowerCase().includes(text.toLowerCase())
      );

      setJerseysData(filteredJerseysList);
    },
    [jerseys]
  );

  const applyPriceFilter = useCallback(
    (priceStart: number, priceEnd: number) => {
      const filteredJerseysList = jerseysData.filter(
        (jersey) => jersey.price >= priceStart && jersey.price <= priceEnd
      );

      setJerseysData(filteredJerseysList);
    },
    [jerseysData]
  );

  const applySizeFilter = useCallback(
    (size: string) => {
      if (size === undefined) {
        setJerseysData(jerseys);

        return;
      }

      const filteredJerseysList = jerseysData.filter((jersey) =>
        jersey.sizes.includes(size)
      );

      setJerseysData(filteredJerseysList);
    },
    [jerseysData]
  );

  const applyColorFilter = useCallback(
    (color: string) => {
      if (color === undefined) {
        setJerseysData(jerseys);

        return;
      }

      const filteredJerseysList = jerseysData.filter((jersey) =>
        jersey.colorsForFilter.includes(color)
      );

      setJerseysData(filteredJerseysList);
    },
    [jerseys, jerseysData]
  );

  const loadData = useCallback(() => {
    if (filterOptions.nameFilter) applyNameFilter(filterOptions.nameFilter);
    if (filterOptions.priceStartFilter && filterOptions.priceEndFilter)
      applyPriceFilter(
        filterOptions.priceStartFilter,
        filterOptions.priceEndFilter
      );
    if (filterOptions.sizeFilter) applySizeFilter(filterOptions.sizeFilter);
    if (filterOptions.colorFilter) applyColorFilter(filterOptions.colorFilter);
  }, [filterOptions]);

  useEffect(() => {
    loadData();
  }, [loadData, filterOptions]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-12">
      {jerseysData.map((jersey) => (
        <Link
          key={jersey.id}
          href={`/${pathname.split("/")[1]}/details/${jersey.id}`}
          className="flex items-center justify-between flex-col p-4 rounded-sm h-80 w-56 shadow-right shadow-left shadow-lg bg-white cursor-pointer hover:shadow-xl hover:bg-slate-50"
        >
          <div className="flex items-center justify-center w-full h-1/2">
            <Image
              src={jersey.image}
              alt={jersey.name}
              width={140}
              height={90}
            />
          </div>

          <div className="w-full h-1/2">
            <h3 className="text-center font-semibold">{jersey.name}</h3>

            <div className="w-full flex items-start justify-center flex-col mt-4">
              <p className="text-xs mr-1">{t("availableSizes")}:</p>

              <h1 className="text-sm font-medium">{jersey.sizes.join(", ")}</h1>
            </div>

            <div className="w-full flex items-start justify-center flex-col mt-3">
              <p className="text-xs mr-1">{t("availableColors")}:</p>

              <h1 className="text-sm font-medium">
                {jersey.colors.join(", ")}
              </h1>
            </div>
          </div>

          <div className="w-full mt-3">
            <p className="text-right text-blue-600">$ {jersey.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
