import { ButtonModel, ColorGroup, SocialModel } from "./layout.model";

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
        color_grupo: ColorGroup;
    }
    title: string;
    text: string;
    bg: string;
    btns: ButtonModel[];
}
export interface EncounterModel {
    subtitle: {
        text: string;
        color_grupo: ColorGroup;
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
export interface MemberModel{
    id: string;
    slug: string;
    name: string;
    text: string;
    photo: string | undefined;
    cargo: any;
    social: SocialModel[] | null;
    html?: string;
}