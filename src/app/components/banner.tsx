import { getPage } from "../services/home";
import { BannerModel, PageModel } from "../models/page.model";
import Button from "./button";
import { ButtonModel } from "../models/layout.model";
import { serifClass } from "../helpers/serifHelper";
import { json } from "stream/consumers";
import { returnColor } from "../helpers/colorHelper";


export async function Banner({bannerData}: {bannerData: BannerModel[]}) {
  //const bannerData = await getPage("index");
  const divStyle = {
    backgroundImage: `url("${bannerData[0].bg}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-full h-screen relative top- bg-gray-900  text-white py-20 px-10 md:pb-0 md:pt-14 md:p-20"
      style={divStyle}>
      <div className=" md:grid md:grid-cols-3 h-full md:items-center">
        <div className=" ">
          <h5
            className={`${serifClass
              } text-3xl text-${returnColor(bannerData[0].subtitle.color_grupo)} font-bold`}>
            {bannerData[0].subtitle.text}
          </h5>
          <h1 className=" font-black text-5xl">
            {bannerData[0].title}
          </h1>
          <p className=" text-xs md:text-sm mt-4 font-normal">
            {bannerData[0].text}
          </p>
          <div className="mt-8">
              {
              bannerData[0].btns ?  bannerData[0].btns.map((item:ButtonModel, index:number) => {
                  return (
                    <div className="mb-4" key={index}>
                      <Button
                        text={item.text}
                        color_grupo={item.color_grupo}
                        link={item.link}
                        outline={item.outline}
                        hasIcon={item.hasIcon}
                        icon={item.icon ? item.icon : undefined}
                        isFullSize={true}
                      />
                    </div>
  
                  )
                }) : ''
              }
            </div>
        </div>

      </div>
    </div>
  );
}
