import classNames from "classnames";
import { ColorGroup } from "../models/layout.model";

export function returnColor(colorGroup:ColorGroup){
    return colorGroup.colors.toLocaleLowerCase()+ '-' + colorGroup.shade.toLocaleLowerCase()
}
export function returnHoverColor(colorGroup:ColorGroup){
    var finalShade = colorGroup.shade == '50' ? '100' : colorGroup.shade == '900' ? '950' : (Number(colorGroup.shade) + 100).toString()
    return colorGroup.colors.toLocaleLowerCase()+ '-' + finalShade
}
export function handleBtnColors(colorGroup:ColorGroup,outline:boolean){
    if(!colorGroup){
        return classNames({})
    }
    return classNames({
        'custom-btn': true,
        'transition-all': true,
        'duration-200': true,
        'ease-in-out': true,
        'text-slate-900': Number(colorGroup.shade) < 400 ? true && !outline : false,
        'text-slate-50': Number(colorGroup.shade) >= 400 ? true && !outline : false ,
        ['bg-'+returnColor(colorGroup)] :  !outline,
        ['hover:bg-'+returnHoverColor(colorGroup)] :  !outline,
        ['border-'+returnColor(colorGroup)] :  outline,
        ['hover:bg-'+returnColor(colorGroup)] :  outline,
        ['text-'+returnColor(colorGroup)] :  outline,
        ['hover:text-slate-50'] : Number(colorGroup.shade) >= 400 && outline,
        ['hover:text-slate-900'] : Number(colorGroup.shade) < 400 && outline,
        'w-full': true


    })
}