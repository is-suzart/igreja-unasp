import { getPage } from "../services/homeService";
import { BannerModel, PageModel } from "../models/pageModels";
import Button from "./button";
import { ButtonModel } from "../models/layoutModels";
import { serifClass } from "../helpers/serifHelper";


export async function Banner({bannerData}: {bannerData: BannerModel[]}) {
  //const bannerData = await getPage("index");

  const divStyle = {
    backgroundImage: `url("${bannerData[0].bg}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-full h-screen absolute top- bg-gray-900  text-white py-20 px-10 md:pb-0 md:pt-14 md:p-20"
      style={divStyle}>
      <div className=" md:grid md:grid-cols-3 h-full md:items-center">
        <div className=" ">
          <h5
            className={`${serifClass
              } text-3xl text-${bannerData[0].subtitle.color.toLocaleLowerCase()} font-bold`}>
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
