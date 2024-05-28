import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { getBlogPageWithSlug } from '@/app/services/blog'
import Button from '@/app/components/button'
type BlogPageProps = {
    params: {
        id: string
    }
}
export default async function BlogPage({ params }: BlogPageProps) {
    const id = params.id
    const blog = await getBlogPageWithSlug(id);
    if(blog) {
        return (
            <div>
                <h1>Blog page!</h1>
                <code>{JSON.stringify(blog)}</code>
            </div>
        )
    } else {
        return (
            <div className=' h-screen bg-slate-900 text-white flex justify-center items-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-serif text-4xl mb-4'>Texto não encontrado!</h1>
                    <Button 
                    text='Voltar' 
                    link='/blog' 
                    color='claro' 
                    outline={false} 
                    hasIcon={false} 
                    isFullSize={false}/>
                </div>

            </div>
        )
    }
}