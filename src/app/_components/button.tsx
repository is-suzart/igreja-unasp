import classnames  from  'classnames'
import { FaIcon } from '../_helpers/fontAwesomeHelper';
import { ButtonModel } from '../_models/layout.model';
import { handleTarget, handleUrl } from '../_helpers/handleLink';
import Link from 'next/link';
import { handleBtnColors } from '../_helpers/colorHelper';
interface ButtonProps {
  text: string;
  link: string;
  outline: boolean;
  type: 'perigo' | 'sucesso' | 'aviso' | 'link' | 'escuro' | 'claro';
  hasIcon: boolean;
  icon?:any;
  isFullSize?: boolean;
}

export default function Button({ text, link, outline, color_grupo, hasIcon, icon, isFullSize }: ButtonModel) {

    return (
        <Link href={handleUrl(link)} target={handleTarget(link)}>
            <button className={handleBtnColors(color_grupo,outline)}>
          {hasIcon  && icon ? 
            <span className='flex items-center' >
              <span className='w-[13px] h-[13px] flex items-center justify-center mx-2'>
                <FaIcon size='sm' faClass={icon!.class} id={icon!.id} /> 
              </span>
              
              <span className="ml-2">{text}</span> 
            </span>  : 
            text}
          </button>
        </Link> 
        
    );
}

