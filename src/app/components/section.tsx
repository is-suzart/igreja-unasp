import { SectionModel } from "../models/page";
import classnames  from  'classnames'

export function Section ({section,keyIndex}:{section:SectionModel,keyIndex:number}){

    function classNames(tag:string) : string {
        if(tag == 'h1'){
            return classnames({
                'text-2xl font-bold': true,
                'text-slate-900': true,
                'lg:text-right': section.align == "Esquerda",
                'lg:text-left lg:w-2/3': section.align != "Esquerda"
            })
        } else if(tag == 'h6'){
            return classnames({
                'text-lg font-bold font-serif italic': true,
                'text-gray-800': true,
                'lg:text-right': section.align == "Esquerda",
                'lg:text-left lg:w-2/3': section.align != "Esquerda"
            })
        } else if(tag == 'p') {
            return classnames({
                'text-base font-medium mt-4': true,
                'lg:text-right': section.align == "Esquerda",
                'lg:text-left': section.align != "Esquerda"
            })
        } else if(tag == 'section'){
            return classnames({
                'lg:col-span-8 col-span-12': true,
                'lg:col-start-3 lg:col-end-11': true,
                'lg:flex lg:px-0 px-8': true,
                'justify-between': section.align == "Esquerda",
                'flex-row-reverse': section.align == "Esquerda"
            })
        } else if(tag == 'between') {
            return classnames({
                'lg:ml-16': section.align == "Esquerda",
                'lg:mr-16': section.align != "Esquerda",
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
                <img className="rounded-lg lg:w-1/2 w-full" src={section.image} alt={'Imagem da seção: ' + section.title } />
            </div>
        </div>
    )
}