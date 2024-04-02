import React, { FunctionComponent } from 'react';

interface ButtonProps {
  text: string;
  link: string;
  outline: boolean;
  type:string;
  hasIcon: boolean;
  icon?:any;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, link, outline, type, hasIcon, icon }) => {
    function btnClasses(): string {
        return outline ? `rounded-full px-5 py-2 font-bold border-2 border-${type.toLowerCase()} hover:border-${type.toLowerCase()}-hover text-${type.toLowerCase()} hover:text-${type.toLowerCase()}-hover`
        : `rounded-full px-5 py-2 font-bold border-2 border-transparent bg-${type.toLowerCase()} hover:bg-${type.toLowerCase()}-hover text-white`
    }
    return (
        link !== '' ?
        <a href={link}>
         <button className={btnClasses()}>{text}</button>
        </a> 
        : <button className={btnClasses()}>{text}</button>
    )

}

