import React, { FunctionComponent } from 'react';

interface ButtonProps {
  text: string;
  link: string;
  outline: boolean;
  type: 'perigo' | 'sucesso' | 'aviso' | 'link' | 'escuro' | 'claro';
  hasIcon: boolean;
  icon?:any;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, link, outline, type, hasIcon, icon }) => {
    function btnClasses(): string {
        return outline ? `custom-btn border-${type.toLowerCase()} hover:border-${type.toLowerCase()}-hover text-${type.toLowerCase()} hover:text-${type.toLowerCase()}-hover`
        : `custom-btn border-transparent bg-${type.toLowerCase()} hover:bg-${type.toLowerCase()}-hover text-white`
    }
    return (
        link !== '' ?
        <a href={link}>
         <button className={btnClasses()}>{text}</button>
        </a> 
        : <button className={btnClasses()}>{text}</button>
    )

}

