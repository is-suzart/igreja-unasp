import { getBlogPageWithSlug } from '@/app/services/blog'
import Button from '@/app/components/button'
import DOMPurify from 'dompurify'
type BlogPageProps = {
    params: {
        id: string
    }
}
export default async function BlogPage({ params }: BlogPageProps) {
    const id = params.id
    
    const blog = await getBlogPageWithSlug(id);
    const bannerStyle = {
        backgroundImage: `url(${blog?.thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    if(blog) {
        return (
            <div>
                <div style={bannerStyle} className='flex items-center justify-center h-96 pt-10'>
                <h1 className='px-4 lg:px-0 font-black text-4xl text-center text-white'>{blog.title}</h1>
                </div>
                <div className='lg:mt-12 mt-8 px-8 lg:px-32'>
                    <div dangerouslySetInnerHTML={{ __html: blog.html }}></div>
                </div>
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