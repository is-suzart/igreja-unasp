import { SectionModel } from "../models/page";
import classnames  from  'classnames'

export function Section ({section,keyIndex}:{section:SectionModel,keyIndex:number}){

    function classNames(tag:string) : string {
        if(tag == 'h1'){
            return classnames({
                'text-3xl font-semibold': true,
                'text-slate-900': true,
                'text-right': section.align == "Esquerda",
                'text-left w-2/3': section.align != "Esquerda"
            })
        } else if(tag == 'h6'){
            return classnames({
                'text-xl font-black': true,
                'text-gray-600': true,
                'text-right': section.align == "Esquerda",
                'text-left w-2/3': section.align != "Esquerda"
            })
        } else if(tag == 'p') {
            return classnames({
                'text-base font-medium mt-4': true,
                'text-right': section.align == "Esquerda",
                'text-left': section.align != "Esquerda"
            })
        } else if(tag == 'section'){
            return classnames({
                'col-span-8': true,
                'col-start-3 col-end-11': true,
                'flex': true,
                'justify-between': section.align == "Esquerda",
                'flex-row-reverse': section.align == "Esquerda"
            })
        } else if(tag == 'between') {
            return classnames({
                'ml-16': section.align == "Esquerda",
                'mr-16': section.align != "Esquerda",
            })
        } else if(tag == 'grid') {
            return classnames({
                'grid grid-cols-12 py-16': true,
                'gap-8': true,
                'justify-items-center': true,
                'justify-center': true,
                'bg-white': keyIndex % 2 === 0,
                'bg-slate-100': keyIndex % 2 !== 0,
            })
        } else {
            return classnames({})
        }

    }
    return (
        <div className={classNames('grid')}>
            <div className={classNames('section')}>
                <div className={classNames('between')}>
                    <h6 className={classNames('h6')}>{section.subTitle}</h6>
                    <h1 className={classNames('h1')}>{section.title}</h1>
                    <p className={classNames('p')}>{section.text}</p>
                    <div className="mt-4">

                    </div>
                </div>
                <img className="rounded-lg w-1/2" src={section.image} alt={'Imagem da seção: ' + section.title } />
            </div>
        </div>
    )
}