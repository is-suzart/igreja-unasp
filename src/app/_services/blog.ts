import axios from "axios"
import { BlogModel } from "../_models/blog"
import { MemberModel } from "../_models/page.model"

const urlApi = 'https://igrejaunasp.com/api/wp-json/wp/v2/'
export async function getBlogPage(){
    const res:any = await axios({
         method: 'get',
         url: `${urlApi}blog`,
     })
     const data = res.data
     const result: BlogModel[] = data.map((item: any) => {
        return {
            id: item.id,
            slug: item.slug,
            title: item.title.rendered,
            thumb: item.yoast_head_json.og_image[0].url,
            html: item.content.rendered,
            seo: item.yoast_head_json
        }
     })
     
     

     return result
 }

 export async function getBlogPageWithSlug(slug:string){
    const res:any = await axios({
         method: 'get',
         url: `${urlApi}blog`,
         params: {slug:slug}
     })
     const item = res.data[0]
     if(res.data.length > 0){
        const result: BlogModel = 
        {
            id: item.id,
            title: item.title.rendered,
            slug: item.slug,
            thumb: item.yoast_head_json.og_image[0].url,
            html: item.content.rendered,
            seo: item.yoast_head_json
        }

     return result
     } else {
        return null
     }

 }
 export async function getMembroBySlug(slug:string){
    const res:any = await axios({
        method: 'get',
        url: `${urlApi}membro`,
        params: {slug:slug}
    })
    const item = res.data[0]
    if(res.data.length > 0){
        const result: MemberModel ={
            id: item.id,
            slug: item.slug,
            name: item.title.rendered,
            photo: item.yoast_head_json.og_image ? item.yoast_head_json.og_image[0].url : undefined,
            text: item.content.rendered,
            cargo: item.acf.cargo,
            social: item.acf.social,
            html: item.content.rendered
        }

    return result
    } else {
       return null
    }

}