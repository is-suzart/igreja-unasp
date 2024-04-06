import { FunctionComponent } from "react";
import { getUnaspHeader } from "../services/homeService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Header: FunctionComponent<any> = async () => {
    const header = await getUnaspHeader()
    const menus = header.front.header_unasp.menus
    const social = header.front.header_unasp.social_media
    return (
        <header className="flex bg-perigo-light justify-between items-center w-full h-16 px-8">
            <img className="h-8" src={header.front.header_unasp.logo_unasp} alt="Logo Unasp" />
            <div className="flex">
                {
                    menus.map((x:any,i:number) => {
                        return (
                            <ul className="mx-4">
                            <a className="py-2 text-xs px-4 block rounded-full border-2 border-black" href={x.menu_link}><li>{x.menu_name}</li></a>
                        </ul>
                        )

                        
                    })
                }
            </div>
            <div className="flex">
                {
                    social.map((x:any,i:number) => {
                        return (
                            <div className="rounded-full size-6">
                                <i className={x.social_icon.class} aria-hidden="true"></i>
                            </div>
                        )
                    })
                }
            </div>
        </header>
    )
}