import Link from "next/link";
import { MenuModel, SocialModel } from "../_models/layout.model";
import { FaIcon } from "../_helpers/fontAwesomeHelper";
import { MenuItem,SocialItem } from "./header";

export function MenuModal({menu,social}:{menu:MenuModel[],social:SocialModel[]}){
    return (
        <div className="menu-modal w-screen h-full fixed z-10 top-0 left-0 bg-slate-900 py-12">

            <ul className="py-14">
            {
                menu.map((x:MenuModel,i:number) => {
                    return (
                        <div className="px-8 py-3" key={i}>
                            <MenuItem link={x.link} name={x.name} />
                        </div>
                    )
                })
            }
            </ul>

            <div className="fixed bottom-0 w-full py-6 px-8 flex justify-between">
                {
                    social.map((x:SocialModel,i:number) => {
                        return (
                            <SocialItem social={x} key={x.name} dark={true} />
                        )
                    })
                }
            </div>

        </div>
    )
}