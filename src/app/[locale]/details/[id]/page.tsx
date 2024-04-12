"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { Header } from "@/components/Header";
import { JerseySection } from "@/components/JerseysList";
import { Footer } from "@/components/Footer";

interface IFakeAPIDataProps {
  id: number;
  name: string;
  price: number;
  sizes: string[];
  colors: string[];
  image: string[];
}

const allSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

export default function DetailsId({ params }: { params: { id: number } }) {
  const t = useTranslations("details");
  const tJersey = useTranslations("jerseysList");
  const router = useRouter();

  const [selectedJersey, setSelectedJersey] = useState<IFakeAPIDataProps>();
  const [selectedColor, setSelectedColor] = useState(0);

  const [nameFilterState, setNameFilterState] = useState("");

  const loadData = useCallback(() => {
    const fakeAPIData: IFakeAPIDataProps[] = [
      {
        id: 1,
        name: "Toronto Maple Leafs",
        price: 98.99,
        sizes: ["S", "M", "L", "XL"],
        colors: [
          tJersey("blueColor"),
          tJersey("whiteColor"),
          tJersey("blackColor"),
        ],
        image: [
          "/jerseyMapleLeafsPNG.png",
          "/jerseyMapleLeafsBlackPNG.png",
          "/jerseyMapleLeafsWhitePNG.png",
        ],
      },
      {
        id: 2,
        name: "Oilers",
        price: 129.99,
        sizes: ["S", "M", "L"],
        colors: [tJersey("orangeColor"), tJersey("blueColor")],
        image: ["/jerseyOilersPNG.png", "/jerseyOilersOrange.jpeg"],
      },
      {
        id: 3,
        name: "kraken",
        price: 200.0,
        sizes: ["M", "L"],
        colors: [tJersey("whiteColor"), tJersey("blueColor")],
        image: ["/jerseyKrakenPNG.webp", "/jserseyKrakenBluePNG.webp"],
      },
      {
        id: 4,
        name: "Penguins",
        price: 68.9,
        sizes: ["S", "M", "L", "XL"],
        colors: [tJersey("blackColor")],
        image: ["/jerseyPenguins.png"],
      },
      {
        id: 5,
        name: "Devils",
        price: 81.94,
        sizes: ["S", "M", "XL"],
        colors: [tJersey("whiteColor"), tJersey("redColor")],
        image: ["/jerseyDevilsPNG.png", "/jerseyDevilsWhite.png"],
      },
    ];

    const jerseyById = fakeAPIData.find(
      (data) => data.id === Number(params.id)
    );

    if (!jerseyById) {
      alert(t("notFoundProductMessage"));

      router.push("/");

      return;
    }

    setSelectedJersey(jerseyById);
  }, [params.id, tJersey, router, t]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="flex min-h-screen max-w-full overflow-hidden flex-col items-center justify-between pt-24">
      <Header handleSearchProduct={(text) => setNameFilterState(text)} />

      {selectedJersey && (
        <div className="px-20 max-sm:px-4">
          <div className="w-full flex items-start justify-between flex-row mt-20 pb-10 max-lg:mt-40 max-md:mt-28 max-sm:mt-20 max-sm:flex-col">
            <div className="w-3/5 flex items-center justify-start flex-col max-sm:w-full">
              <Image
                src={selectedJersey?.image[selectedColor]}
                alt="Main jersey pic"
                width={700}
                height={700}
              />

              <div className="flex items-center justify-center flex-row gap-2">
                {selectedJersey?.image.map((jersey, jerseyIndex) => (
                  <div
                    key={`${jerseyIndex} - ${jersey}`}
                    className={`w-24 h-24 border-2 ${
                      jerseyIndex === selectedColor
                        ? "border-blue-700"
                        : "border-gray-300"
                    } rounded-sm p-2 overflow-hidden cursor-pointer`}
                    onClick={() => setSelectedColor(jerseyIndex)}
                  >
                    <Image
                      src={jersey}
                      alt="Jersey pic"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-2/5 max-sm:w-full">
              <div className="mt-8">
                <h1 className="font-semibold text-lg">
                  {selectedJersey?.name.toUpperCase()}
                </h1>

                <div className="w-full flex items-center justify-start flex-row mt-2">
                  <h1 className="font-medium">{t("price")}:</h1>

                  <h1 className="font-semibold text-lg text-blue-700 ml-2">
                    $ {selectedJersey?.price}
                  </h1>
                </div>

                <div className="w-full bg-slate-300 rounded-sm p-4 mt-6">
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-medium">{t("size")}</h1>

                    <div className="mt-2">
                      {allSizes.map((size, sizeIndex) => (
                        <button
                          key={`${sizeIndex} - ${size}`}
                          disabled={!selectedJersey?.sizes.includes(size)}
                          className={`w-8 h-8 rounded-sm border border-gray-400 mr-2 mb-2 ${
                            selectedJersey?.sizes.includes(size)
                              ? "bg-white"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start mt-6">
                    <h1 className="font-medium">{t("quantity")}</h1>

                    <div className="mt-2">
                      <input
                        type="number"
                        min={1}
                        defaultValue={1}
                        placeholder={t("quantity")}
                        className="p-2 w-20 border-2 border-gray-300 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-12 w-full px-4">
                    <button className="w-full p-4 bg-blue-800 rounded-sm text-white font-semibold hover:bg-blue-900">
                      {t("addToCart")}
                    </button>
                  </div>
                </div>

                <h1 className="font-bold text-sm mt-6">
                  {t("descriptionTitle")}
                </h1>

                <h1 className="font-normal text-sm mt-2 text-gray-800">
                  Consectetur consequat ea Lorem dolor adipisicing cillum
                  excepteur tempor officia ea sit. Culpa Lorem ipsum commodo
                  consequat. Tempor irure et aliquip esse dolore ut consequat.
                  Eu incididunt reprehenderit nulla voluptate nostrud aute
                  cillum elit officia qui velit esse id proident. Adipisicing
                  aliquip sit culpa commodo reprehenderit nostrud ullamco.
                  Pariatur labore ad qui quis. Est reprehenderit exercitation
                  dolor in.
                </h1>

                <h1 className="font-normal text-sm mt-1 text-gray-800">
                  Mollit adipisicing aliqua et irure magna sit ullamco
                  adipisicing et minim in. Amet velit labore nisi consectetur
                  nostrud culpa exercitation ad tempor deserunt pariatur anim
                  veniam ipsum. Quis id anim velit dolore.
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center relative mb-4 mt-10">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-px bg-slate-900"></div>

            <h1 className="text-2xl text-slate-900 font-normal relative z-10 px-4 bg-white">
              {t("similarItemsTitle")}
            </h1>

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-px bg-slate-900"></div>
          </div>

          <div className="w-full flex items-center justify-center">
            <JerseySection nameFilter={nameFilterState} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
