"use client"
import { HeaderModel, MenuModel, SocialModel } from "../models/layout";
import Link from "next/link";
import { FaIcon } from "../helpers/fontAwesomeHelper";
import { useEffect } from "react";

export function Header({data}: {data: HeaderModel}) {
    useEffect(() => {
        function handleScroll() {
            const header = document.getElementById('main-header')
            if (header && window.scrollY > 80) {
                header.classList.add('has-scroll')
            } else {
                header?.classList.remove('has-scroll')
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return (
        <header id="main-header" className="md:grid md:grid-cols-12 absolute top-0 z-10 w-full py-4 px-8">
            <div className="flex w-full items-center md:block md:col-span-3">
                <div className="block md:hidden mr-8 text-slate-50 size-4">
                    <FaIcon faClass="fa-solid fa-bars" size="sm" />
                </div>
                
                <Link href="/">
                    <img className="h5 md:h-8" src={data.logo} alt="Logo Unasp" />
                </Link>
            </div>


            <div className="hidden md:flex col-span-6 w-full justify-center">
                {data.menus.map((x: MenuModel, i: number) => {
                    return (
                        <ul key={x.name} className="mx-4">
                            <MenuItem link={x.link} name={x.name} />
                        </ul>
                    );
                })}
            </div>
            <div className="hidden col-span-3 md:flex justify-end">
                {data.social.map((x: SocialModel, i: number) => {
                    return (
                        <div key={x.name}>
                            {x.link != "" ? (
                                <Link href={x.link} target="blank">
                                    <div
                                        className="rounded-full flex justify-center items-center mx-2 border-slate-50 border p-2 hover:bg-slate-300 hover:border-slate-300  text-slate-50 hover:text-slate-900"
                                        key={x.name}
                                    >
                                        <div className="size-3 flex justify-center items-center">
                                            <FaIcon faClass={x.icon.class} size="xs"  />
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    className="rounded-full flex justify-center items-center mx-2 border-slate-50 border p-2 hover:bg-slate-300 hover:border-slate-300  text-slate-50 hover:text-slate-900"
                                    key={x.name}
                                >
                                    <div className="text-sm">
                                        <FaIcon size="xs" faClass={x.icon.class}  />
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
