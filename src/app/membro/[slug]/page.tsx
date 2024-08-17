import { BlogModel } from "@/app/models/blog";
import { getMembroBySlug } from "@/app/services/blog";
import { cleanIt } from "@/app/helpers/serifHelper";
import { MemberModel } from "@/app/models/page.model";
import { SocialItem } from "@/app/components/header";
import { SocialModel } from "@/app/models/layout.model";


type MembroParam = {
    params: {
        slug: string
    }
}


export default async function BlogPage({ params }: MembroParam) {
    const membro:MemberModel|null = await getMembroBySlug(params.slug);
    if(membro) {
        return (
            <div className="mt-24 text-center">
                <h1 className="text-5xl font-bold font-serif text-slate-900 ">{membro.name}</h1>
                <h6 className="text-xl font-bold text-red-400">{membro.cargo[0].name}</h6>
                <div className="my-4 w-full px-8 lg:w-[40vw] lg:mx-auto"> 
                    <div className="flex flex-wrap justify-center my-4" >
                        {membro.social && membro.social.map((s: SocialModel, i: number) => {
                            return (
                                <SocialItem social={s} dark={true} key={i} />
                            )

                        })}
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <img src={membro.photo} className="rounded-2xl w-full px-8 lg:px-0 lg:w-[30vw] lg:mx-auto" alt={membro.name} />
                </div>
                <div className="my-4 w-full px-8 lg:w-[40vw] lg:mx-auto html-container">
                    <p dangerouslySetInnerHTML={{ __html: cleanIt(membro.html!) }}></p>
                </div>

                {/* <p>{JSON.stringify(membro)}</p> */}
            </div>
        )
    }

}