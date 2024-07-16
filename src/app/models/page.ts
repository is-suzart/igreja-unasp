import { ButtonModel } from "./layout";

export interface PageModel {
    id: number;
    title: string;
    banner: BannerModel[];
    sections: SectionModel[];
    encontros: EncounterModel[];
    seo?: any;
}
export interface SectionModel {
    image: string,
    title: string,
    subTitle: string,
    text: string,
    align: string,
    buttons: ButtonModel[],
    categoriasMembros: any,
    type: 'Seção' | 'Anuncio' | 'Membros'
}
export interface BannerModel{
    subtitle: {
        text: string;
        color: string;
    }
    title: string;
    text: string;
    bg: string;
    btns: ButtonModel[];
}
export interface SectionModel {
    id: number;
    title: string;
    image: string;
    link: string;
}
export interface EncounterModel {
    subtitle: {
        text: string;
        color: string;
    };
    title: string;
    text: string;
}

export interface LinksModel{
    id: number;
    title: string;
    background: string;
    btns: ButtonModel[];
}