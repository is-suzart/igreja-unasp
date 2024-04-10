import { getPage } from "../services/homeService";
import { PageModel } from "../models/pageModels";
import { Crimson_Pro } from "next/font/google";
import Button from "./button";

const serif = Crimson_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export async function Banner() {
  const bannerData = await getPage("index");

  const divStyle = {
    backgroundImage: `url("${bannerData?.banner[0]?.bg}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-full h-screen absolute top- bg-gray-900 pt-14 text-white p-20"
      style={divStyle}>
      <div className="grid grid-cols-3 h-full items-center">
        <div className=" ">
          <h5
            className={`${serif.className
              } text-3xl text-${bannerData?.banner[0].subtitle.color.toLocaleLowerCase()} font-bold`}>
            {bannerData?.banner[0].subtitle.text}
          </h5>
          <h1 className=" font-black text-5xl">
            {bannerData?.banner[0].title}
          </h1>
          <p className=" text-sm mt-4 mb-4 font-normal">
            {bannerData?.banner[0].text}
          </p>
          <Button
            text="Explore"
            link="/"
            outline={true}
            type="claro"
            hasIcon={false}
            isFullSize={true}
          />
        </div>
      </div>
    </div>
  );
}
