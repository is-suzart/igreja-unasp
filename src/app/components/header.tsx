import { FunctionComponent } from "react";
import { getUnaspHeader } from "../services/homeService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuModel, SocialModel } from "../models/layoutModels";
import Link from "next/link";
import { FaIcon } from "../helpers/fontAwesomeHelper";

export async function Header() {
    const header = await getUnaspHeader();
    return (
        <header className="grid grid-cols-12 absolute top-0 z-10 w-full py-4 px-8">
            <div className="col-span-3">
                <Link href="/">
                    <img className=" h-8" src={header.logo} alt="Logo Unasp" />
                </Link>
            </div>


            <div className="col-span-6 w-full flex justify-center">
                {header.menus.map((x: MenuModel, i: number) => {
                    return (
                        <ul key={x.name} className="mx-4">
                            <MenuItem link={x.link} name={x.name} />
                        </ul>
                    );
                })}
            </div>
            <div className="col-span-3 flex justify-end">
                {header.social.map((x: SocialModel, i: number) => {
                    return (
                        <div key={x.name}>
                            {x.link != "" ? (
                                <Link href={x.link} target="blank">
                                    <div
                                        className="rounded-full flex justify-center items-center mx-2 border-slate-50 border p-2 hover:bg-slate-300 hover:border-slate-300  text-slate-50 hover:text-slate-900"
                                        key={x.name}
                                    >
                                        <div className="size-3">
                                            <FaIcon faClass={x.icon.class}  />
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    className="rounded-full flex justify-center items-center mx-2 border-slate-50 border p-2 hover:bg-slate-300 hover:border-slate-300  text-slate-50 hover:text-slate-900"
                                    key={x.name}
                                >
                                    <div className="size-3">
                                        <FaIcon faClass={x.icon.class}  />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </header>
    );
}

export function MenuItem({ link, name }: MenuModel) {
    return (
        <Link
            className="py-2 text-xs px-4 block rounded-full border border-slate-50 text-slate-50 hover:border-slate-300 hover:bg-slate-300 hover:text-slate-700 hover:font-semibold"
            href={link.toLowerCase()}
        >
            <li>{name}</li>
        </Link>
    );
}
