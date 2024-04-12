import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface IInputProps {
  onChange: (text: string) => void;
}

export const Input: React.FC<IInputProps> = ({ onChange }) => {
  const t = useTranslations("header");

  return (
    <div className="bg-white flex items-center flex-row content-between max-sm:w-full">
      <input
        type="text"
        placeholder={t("inputPlaceholder")}
        className="p-2 rounded-sm bg-transparent w-4/5 border-0"
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="w-1/5 flex justify-center items-center">
        <FaSearch color="#9ca3af" size={20} />
      </div>
    </div>
  );
};
