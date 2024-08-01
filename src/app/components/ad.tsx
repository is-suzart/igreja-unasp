import { ButtonModel } from "../models/layout.model";
import { SectionModel } from "../models/page.model";
import Button from "./button";

export function Anuncio({anuncio,keyIndex}:{anuncio:SectionModel,keyIndex:number}){
    const bannerStyle = {
        backgroundImage: `url(${anuncio.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div style={bannerStyle} className="w-full px-8 lg:px-10 grid grid-cols-12 xl:py-16 2xl:py-24" key={keyIndex} >
            <div className="col-span-12 lg:col-span-6">
                <div className="text-white">
                    <h5 className="text-sm font-bold">{anuncio.subTitle}</h5>
                    <h1 className="text-4xl font-black" dangerouslySetInnerHTML={{__html:anuncio.title}}></h1>
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