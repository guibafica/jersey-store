import React from "react";
import { useTranslations } from "next-intl";

export const ProductFilter: React.FC = () => {
  const t = useTranslations("productFilter");

  return (
    <div>
      <input type="text" placeholder={t("nameFilterPlaceholder")} />

      {/* more filters */}
    </div>
  );
};
