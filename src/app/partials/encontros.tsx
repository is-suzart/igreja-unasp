import { EncounterModel } from "../_models/page.model";
import { serifClass } from "../_helpers/serifHelper";
import { returnColor } from "../_helpers/colorHelper";
import { cleanIt } from "../_helpers/serifHelper";

export function Encontros({encontros}:{encontros:EncounterModel[]}){
    return (
        <div className="w-full bg-slate-100 p-8 overflow-x-scroll lg:overflow-x-auto">
            <div className={`grid grid-cols-${encontros.length} gap-4 w-${encontros.length}00% lg:w-auto`}>
                {
                    encontros.map((x:EncounterModel,i:number) => {
                        return (
                            <div className="bg-white text-slate-900 rounded-lg p-4 col-span-1" key={x.subtitle.text}>
                                <div className="py-1 mb-1">
                                    <h6 className={`text-${returnColor(x.subtitle.color_grupo)} ${serifClass} font-bold text-sm`}>{x.subtitle.text}</h6>
                                    <h5 className=" font-bold">{x.title}</h5>
                                </div>
                                <div className=" text-xs" dangerouslySetInnerHTML={{__html:cleanIt(x.text)}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}