import { FunctionComponent } from "react";
import { getUnaspHeader } from "../services/homeService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuModel } from "../models/layoutModels";
import Link from "next/link";


export async function Header () {
    const header = await getUnaspHeader()
    
    // const menus = header.menus
    // const social = header.social
    return (
        <header className="columns-3 absolute top-0 z-10 w-full py-4 px-8">
            <img className="h-8" src={header.logo} alt="Logo Unasp" />
            <div className="w-full flex justify-center">
                {
                    header.menus.map((x:any,i:number) => {
                        return (
                            <ul className="mx-4">
                            <MenuItem menu_link={x.menu_link} menu_name={x.menu_name} />
                        </ul>
                        )

                        
                    })
                }
            </div>
            <div className="flex">
                {
                    header.social.map((x:any,i:number) => {
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

export function MenuItem ({menu_link,menu_name}:MenuModel) {
    return (
        <Link className="py-2 text-xs px-4 block rounded-full border border-slate-50 text-slate-50 hover:border-slate-300 hover:text-slate-300" href={menu_link.toLowerCase()}><li>{menu_name}</li></Link>
    )
}