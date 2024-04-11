import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const JerseySection: React.FC = () => {
  const t = useTranslations("jerseysList");

  const jerseys = [
    {
      id: 1,
      name: "Toronto Maple Leafs",
      price: 98.99,
      sizes: ["S", "M", "L", "XL"],
      colors: [t("blueColor"), t("whiteColor"), t("blackColor")],
      image: "/mapleLeafsJersey1.jpeg",
    },
    {
      id: 2,
      name: "Oilers",
      price: 129.99,
      sizes: ["S", "M", "L"],
      colors: [t("orangeColor"), t("blueColor")],
      image: "/oilersJersey1.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {jerseys.map((jersey) => (
        <div key={jersey.id}>
          <Image src={jersey.image} alt={jersey.name} width={90} height={90} />
          <h3>{jersey.name}</h3>
          <p>$ {jersey.price}</p>
          <p>
            {t("availableSizes")}: {jersey.sizes.join(", ")}
          </p>
          <p>
            {t("availableColors")}: {jersey.colors.join(", ")}
          </p>

          {/* detail page link */}
        </div>
      ))}
    </div>
  );
};
