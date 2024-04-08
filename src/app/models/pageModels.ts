import { ButtonModel } from "./layoutModels";

export interface PageModel {
    id: number;
    title: string;
    banner: BannerModel[];
    sections: any;
    encontros: any;
    seo?: any;
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

