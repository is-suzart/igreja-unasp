import { FunctionComponent } from "react";
import { getUnaspHeader } from "../services/homeService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuModel, SocialModel } from "../models/layoutModels";
import Link from "next/link";


export async function Header () {
    const header = await getUnaspHeader()
    return (
        <header className="columns-3 absolute top-0 z-10 w-full py-4 px-8">
            <Link href="/">
                <img className="h-8" src={header.logo} alt="Logo Unasp" />
            </Link>
            
            <div className="w-full flex justify-center">
                {
                    header.menus.map((x:MenuModel,i:number) => {
                        return (
                            <ul key={x.name} className="mx-4">
                            <MenuItem link={x.link} name={x.name} />
                        </ul>
                        )

                        
                    })
                }
            </div>
            <div className="flex">
                {
                    header.social.map((x:SocialModel,i:number) => {
                        return (
                            <div className="rounded-full size-6" key={x.name}>
                                <i className={x.icon.class} aria-hidden="true"></i>
                            </div>
                        )
                    })
                }
            </div>
        </header>
    )
}

export function MenuItem ({link,name}:MenuModel) {
    return (
        <Link className="py-2 text-xs px-4 block rounded-full border border-slate-50 text-slate-50 hover:border-slate-300 hover:bg-slate-300 hover:text-slate-700 hover:font-semibold" href={link.toLowerCase()}><li>{name}</li></Link>
    )
}