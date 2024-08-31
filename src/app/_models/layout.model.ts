export interface HeaderModel {
    id: string;
    title: string;
    logo: string;
    menus: MenuModel[],
    social: SocialModel[]
}
export interface MenuModel {
    name: string;
    link: string;
    dark?: boolean
}
export interface SocialModel{
    icon: FaIconModel;
    link: string;
    name: string;
}
export interface FaIconModel {
    element: string;
    class: string;
    id: string;
    prefix: string;
    style: string;
    hex: string;
    unicode: string;
}

export interface ButtonModel{
    text: string,
    link: LinkModel,
    outline: boolean,
    hasIcon: boolean,
    icon?: FaIconModel,
    isFullSize?: boolean,
    color_grupo: ColorGroup
}
export interface ColorGroup{
    shade: string;
    colors: string;
}
export interface LinkModel {
    kind: 'Interno' | 'Externo',
    url_inter: string,
    url_ext: string,
    forma: 'Direto' | 'Externo'
}