import { BlogModel } from "../models/blog"
import { getBlogPage } from "../services/blog"
export default async function Blog(){
    const blogs = await getBlogPage()
    return (
        <div className="bg-slate-100">
            <div className="bg-slate-900 flex items-center justify-center h-64 pt-10">
                <h1 className="font-black text-4xl text-center text-white">Blog</h1>
            </div>
            {
                blogs.map((blog:BlogModel) => {
                    const divStyle = {
                        backgroundImage: `url(${blog.thumb})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    };
                    return(
                        
                        <div>
                            <div className="w-full h-24" style={divStyle}></div>
                            <h3 className="font-bold text-base text-slate-900">{blog.title}</h3>
                            <p className="text-sm text-slate-500">{blog.seo.description}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}