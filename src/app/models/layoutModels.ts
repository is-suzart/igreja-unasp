export interface HeaderModel {
    id: string;
    title: string;
    logo: string;
    menus: MenuModel[],
    social: SocialModel[]
}
export interface MenuModel {
    menu_name: string;
    menu_link: string;
}
interface SocialModel{
    social_icon: FaIconModel;
    social_link: string;
    social_name: string;
}
interface FaIconModel {
    element: string;
    class: string;
    id: string;
    prefix: string;
    style: string;
    hex: string;
    unicode: string;
}