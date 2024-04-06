export interface HomePageModel {
    id: number;
    title: string;
    front: {
        site_banner: any[],
        sections: any[],
        encontros: any[],
    }
    seo?: any;
}