import { ButtonModel } from "../models/layout";
import { SectionModel } from "../models/page";
import Button from "./button";

export function Anuncio({anuncio,key}:{anuncio:SectionModel,key:number}){
    const bannerStyle = {
        backgroundImage: `url(${anuncio.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div style={bannerStyle} className="w-full px-8 lg:px-10 grid grid-cols-12 py-16" key={key}>
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
                                                key={index}
                                                text={btn.text}
                                                link={btn.link}
                                                color={btn.color}
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