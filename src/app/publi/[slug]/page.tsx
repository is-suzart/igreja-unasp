import { getPubli } from "@/app/_services/home";



type PageParam = {
    params: {
        slug: string
    }
}


export default async function BlogPage({ params }: PageParam) {
    const post = await getPubli(params.slug);
    return (
        <div className="h-[50vh] bg-slate-900 text-white">
            <p>{JSON.stringify(post)}</p>
        </div>
    )
}