import { ButtonModel } from "../_models/layout.model";
import { SectionModel } from "../_models/page.model";
import { cleanIt } from "../_helpers/serifHelper";
import Button from "./button";

export function Anuncio({anuncio,keyIndex}:{anuncio:SectionModel,keyIndex:number}){
    const bannerStyle = {
        backgroundImage: `url(${anuncio.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div style={bannerStyle} className="w-full px-8 lg:px-10 grid grid-cols-12 items-center xl:py-16 2xl:py-24 h-[80vh] md:h-[65vh] xl:h-[50vh]" key={keyIndex} >
            <div className="col-span-12 lg:col-span-6">
                <div className="text-white">
                    <h5 className="text-sm font-bold">{anuncio.subTitle}</h5>
                    <h1 className="text-4xl font-black" dangerouslySetInnerHTML={{__html:cleanIt(anuncio.title)}}></h1>
                    <p className="mt-1 font-sans">{anuncio.text}</p>
                </div>
                <div className="mt-4 lg:w-2/3">
                    {
                                
                                anuncio.buttons && anuncio.buttons.length > 0 ? anuncio.buttons.map((btn:ButtonModel,index:number) => {
                                    return (
                                        <div className="my-3" key={index}>
                                        <Button
                                                text={btn.text}
                                                link={btn.link}
                                                color_grupo={btn.color_grupo}
                                                icon={btn.icon} 
                                                outline={btn.outline} 
                                                hasIcon={btn.icon != null}
                                                isFullSize={true}/>
                                        </div>
        
                                    )
                                }) : ''}
                </div>
            </div>

        </div>
    )
}