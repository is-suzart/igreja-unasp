import { getPage } from "../services/homeService";
import { BannerModel, PageModel } from "../models/pageModels";
import { Crimson_Pro } from "next/font/google";
import Button from "./button";
import { ButtonModel } from "../models/layoutModels";

const serif = Crimson_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export async function Banner({bannerData}: {bannerData: BannerModel[]}) {
  //const bannerData = await getPage("index");

  const divStyle = {
    backgroundImage: `url("${bannerData[0].bg}")`,
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
              } text-3xl text-${bannerData[0].subtitle.color.toLocaleLowerCase()} font-bold`}>
            {bannerData[0].subtitle.text}
          </h5>
          <h1 className=" font-black text-5xl">
            {bannerData[0].title}
          </h1>
          <p className=" text-sm mt-4 font-normal">
            {bannerData[0].text}
          </p>
            <div className="mt-8">
              {
                bannerData[0].btns.map((item:ButtonModel, index:number) => {
                  return (
                    <div className="mb-4" key={index}>
                      <Button
                        text={item.text}
                        color={item.color}
                        link={item.link}
                        outline={item.hasIcon}
                        hasIcon={item.hasIcon}
                        icon={item.icon ? item.icon : undefined}
                        isFullSize={true}
                      />
                    </div>
  
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  );
}
