import axios from "axios"
import { BlogModel } from "../models/blog"

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
            title: item.title.rendered,
            thumb: item.yoast_head_json.og_image[0].url,
            html: item.content.rendered,
            seo: item.yoast_head_json
        }
     })
     
     

     return result
 }