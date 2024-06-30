import { SectionModel } from "../models/page";

export function Anuncio({anuncio,key}:{anuncio:SectionModel,key:number}){
    const bannerStyle = {
        backgroundImage: `url(${anuncio.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div style={bannerStyle} className="w-full py-11" key={key}>
            <p>Anuncio {key}</p>
            <code>{JSON.stringify(anuncio)}</code>
            <div className="text-white">
                <h5>{anuncio.subTitle}</h5>
                <h1>{anuncio.title}</h1>
            </div>
        </div>
    )
}