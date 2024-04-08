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
    link: string,
    outline: boolean,
    color: string,
    hasIcon: boolean,
    icon: FaIconModel 
}