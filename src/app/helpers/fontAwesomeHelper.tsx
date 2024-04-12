import { SizeProp, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far, fab);

export function FaIcon({faClass,}:{faClass:string}) {
    function convertToFa(){
        let transformClass = faClass.split(" ")
        let finalClass: any = []
        transformClass[0] == "fa-solid" ? finalClass.push("fas") : 
        transformClass[0] == "fa-regular" ? finalClass.push("far") : 
        transformClass[0] == "fa-brands" ? finalClass.push("fab") : ''
        finalClass.push(transformClass[1].split("-")[1])
        return finalClass
    }
    return (
        <FontAwesomeIcon size='xs' icon={convertToFa()} />
    );


}