import Link from "next/link";
import { SocialModel } from "../models/layout.model";
import { MemberModel } from "../models/page.model";
import { getMembers } from "../services/home";
import { SocialItem } from "./header";
import classnames  from  'classnames'


export default async function Members({categories}:{categories:number[]}){
    const members = await getMembers(categories);
    const grid = classnames({
        'grid grid-cols-12 pb-16': true,
        'justify-items-center': true,
        'justify-center': true,

    })
    return (
            <div className={grid}>
                <div className="grid col-span-12 lg:col-span-8 col-start-0 lg:col-start-3 grid-cols-12 justify-center gap-8 w-full">
                {members.map((m:MemberModel,index:number) => {
                        const memberPic = {
                            background: m.photo ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.99) 100%),url(${m.photo}) center / cover` : '#0f172a',
                        };
                    return (
                        
                        <div style={memberPic} className="col-span-4  w-full h-[50vh] rounded-lg p-4 flex flex-col justify-end " key={index}>
                            <Link href={'membro/' + m.slug} className="flex h-full justify-end flex-col">
                                <h4 className="font-bold text-xl mt-4 text-slate-50 ml-2">{m.name}</h4>
                                {m.cargo && m.cargo.length > 0 ? <h6 className="text-sm text-amber-400 ml-2">{m.cargo[0]["name"]}</h6> : ''}
                            </Link>


                            { m.social && m.social.length > 0 ?
                                <div className="relave z-40">
                                    {m.social.map((s:SocialModel,i:number) => {
                                        return(
                                            <div className="flex mt-4" key={i}>
                                                <SocialItem social={s} dark={true} />
                                            </div>
                                            
                                        )
                                    })}
                                    
                                </div>
                                : ''} 
                            {/* <p dangerouslySetInnerHTML={ {__html:m.text}}></p> */}
                        </div>
                    )
                })}
                </div>
                

            </div>
    )
}