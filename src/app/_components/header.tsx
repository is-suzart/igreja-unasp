"use client"
import { HeaderModel, MenuModel, SocialModel } from "../_models/layout.model";
import Link from "next/link";
import { FaIcon } from "../_helpers/fontAwesomeHelper";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { MenuModal } from "./menuModal";
import classnames  from  'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from "next/navigation";

export function Header({data}: {data: HeaderModel}) {
    const [menuCloseIcon, setMenuCloseIcon] = useState<any>(['fa-solid', 'fa-bars']); // Agora menuCloseIcon é parte do estado
    const [dark, setDark] = useState<boolean>(false);
    const [isClient, setIsClient] = useState(false);
    const darkRef = useRef(dark); 
    const path = usePathname()

    useEffect(() => {
        setIsClient(true); // Marca que estamos no cliente
      }, []);

    useEffect(() => {
        function handleDarkScroll() {
            const header = document.getElementById('main-header');
            if (header && window.scrollY > 80) {
              header.classList.add('has-scroll-dark')
            } else {
              header?.classList.remove('has-scroll-dark')
            }
          }
          function handleLightScroll() {
              const header = document.getElementById('main-header');
              if (header && window.scrollY > 80) {
                header.classList.add('has-scroll-light')
              } else {
                header?.classList.remove('has-scroll-light')
              }
            }
        if(isClient){
            window.removeEventListener('scroll', handleDarkScroll);
            window.removeEventListener('scroll', handleLightScroll);
            const header = document.getElementById('main-header');
            if(header?.classList.contains('has-scroll-dark')){
                header?.classList.remove('has-scroll-dark')
            } else if(header?.classList.contains('has-scroll-light')){
                header?.classList.remove('has-scroll-light')
            }
            // Atualiza o estado com base na rota
            const isDarkMode = path.includes('/membro');
            setDark(isDarkMode);
            darkRef.current = isDarkMode;
            if(isDarkMode){
                window.addEventListener('scroll', handleDarkScroll);
            } else {
                window.addEventListener('scroll', handleLightScroll); 
            }
        } else {
            return
        }

    
        // Adiciona o listener de scroll
        
    
        // Limpa o listener de scroll ao desmontar
        return () => {
          window.removeEventListener('scroll', handleDarkScroll);
          window.removeEventListener('scroll', handleLightScroll);
        };
      }, [isClient,path]); 

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
                    <img className={dark ? "h5 md:h-8 invert" : "h-6 md:h-8"} src={data.logo} alt="Logo Unasp" />
                </Link>
            </div>

            <div className="hidden md:flex col-span-6 w-full justify-center">
                {data.menus.map((x: MenuModel, i: number) => {
                    return (
                        <ul key={x.name} className="mx-4">
                            <MenuItem link={x.link} name={x.name} dark={dark} />
                        </ul>
                    );
                })}
            </div>
            <div className="hidden col-span-3 md:flex justify-end">
                {data.social.map((x: SocialModel, i: number) => {
                    return (
                        <SocialItem social={x} key={x.name} dark={dark} />
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

export function MenuItem({ link, name,dark }: MenuModel) {
    const menuClass =  classnames({
        'py-2 text-xs px-4 block rounded-full border hover:font-semibold  ': true,
        'border-slate-50 text-slate-50 hover:border-slate-300 hover:bg-slate-300 hover:text-slate-700': !dark,
        'border-slate-900 text-slate-900 hover:border-slate-950 hover:bg-slate-300 hover:text-slate-950': dark,
    })
    return (
        <Link
            className={menuClass}
            href={link.toLowerCase()}
        >
            <li>{name}</li>
        </Link>
    );
}

export function SocialItem ({social,dark}: {social: SocialModel,dark:boolean}){
       const socialClass =  classnames({
            'rounded-full flex justify-center items-center mx-2 border p-2': true,
            'hover:bg-slate-300 hover:border-slate-300 text-slate-900 hover:text-slate-900 border-slate-900': dark,
            'hover:bg-slate-300 hover:border-slate-300 text-slate-50 hover:text-slate-950 border-slate-300': !dark,
        })


    return (
        <div key={social.name}>
        {social.link != "" ? (
            <Link href={social.link} target="blank">
                <div
                    className={socialClass}
                    key={social.name}
                >
                    <div className="size-3 flex justify-center items-center">
                        <FaIcon faClass={social.icon.class} size="xs" id={social.icon.id}  />
                    </div>
                </div>
            </Link>
        ) : (
            <div
                className={socialClass}
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
