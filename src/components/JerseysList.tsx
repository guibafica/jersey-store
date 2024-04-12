"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const JerseySection: React.FC = () => {
  const t = useTranslations("jerseysList");
  const pathname = usePathname();

  const jerseys = [
    {
      id: 1,
      name: "Toronto Maple Leafs",
      price: 98.99,
      sizes: ["S", "M", "L", "XL"],
      colors: [t("blueColor"), t("whiteColor"), t("blackColor")],
      image: "/jerseyMapleLeafsPNG.png",
    },
    {
      id: 2,
      name: "Oilers",
      price: 129.99,
      sizes: ["S", "M", "L"],
      colors: [t("orangeColor"), t("blueColor")],
      image: "/jerseyOilersPNG.png",
    },
    {
      id: 3,
      name: "kraken",
      price: 200.0,
      sizes: ["M", "L"],
      colors: [t("whiteColor"), t("blueColor")],
      image: "/jerseyKrakenPNG.webp",
    },
    {
      id: 4,
      name: "Penguins",
      price: 68.9,
      sizes: ["S", "M", "L", "XL"],
      colors: [t("blackColor")],
      image: "/jerseyPenguins.png",
    },
    {
      id: 5,
      name: "Devils",
      price: 81.94,
      sizes: ["S", "M", "XL"],
      colors: [t("whiteColor"), t("redColor")],
      image: "/jerseyDevilsPNG.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-12">
      {jerseys.map((jersey) => (
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
