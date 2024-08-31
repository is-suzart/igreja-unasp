import { Section } from "@/app/_components/section";
import { PubliModel, SectionModel } from "@/app/_models/page.model";
import { getPubli } from "@/app/_services/home";



type PageParam = {
    params: {
        slug: string
    }
}


export default async function BlogPage({ params }: PageParam) {
    const post:PubliModel = await getPubli(params.slug);
    return (
        <div className="pt-24" >
            {post.section.map((s:SectionModel,i:number) => (
                <Section key={i} section={s} keyIndex={i} />
            ) )}
            {/* <p>{JSON.stringify(post)}</p> */}
        </div>
    )
}