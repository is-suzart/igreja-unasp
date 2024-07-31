"use client"
import { HeaderModel, MenuModel, SocialModel } from "../models/layout.model";
import Link from "next/link";
import { FaIcon } from "../helpers/fontAwesomeHelper";
import { MouseEventHandler, useEffect, useState } from "react";
import { MenuModal } from "./menuModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Header({data}: {data: HeaderModel}) {
    const [menuCloseIcon, setMenuCloseIcon] = useState<any>(['fa-solid', 'fa-bars']); // Agora menuCloseIcon é parte do estado
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

    const toggleMenuModel: MouseEventHandler<HTMLDivElement> = () => {
        const menuModal = document.querySelector('.menu-modal')
        
        if(menuModal){
            menuModal.classList.toggle('active')
            debugger
            if(menuModal.classList.contains('active')){
                setMenuCloseIcon(['fa-solid', 'fa-xmark'])
            } else {
                setMenuCloseIcon(['fa-solid', 'fa-bars']);
            }
        }
    }

    return (
        <main>
        <header id="main-header" className="md:grid md:grid-cols-12 absolute top-0 z-20 w-full py-4 px-8">
            <div className="flex w-full items-center md:block md:col-span-3">
                <div className="flex md:hidden items-center mr-8 text-slate-50 size-4" onClick={toggleMenuModel}>
                    <FontAwesomeIcon className="cursor-pointer transition-all duration-500 active:animate-spin" icon={menuCloseIcon} size="sm" />
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
                        <SocialItem social={x} key={x.name} />
                    );
                })}
            </div>
        </header>
        <div className="toggle lg:hidden">
                <MenuModal menu={data.menus} social={data.social} />
            </div>
        </main>

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

export function SocialItem ({social}: {social: SocialModel}){
    return (
        <div key={social.name}>
        {social.link != "" ? (
            <Link href={social.link} target="blank">
                <div
                    className="rounded-full flex justify-center items-center mx-2 border-slate-50 border p-2 hover:bg-slate-300 hover:border-slate-300  text-slate-50 hover:text-slate-900"
                    key={social.name}
                >
                    <div className="size-3 flex justify-center items-center">
                        <FaIcon faClass={social.icon.class} size="xs" id={social.icon.id}  />
                    </div>
                </div>
            </Link>
        ) : (
            <div
                className="rounded-full flex justify-center items-center mx-2 border-slate-50 border p-2 hover:bg-slate-300 hover:border-slate-300  text-slate-50 hover:text-slate-900"
                key={social.name}
            >
                <div className="text-sm">
                    <FaIcon size="xs" faClass={social.icon.class} id={social.icon.id}  />
                </div>
            </div>
        )}
    </div>
    )
}
