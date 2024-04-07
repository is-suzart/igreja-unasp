export interface HomePageModel {
    id: number;
    title: string;
    banner: BannerModel[];
    sections: SectionModel[];
    encontros: EncounterModel[];
    seo?: any;
}

export interface BannerModel {
    id: number;
    title: string;
    image: string;
    link: string;
    header: HeaderContentModel;
}
export interface SectionModel {
    id: number;
    title: string;
    image: string;
    link: string;
}
export interface EncounterModel {
    id: number;
    title: string;
    image: string;
    link: string;
}
export interface HeaderContentModel{
    header_subtitle: {
        subtitle_text: string;
        subtitle_color: string;
    }
    header_title: string;
    header_text: string;
    header_bg: string;
    header_btns: ButtonModel[];
}
export interface ButtonModel{
    btn_text: string,
    btn_link: string,
    outline: boolean,
    btn_color: string,
    btn_has_icon: boolean,
    btn_icon: any 
}