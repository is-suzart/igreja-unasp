import { SizeProp, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far, fab);

export function FaIcon({faClass,size,id}:{faClass:string,size:SizeProp,id:string}) {
    function convertToFa(){
        let transformClass = faClass.split(" ")
        let finalClass: any = []
        faClass.includes("fa-solid") ? finalClass.push("fas") : 
        faClass.includes("fa-regular") ? finalClass.push("far") : 
        faClass.includes("fa-brands")? finalClass.push("fab") : ""
        finalClass.push(`fa-${id}`)
        return finalClass
    }
    return (
        <FontAwesomeIcon size={size} icon={convertToFa()} />
    );


}