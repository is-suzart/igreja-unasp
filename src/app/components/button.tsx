import classnames  from  'classnames'
interface ButtonProps {
  text: string;
  link: string;
  outline: boolean;
  type: 'perigo' | 'sucesso' | 'aviso' | 'link' | 'escuro' | 'claro';
  hasIcon: boolean;
  icon?:any;
  isFullSize?: boolean;
}

export default function Button({ text, link, outline, type, hasIcon, icon, isFullSize }: ButtonProps) {
    function btnClasses(): string {
        const baseClasses = {
          'custom-btn': true,
          'transition-all': true,
          'duration-200': true,
          'ease-in-out': true,
          'border-transparent': !outline,
          'text-white': !outline,
          [`hover:bg-${type.toLowerCase()}`]: outline,
          [`border-${type.toLowerCase()}`]: outline,
          [`text-${type.toLowerCase()}`]: outline,
          [`hover:text-white`]: outline && type !== 'claro' && type !== 'aviso',
          [`hover:text-slate-900`]: outline && (type == 'claro' || type == 'aviso'),
          [`bg-${type.toLowerCase()}`]: !outline,
          [`hover:bg-${type.toLowerCase()}-hover`]: !outline,
          [`w-full`]: isFullSize
        };
      
        return classnames(baseClasses);
      }

    return (
        link !== '' ?
        <a href={link}>
            <button className={btnClasses()}>{text}</button>
        </a> 
        : <button className={btnClasses()}>{text}</button>
    );
}

