import { useTranslations } from "next-intl";
// import { useTranslations } from "use-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("test")}</h1>
    </div>
  );
}
