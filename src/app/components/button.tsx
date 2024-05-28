import classnames  from  'classnames'
import { FaIcon } from '../helpers/fontAwesomeHelper';
import { ButtonModel } from '../models/layout';
interface ButtonProps {
  text: string;
  link: string;
  outline: boolean;
  type: 'perigo' | 'sucesso' | 'aviso' | 'link' | 'escuro' | 'claro';
  hasIcon: boolean;
  icon?:any;
  isFullSize?: boolean;
}

export default function Button({ text, link, outline, color, hasIcon, icon, isFullSize }: ButtonModel) {
    function btnClasses(): string {
        const baseClasses = {
          'custom-btn': true,
          'transition-all': true,
          'duration-200': true,
          'ease-in-out': true,
          'border-transparent': !outline,
          'text-white': !outline && color.toLocaleLowerCase() !== 'claro' && color.toLocaleLowerCase() !== 'aviso',
          'text-slate-900' : !outline && (color.toLocaleLowerCase() == 'claro' || color.toLocaleLowerCase() == 'aviso'),
          [`hover:bg-${color.toLowerCase()}`]: outline,
          [`border-${color.toLowerCase()}`]: outline,
          [`text-${color.toLowerCase()}`]: outline,
          [`hover:text-white`]: outline && color.toLocaleLowerCase() !== 'claro' && color.toLocaleLowerCase() !== 'aviso',
          [`hover:text-slate-900`]: outline && (color.toLocaleLowerCase() == 'claro' || color.toLocaleLowerCase() == 'aviso'),
          [`bg-${color.toLowerCase()}`]: !outline,
          [`hover:bg-${color.toLowerCase()}-hover`]: !outline,
          [`w-full`]: isFullSize
        };
      
        return classnames(baseClasses);
      }

    return (
        <a href={link !== "" ? link : undefined}>
            <button className={btnClasses()}>
          {hasIcon ? 
            <span className='flex items-center' >
              <span className=' w-4'>
                <FaIcon size='xl' faClass={icon!.class} /> 
              </span>
              
              <span className="ml-2">{text}</span> 
            </span>  : 
            text}
          </button>
        </a> 
        
    );
}

